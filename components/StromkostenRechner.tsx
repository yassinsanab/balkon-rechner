"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import s from "./Rechner.module.css";

const PRESETS: { label: string; kwh: number }[] = [
  { label: "1 Person", kwh: 1800 },
  { label: "2 Personen", kwh: 2800 },
  { label: "3 Personen", kwh: 3600 },
  { label: "4+ Personen", kwh: 4500 },
];

export default function StromkostenRechner() {
  const [kwh, setKwh] = useState(2800);
  const [priceCt, setPriceCt] = useState(37);

  const r = useMemo(() => {
    const yearly = (kwh * priceCt) / 100;
    return { yearly, monthly: yearly / 12 };
  }, [kwh, priceCt]);

  const euro = (n: number) =>
    new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
  const num = (n: number) => new Intl.NumberFormat("de-DE").format(n);

  return (
    <div className={s.grid} id="rechner">
      <section className="card" aria-label="Eingaben">
        <div className={s.field}>
          <span className={s.label}>Haushaltsgröße</span>
          <div className={s.seg} role="group" aria-label="Haushaltsgröße">
            {PRESETS.map((p) => (
              <button
                key={p.label}
                className={kwh === p.kwh ? `${s.segBtn} ${s.segOn}` : s.segBtn}
                onClick={() => setKwh(p.kwh)}
                aria-pressed={kwh === p.kwh}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <div className={s.field}>
          <div className={s.labelRow}>
            <span className={s.label}>Jahresverbrauch</span>
            <span className={s.value}>{num(kwh)} kWh</span>
          </div>
          <input
            className={s.range}
            type="range"
            min={500}
            max={8000}
            step={100}
            value={kwh}
            onChange={(e) => setKwh(Number(e.target.value))}
            aria-label="Jahresverbrauch in Kilowattstunden"
          />
        </div>

        <div className={s.field}>
          <span className={s.label}>Strompreis</span>
          <div className={s.inputWrap}>
            <input
              className={s.input}
              type="number"
              min={10}
              max={80}
              value={priceCt}
              onChange={(e) => setPriceCt(Number(e.target.value))}
              aria-label="Strompreis in Cent pro Kilowattstunde"
            />
            <span className={s.unit}>ct/kWh</span>
          </div>
          <span className={s.hint}>Bundesdurchschnitt 2026: rund 37 ct/kWh.</span>
        </div>
      </section>

      <section className="card" aria-label="Ergebnis" aria-live="polite">
        <div className={s.totals}>
          <div className={`${s.total} ${s.totalAccent}`}>
            <span className={s.totalLabel}>Stromkosten pro Monat</span>
            <span className={s.totalVal}>{euro(r.monthly)}</span>
          </div>
          <div className={s.total}>
            <span className={s.totalLabel}>Stromkosten pro Jahr</span>
            <span className={s.totalVal}>{euro(r.yearly)}</span>
          </div>
        </div>

        <div className={s.breakdown}>
          <p className={s.bdNote}>
            Ein Balkonkraftwerk deckt einen Teil dieser Kosten mit eigenem Solarstrom. Wie viel genau,
            zeigt dir der{" "}
            <Link href="/" style={{ color: "var(--accent)" }}>
              Balkonkraftwerk-Rechner
            </Link>
            .
          </p>
        </div>

        <p className={s.disclaimer}>
          Schätzung auf Basis deiner Eingaben. Der tatsächliche Verbrauch hängt von Geräten,
          Haushalt und Nutzungsverhalten ab.
        </p>
      </section>
    </div>
  );
}

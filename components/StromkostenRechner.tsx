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

const GERMAN_AVG_KWH = 2800;
const BKW_GENERATION = 700;
const BKW_SELF_PCT = 0.35;

export default function StromkostenRechner() {
  const [kwh, setKwh] = useState(2800);
  const [priceCt, setPriceCt] = useState(37);

  const r = useMemo(() => {
    const yearly = (kwh * priceCt) / 100;
    const monthly = yearly / 12;
    const daily = yearly / 365;
    const diffPct = Math.round(((kwh - GERMAN_AVG_KWH) / GERMAN_AVG_KWH) * 100);
    const bkwSavings = (BKW_GENERATION * BKW_SELF_PCT * priceCt) / 100;
    const bkwCoversPct = Math.round((bkwSavings / yearly) * 100);
    return { yearly, monthly, daily, diffPct, bkwSavings, bkwCoversPct };
  }, [kwh, priceCt]);

  const euro = (n: number) =>
    new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
  const num = (n: number) => new Intl.NumberFormat("de-DE").format(n);

  const compLabel =
    r.diffPct === 0
      ? "Bundesdurchschnitt"
      : r.diffPct > 0
      ? `${r.diffPct} % über Ø`
      : `${Math.abs(r.diffPct)} % unter Ø`;
  const compClass = r.diffPct > 10 ? s["badge--warn"] : r.diffPct < -10 ? s["badge--good"] : s["badge--neutral"];

  return (
    <div className={s.grid} id="rechner">
      {/* Eingaben */}
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
          <span className={s.hint}>Bundesdurchschnitt 2026: rund 2.800 kWh (2 Personen).</span>
        </div>

        <div className={s.field}>
          <div className={s.labelRow}>
            <span className={s.label}>Strompreis</span>
            <span className={s.value}>{priceCt} ct/kWh</span>
          </div>
          <input
            className={s.range}
            type="range"
            min={10}
            max={80}
            step={1}
            value={priceCt}
            onChange={(e) => setPriceCt(Number(e.target.value))}
            aria-label="Strompreis in Cent pro Kilowattstunde"
          />
          <span className={s.hint}>Bundesdurchschnitt 2026: rund 37 ct/kWh.</span>
        </div>
      </section>

      {/* Ergebnis */}
      <section className="card" aria-label="Ergebnis" aria-live="polite">
        <div className={s.totals}>
          <div className={`${s.total} ${s.totalAccent}`}>
            <span className={s.totalLabel}>Kosten pro Monat</span>
            <span className={s.totalVal}>{euro(r.monthly)}</span>
          </div>
          <div className={s.total}>
            <span className={s.totalLabel}>Kosten pro Jahr</span>
            <span className={s.totalVal}>{euro(r.yearly)}</span>
          </div>
        </div>

        <div className={s.breakdown}>
          <ul>
            <li>
              <span>Vergleich Bundesdurchschnitt</span>
              <span>
                <span className={`${s.badge} ${compClass}`}>{compLabel}</span>
              </span>
            </li>
            <li>
              <span>Kosten pro Tag</span>
              <span className={s.bdVal}>{euro(r.daily)}</span>
            </li>
            <li>
              <span>Preis pro kWh</span>
              <span className={s.bdVal}>{priceCt} ct</span>
            </li>
          </ul>
          <p className={s.bdNote}>
            Ein Balkonkraftwerk (800 Wp) könnte rund{" "}
            <strong>{euro(r.bkwSavings)}/Jahr</strong> davon einsparen – das entspricht etwa{" "}
            {r.bkwCoversPct} % deiner Jahresstromkosten.
          </p>
        </div>

        <div className={s.cta}>
          <div className={s.ctaText}>
            <h3>Balkonkraftwerk lohnt sich?</h3>
            <p>Berechne Ertrag und Amortisation für dein Bundesland.</p>
          </div>
          <Link href="/" className="btn">
            Zum Rechner
          </Link>
        </div>

        <p className={s.disclaimer}>
          Schätzung auf Basis deiner Eingaben. Der tatsächliche Verbrauch hängt von Geräten,
          Haushalt und Nutzungsverhalten ab.
        </p>
      </section>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import s from "./Rechner.module.css";

const YIELD_SOUTH = 850;

export default function SpeicherRechner() {
  const [wp, setWp] = useState(800);
  const [priceCt, setPriceCt] = useState(37);
  const [speicherKwh, setSpeicherKwh] = useState(2);
  const [speicherCost, setSpeicherCost] = useState(600);

  const r = useMemo(() => {
    const effectiveWp = Math.min(wp, 800) + Math.max(0, wp - 800) * 0.65;
    const generation = (effectiveWp / 1000) * YIELD_SOUTH;
    const scWithout = 0.35;
    const scWith = Math.min(0.65, scWithout + speicherKwh * 0.12);
    const extraKwh = generation * (scWith - scWithout);
    const extraSavings = (extraKwh * priceCt) / 100;
    const payback = extraSavings > 0 ? speicherCost / extraSavings : 0;
    const savingsWithout = (generation * scWithout * priceCt) / 100;
    const savingsWith = (generation * scWith * priceCt) / 100;
    return {
      extraKwh: Math.round(extraKwh),
      extraSavings,
      payback,
      scWith: Math.round(scWith * 100),
      scWithout: Math.round(scWithout * 100),
      savingsWithout,
      savingsWith,
      generation: Math.round(generation),
    };
  }, [wp, priceCt, speicherKwh, speicherCost]);

  const euro = (n: number) =>
    new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
  const num = (n: number) => new Intl.NumberFormat("de-DE").format(n);
  const jahre = (n: number) =>
    n > 0 ? new Intl.NumberFormat("de-DE", { maximumFractionDigits: 1 }).format(n) + " Jahre" : "—";

  const worthIt = r.payback > 0 && r.payback <= 12;

  return (
    <div className={s.grid} id="rechner">
      {/* Eingaben */}
      <section className="card" aria-label="Eingaben">
        <div className={s.field}>
          <div className={s.labelRow}>
            <span className={s.label}>Modulleistung</span>
            <span className={s.value}>{num(wp)} Wp</span>
          </div>
          <input
            className={s.range}
            type="range"
            min={300}
            max={2000}
            step={100}
            value={wp}
            onChange={(e) => setWp(Number(e.target.value))}
            aria-label="Modulleistung in Wattpeak"
          />
          <span className={s.hint}>Jahreserzeugung (Richtwert Süd): ca. {num(r.generation)} kWh.</span>
        </div>

        <div className={s.field}>
          <div className={s.labelRow}>
            <span className={s.label}>Speicherkapazität</span>
            <span className={s.value}>{num(speicherKwh)} kWh</span>
          </div>
          <input
            className={s.range}
            type="range"
            min={0.5}
            max={5}
            step={0.5}
            value={speicherKwh}
            onChange={(e) => setSpeicherKwh(Number(e.target.value))}
            aria-label="Speicherkapazität in Kilowattstunden"
          />
          <span className={s.hint}>
            Eigenverbrauch steigt von {r.scWithout} % auf {r.scWith} %.
          </span>
        </div>

        <div className={`${s.field} ${s.inline}`}>
          <div className={s.numField}>
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
          </div>
          <div className={s.numField}>
            <span className={s.label}>Speicherkosten</span>
            <div className={s.inputWrap}>
              <input
                className={s.input}
                type="number"
                min={0}
                max={3000}
                step={50}
                value={speicherCost}
                onChange={(e) => setSpeicherCost(Number(e.target.value))}
                aria-label="Speicherkosten in Euro"
              />
              <span className={s.unit}>€</span>
            </div>
          </div>
        </div>
      </section>

      {/* Ergebnis */}
      <section className="card" aria-label="Ergebnis" aria-live="polite">
        <div className={s.totals}>
          <div className={`${s.total} ${s.totalAccent}`}>
            <span className={s.totalLabel}>Mehr-Ersparnis / Jahr</span>
            <span className={s.totalVal}>{euro(r.extraSavings)}</span>
          </div>
          <div className={s.total}>
            <span className={s.totalLabel}>Speicher-Amortisation</span>
            <span className={s.totalVal}>{jahre(r.payback)}</span>
          </div>
        </div>

        <div className={s.breakdown}>
          <ul>
            <li>
              <span>Ersparnis ohne Speicher</span>
              <span className={s.bdVal}>{euro(r.savingsWithout)}/Jahr</span>
            </li>
            <li>
              <span>Ersparnis mit Speicher</span>
              <span className={s.bdVal}>{euro(r.savingsWith)}/Jahr</span>
            </li>
            <li>
              <span>Zusätzlich selbst genutzt</span>
              <span className={s.bdVal}>{num(r.extraKwh)} kWh/Jahr</span>
            </li>
          </ul>
          <p className={s.bdNote}>
            {worthIt
              ? `Amortisation in ${jahre(r.payback)} – innerhalb der typischen Speicher-Lebensdauer (10–15 Jahre). Lohnt sich.`
              : r.payback > 12
              ? `Amortisation in ${jahre(r.payback)} – das übersteigt die übliche Lebensdauer. Prüfe eine kleinere Kapazität.`
              : "Erhöhe Modulleistung oder Strompreis, um die Wirtschaftlichkeit zu prüfen."}
          </p>
        </div>

        <div className={s.cta}>
          <div className={s.ctaText}>
            <h3>Gesamtanlage planen?</h3>
            <p>Berechne Ertrag und Amortisation inkl. Speicher im Hauptrechner.</p>
          </div>
          <Link href="/" className="btn">
            Zum Rechner
          </Link>
        </div>

        <p className={s.disclaimer}>
          Schätzung auf Basis typischer Eigenverbrauchswerte (Richtwert Süd 850 kWh/kWp). Tatsächliche
          Werte hängen von Ausrichtung, Standort und Verbrauchsprofil ab. Keine Energieberatung.
        </p>
      </section>
    </div>
  );
}

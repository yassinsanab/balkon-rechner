"use client";

import { useMemo, useState } from "react";
import s from "./Rechner.module.css";

const YIELD_SOUTH = 850; // kWh/kWp/Jahr, Richtwert Südausrichtung

export default function SpeicherRechner() {
  const [wp, setWp] = useState(800);
  const [priceCt, setPriceCt] = useState(37);
  const [speicherKwh, setSpeicherKwh] = useState(2);
  const [speicherCost, setSpeicherCost] = useState(600);

  const r = useMemo(() => {
    const effectiveWp = Math.min(wp, 800) + Math.max(0, wp - 800) * 0.65;
    const generation = (effectiveWp / 1000) * YIELD_SOUTH;
    // Eigenverbrauch ohne Speicher ~35 %, mit Speicher bis ~65 %, skaliert mit Kapazität.
    const scWithout = 0.35;
    const scWith = Math.min(0.65, scWithout + speicherKwh * 0.12);
    const extraKwh = generation * (scWith - scWithout);
    const extraSavings = (extraKwh * priceCt) / 100;
    const payback = extraSavings > 0 ? speicherCost / extraSavings : 0;
    return {
      extraKwh: Math.round(extraKwh),
      extraSavings,
      payback,
      scWith: Math.round(scWith * 100),
    };
  }, [wp, priceCt, speicherKwh, speicherCost]);

  const euro = (n: number) =>
    new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
  const num = (n: number) => new Intl.NumberFormat("de-DE").format(n);
  const jahre = (n: number) =>
    n > 0 ? new Intl.NumberFormat("de-DE", { maximumFractionDigits: 1 }).format(n) + " Jahre" : "—";

  return (
    <div className={s.grid} id="rechner">
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
          <span className={s.hint}>Eigenverbrauch mit Speicher ca. {r.scWith} %.</span>
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

      <section className="card" aria-label="Ergebnis" aria-live="polite">
        <div className={s.totals}>
          <div className={`${s.total} ${s.totalAccent}`}>
            <span className={s.totalLabel}>Mehr-Ersparnis pro Jahr</span>
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
              <span>Zusätzlich selbst genutzt</span>
              <span className={s.bdVal}>{num(r.extraKwh)} kWh/Jahr</span>
            </li>
          </ul>
          <p className={s.bdNote}>
            Der Speicher rechnet sich, wenn er sich innerhalb seiner Lebensdauer (meist 10 bis 15
            Jahre) amortisiert. Ein zu großer Speicher bleibt im Winter oft leer – kleiner ist hier
            häufig wirtschaftlicher.
          </p>
        </div>

        <p className={s.disclaimer}>
          Schätzung auf Basis typischer Eigenverbrauchswerte. Tatsächliche Werte hängen von
          Verbrauchsprofil, Ausrichtung und Wetter ab. Keine Energieberatung.
        </p>
      </section>
    </div>
  );
}

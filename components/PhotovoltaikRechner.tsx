"use client";

import { useMemo, useState } from "react";
import s from "./Rechner.module.css";

const YIELD: Record<string, { label: string; kwhPerKwp: number }> = {
  nord: { label: "Norden", kwhPerKwp: 930 },
  mitte: { label: "Mitte", kwhPerKwp: 1020 },
  sued: { label: "Süden", kwhPerKwp: 1120 },
};
const FEED_IN_CT = 8; // ct/kWh, Richtwert Einspeisevergütung kleine Anlagen 2026
const COST_PER_KWP = 1500;

export default function PhotovoltaikRechner() {
  const [kwp, setKwp] = useState(8);
  const [region, setRegion] = useState("mitte");
  const [priceCt, setPriceCt] = useState(37);
  const [eigen, setEigen] = useState(30); // Eigenverbrauch %

  const r = useMemo(() => {
    const generation = kwp * YIELD[region].kwhPerKwp;
    const selfKwh = generation * (eigen / 100);
    const feedKwh = generation - selfKwh;
    const selfSavings = (selfKwh * priceCt) / 100;
    const feedRevenue = (feedKwh * FEED_IN_CT) / 100;
    const annual = selfSavings + feedRevenue;
    const cost = kwp * COST_PER_KWP;
    const payback = annual > 0 ? cost / annual : 0;
    return {
      generation: Math.round(generation),
      annual,
      selfSavings,
      feedRevenue,
      payback,
      cost,
    };
  }, [kwp, region, priceCt, eigen]);

  const euro = (n: number) =>
    new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
  const num = (n: number) => new Intl.NumberFormat("de-DE").format(n);
  const jahre = (n: number) =>
    n > 0 ? new Intl.NumberFormat("de-DE", { maximumFractionDigits: 1 }).format(n) + " Jahre" : "—";

  return (
    <div className={s.grid} id="rechner">
      <section className={s.panel} aria-label="Eingaben">
        <div className={s.field}>
          <div className={s.labelRow}>
            <span className={s.label}>Anlagengröße</span>
            <span className={s.value}>{num(kwp)} kWp</span>
          </div>
          <input className={s.range} type="range" min={3} max={20} step={1} value={kwp}
            onChange={(e) => setKwp(Number(e.target.value))} aria-label="Anlagengröße in kWp" />
          <span className={s.hint}>Anschaffung ca. {euro(r.cost)} (≈ 1.500 €/kWp).</span>
        </div>
        <div className={s.field}>
          <span className={s.label}>Region</span>
          <div className={s.seg} role="group" aria-label="Region">
            {Object.entries(YIELD).map(([k, v]) => (
              <button key={k} className={region === k ? `${s.segBtn} ${s.segOn}` : s.segBtn}
                onClick={() => setRegion(k)} aria-pressed={region === k}>{v.label}</button>
            ))}
          </div>
        </div>
        <div className={s.field}>
          <div className={s.labelRow}>
            <span className={s.label}>Eigenverbrauch</span>
            <span className={s.value}>{num(eigen)} %</span>
          </div>
          <input className={s.range} type="range" min={15} max={80} step={5} value={eigen}
            onChange={(e) => setEigen(Number(e.target.value))} aria-label="Eigenverbrauch in Prozent" />
          <span className={s.hint}>Ohne Speicher ca. 25–35 %, mit Speicher 50–70 %.</span>
        </div>
        <div className={s.field}>
          <span className={s.label}>Strompreis</span>
          <div className={s.inputWrap}>
            <input className={s.input} type="number" min={10} max={80} value={priceCt}
              onChange={(e) => setPriceCt(Number(e.target.value))} aria-label="Strompreis in Cent pro kWh" />
            <span className={s.unit}>ct/kWh</span>
          </div>
        </div>
      </section>

      <section className={s.results} aria-label="Ergebnis" aria-live="polite">
        <div className={s.totals}>
          <div className={`${s.total} ${s.totalAccent}`}>
            <span className={s.totalLabel}>Ertrag pro Jahr</span>
            <span className={s.totalVal}>{euro(r.annual)}</span>
          </div>
          <div className={s.total}>
            <span className={s.totalLabel}>Amortisation</span>
            <span className={s.totalVal}>{jahre(r.payback)}</span>
          </div>
          <div className={s.total}>
            <span className={s.totalLabel}>Stromerzeugung</span>
            <span className={s.totalVal}>{num(r.generation)} kWh</span>
          </div>
        </div>
        <div className={s.breakdown}>
          <ul>
            <li><span>Eigenverbrauchs-Ersparnis</span><span className={s.bdVal}>{euro(r.selfSavings)}/Jahr</span></li>
            <li><span>Einspeisevergütung (~8 ct)</span><span className={s.bdVal}>{euro(r.feedRevenue)}/Jahr</span></li>
          </ul>
          <p className={s.bdNote}>
            Bei der Dachanlage zählt – anders als beim Balkonkraftwerk – auch die Einspeisevergütung.
            Trotzdem ist der selbst genutzte Strom am wertvollsten.
          </p>
        </div>
        <p className={s.disclaimer}>
          Schätzung auf Basis von Richtwerten. Tatsächliche Werte hängen von Dach, Ausrichtung, Verschattung
          und Angebot ab. Keine Energieberatung.
        </p>
      </section>
    </div>
  );
}

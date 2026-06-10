"use client";

import { useMemo, useState } from "react";
import s from "./Rechner.module.css";

export default function StromtarifVergleich() {
  const [kwh, setKwh] = useState(3000);
  const [oldCt, setOldCt] = useState(42);
  const [oldBase, setOldBase] = useState(12);
  const [newCt, setNewCt] = useState(28);
  const [newBase, setNewBase] = useState(10);

  const r = useMemo(() => {
    const oldCost = (kwh * oldCt) / 100 + oldBase * 12;
    const newCost = (kwh * newCt) / 100 + newBase * 12;
    return { oldCost, newCost, savings: oldCost - newCost };
  }, [kwh, oldCt, oldBase, newCt, newBase]);

  const euro = (n: number) =>
    new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
  const num = (n: number) => new Intl.NumberFormat("de-DE").format(n);

  return (
    <div className={s.grid} id="rechner">
      <section className={s.panel} aria-label="Eingaben">
        <div className={s.field}>
          <div className={s.labelRow}>
            <span className={s.label}>Jahresverbrauch</span>
            <span className={s.value}>{num(kwh)} kWh</span>
          </div>
          <input className={s.range} type="range" min={500} max={8000} step={100} value={kwh}
            onChange={(e) => setKwh(Number(e.target.value))} aria-label="Jahresverbrauch in kWh" />
        </div>
        <div className={`${s.field} ${s.inline}`}>
          <div className={s.numField}>
            <span className={s.label}>Aktuell: Arbeitspreis</span>
            <div className={s.inputWrap}>
              <input className={s.input} type="number" min={10} max={80} value={oldCt}
                onChange={(e) => setOldCt(Number(e.target.value))} aria-label="Aktueller Arbeitspreis" />
              <span className={s.unit}>ct/kWh</span>
            </div>
          </div>
          <div className={s.numField}>
            <span className={s.label}>Aktuell: Grundgebühr</span>
            <div className={s.inputWrap}>
              <input className={s.input} type="number" min={0} max={40} value={oldBase}
                onChange={(e) => setOldBase(Number(e.target.value))} aria-label="Aktuelle Grundgebühr" />
              <span className={s.unit}>€/Mon.</span>
            </div>
          </div>
        </div>
        <div className={`${s.field} ${s.inline}`}>
          <div className={s.numField}>
            <span className={s.label}>Neu: Arbeitspreis</span>
            <div className={s.inputWrap}>
              <input className={s.input} type="number" min={10} max={80} value={newCt}
                onChange={(e) => setNewCt(Number(e.target.value))} aria-label="Neuer Arbeitspreis" />
              <span className={s.unit}>ct/kWh</span>
            </div>
          </div>
          <div className={s.numField}>
            <span className={s.label}>Neu: Grundgebühr</span>
            <div className={s.inputWrap}>
              <input className={s.input} type="number" min={0} max={40} value={newBase}
                onChange={(e) => setNewBase(Number(e.target.value))} aria-label="Neue Grundgebühr" />
              <span className={s.unit}>€/Mon.</span>
            </div>
          </div>
        </div>
      </section>

      <section className={s.results} aria-label="Ergebnis" aria-live="polite">
        <div className={s.totals}>
          <div className={`${s.total} ${s.totalAccent}`}>
            <span className={s.totalLabel}>Ersparnis pro Jahr</span>
            <span className={s.totalVal}>{euro(r.savings)}</span>
          </div>
          <div className={s.total}>
            <span className={s.totalLabel}>Aktueller Tarif / Jahr</span>
            <span className={s.totalVal}>{euro(r.oldCost)}</span>
          </div>
          <div className={s.total}>
            <span className={s.totalLabel}>Neuer Tarif / Jahr</span>
            <span className={s.totalVal}>{euro(r.newCost)}</span>
          </div>
        </div>
        <div className={s.breakdown}>
          <p className={s.bdNote}>
            Achte neben dem Preis auf Vertragslaufzeit, Preisgarantie und Boni. Ein Balkonkraftwerk senkt
            zusätzlich deinen Netzbezug – beide Effekte addieren sich.
          </p>
        </div>
        <p className={s.disclaimer}>
          Schätzung auf Basis deiner Eingaben. Ohne Berücksichtigung einmaliger Boni oder Kautionen.
        </p>
      </section>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import s from "./Rechner.module.css";

export default function WallboxRechner() {
  const [km, setKm] = useState(12000);
  const [verbrauch, setVerbrauch] = useState(18);
  const [priceCt, setPriceCt] = useState(37);
  const [publicCt, setPublicCt] = useState(55);

  const r = useMemo(() => {
    const kwh = (km / 100) * verbrauch;
    const home = (kwh * priceCt) / 100;
    const pub = (kwh * publicCt) / 100;
    return { kwh: Math.round(kwh), home, monthly: home / 12, savings: pub - home };
  }, [km, verbrauch, priceCt, publicCt]);

  const euro = (n: number) =>
    new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
  const num = (n: number) => new Intl.NumberFormat("de-DE").format(n);

  return (
    <div className={s.grid} id="rechner">
      <section className={s.panel} aria-label="Eingaben">
        <div className={s.field}>
          <div className={s.labelRow}>
            <span className={s.label}>Fahrleistung</span>
            <span className={s.value}>{num(km)} km/Jahr</span>
          </div>
          <input className={s.range} type="range" min={2000} max={40000} step={1000} value={km}
            onChange={(e) => setKm(Number(e.target.value))} aria-label="Fahrleistung pro Jahr" />
        </div>
        <div className={s.field}>
          <div className={s.labelRow}>
            <span className={s.label}>Verbrauch</span>
            <span className={s.value}>{num(verbrauch)} kWh/100 km</span>
          </div>
          <input className={s.range} type="range" min={12} max={28} step={1} value={verbrauch}
            onChange={(e) => setVerbrauch(Number(e.target.value))} aria-label="Verbrauch pro 100 km" />
        </div>
        <div className={`${s.field} ${s.inline}`}>
          <div className={s.numField}>
            <span className={s.label}>Strompreis zu Hause</span>
            <div className={s.inputWrap}>
              <input className={s.input} type="number" min={10} max={80} value={priceCt}
                onChange={(e) => setPriceCt(Number(e.target.value))} aria-label="Strompreis zu Hause" />
              <span className={s.unit}>ct/kWh</span>
            </div>
          </div>
          <div className={s.numField}>
            <span className={s.label}>Öffentlich laden</span>
            <div className={s.inputWrap}>
              <input className={s.input} type="number" min={20} max={120} value={publicCt}
                onChange={(e) => setPublicCt(Number(e.target.value))} aria-label="Preis öffentliches Laden" />
              <span className={s.unit}>ct/kWh</span>
            </div>
          </div>
        </div>
      </section>

      <section className={s.results} aria-label="Ergebnis" aria-live="polite">
        <div className={s.totals}>
          <div className={`${s.total} ${s.totalAccent}`}>
            <span className={s.totalLabel}>Ladekosten zu Hause / Jahr</span>
            <span className={s.totalVal}>{euro(r.home)}</span>
          </div>
          <div className={s.total}>
            <span className={s.totalLabel}>Pro Monat</span>
            <span className={s.totalVal}>{euro(r.monthly)}</span>
          </div>
          <div className={s.total}>
            <span className={s.totalLabel}>Ersparnis ggü. öffentlich / Jahr</span>
            <span className={s.totalVal}>{euro(r.savings)}</span>
          </div>
        </div>
        <div className={s.breakdown}>
          <ul>
            <li><span>Strombedarf</span><span className={s.bdVal}>{num(r.kwh)} kWh/Jahr</span></li>
          </ul>
          <p className={s.bdNote}>
            Mit eigenem Solarstrom sinken die Ladekosten weiter. Wie viel ein Balkonkraftwerk beiträgt,
            zeigt der Balkonkraftwerk-Rechner.
          </p>
        </div>
        <p className={s.disclaimer}>
          Schätzung auf Basis deiner Eingaben. Realer Verbrauch hängt von Fahrweise, Temperatur und Ladeverlusten ab.
        </p>
      </section>
    </div>
  );
}

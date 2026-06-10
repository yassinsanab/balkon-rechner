"use client";

import { useMemo, useState } from "react";
import s from "./Rechner.module.css";

/**
 * Balkonkraftwerk-Rechner
 *
 * Methodik (Stand 2026, recherchiert):
 *  - Einspeisevergütung wird NICHT eingerechnet. Die meisten Anlagen laufen über
 *    die vereinfachte MaStR-Meldung ohne Vergütungsanspruch; die Ersparnis ist
 *    ausschließlich vermiedener Netzbezug (Eigenverbrauch × eigener Strompreis).
 *  - Eigenverbrauch ohne Speicher ca. 30–40 %, mit Speicher ca. 60–70 %.
 *  - Spezifischer Ertrag je Bundesland (kWh/kWp, Südausrichtung, ~30° Neigung).
 *    Quelle: gängige Richtwerte 900 (Nord) bis 1.150 (Süd) kWh/kWp.
 *  - 800-W-Wechselrichter begrenzt Spitzen; Mehr-Modulleistung über 800 Wp wird
 *    mit abnehmendem Grenzertrag (Faktor 0,65) angesetzt.
 *
 * Alle Werte als Default in einer Konfiguration oben, damit sie ohne Eingriff in
 * die UI gepflegt werden können.
 */

const BUNDESLAENDER: Record<string, number> = {
  "Baden-Württemberg": 1120,
  Bayern: 1140,
  Berlin: 1000,
  Brandenburg: 1020,
  Bremen: 950,
  Hamburg: 950,
  Hessen: 1030,
  "Mecklenburg-Vorpommern": 1000,
  Niedersachsen: 970,
  "Nordrhein-Westfalen": 980,
  "Rheinland-Pfalz": 1040,
  Saarland: 1060,
  Sachsen: 1050,
  "Sachsen-Anhalt": 1020,
  "Schleswig-Holstein": 980,
  Thüringen: 1030,
};

const ORIENTATION: Record<string, { label: string; factor: number }> = {
  sued: { label: "Süd", factor: 1.0 },
  sosw: { label: "SO / SW", factor: 0.95 },
  ostwest: { label: "Ost / West", factor: 0.85 },
  nord: { label: "Nord", factor: 0.55 },
};

const TILT: Record<string, { label: string; factor: number }> = {
  schraeg: { label: "Aufgeständert", factor: 1.0 },
  senkrecht: { label: "Senkrecht", factor: 0.72 },
  flach: { label: "Flach", factor: 0.88 },
};

const SELF_CONSUMPTION = { ohne: 0.35, mit: 0.65 };
const CO2_PER_KWH = 0.38; // kg CO2 je kWh deutscher Strommix (Richtwert)

export default function Rechner() {
  const [wp, setWp] = useState(800);
  const [land, setLand] = useState("Sachsen");
  const [orient, setOrient] = useState("sued");
  const [tilt, setTilt] = useState("schraeg");
  const [priceCt, setPriceCt] = useState(37);
  const [cost, setCost] = useState(500);
  const [speicher, setSpeicher] = useState(false);

  const r = useMemo(() => {
    const effectiveWp = Math.min(wp, 800) + Math.max(0, wp - 800) * 0.65;
    const specific =
      BUNDESLAENDER[land] * ORIENTATION[orient].factor * TILT[tilt].factor;
    const generation = (effectiveWp / 1000) * specific; // kWh/Jahr
    const sc = speicher ? SELF_CONSUMPTION.mit : SELF_CONSUMPTION.ohne;
    const selfKwh = generation * sc;
    const feedKwh = generation - selfKwh;
    const annualSavings = (selfKwh * priceCt) / 100;
    const payback = annualSavings > 0 ? cost / annualSavings : 0;
    const savings20 = annualSavings * 20;
    const co2 = (generation * CO2_PER_KWH) / 1000; // Tonnen/Jahr

    return {
      generation: Math.round(generation),
      selfKwh: Math.round(selfKwh),
      feedKwh: Math.round(feedKwh),
      annualSavings,
      payback,
      savings20,
      co2,
    };
  }, [wp, land, orient, tilt, priceCt, cost, speicher]);

  const euro = (n: number) =>
    new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(n);
  const num = (n: number) => new Intl.NumberFormat("de-DE").format(n);
  const jahre = (n: number) =>
    n > 0
      ? new Intl.NumberFormat("de-DE", { maximumFractionDigits: 1 }).format(n) + " Jahre"
      : "—";

  return (
    <div className={s.grid} id="rechner">
      {/* Eingaben */}
      <section className={s.panel} aria-label="Eingaben">
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
          <span className={s.hint}>Wechselrichter speist max. 800 W ein.</span>
        </div>

        <div className={s.field}>
          <span className={s.label}>Bundesland</span>
          <div className={s.selectWrap}>
            <select
              className={s.select}
              value={land}
              onChange={(e) => setLand(e.target.value)}
              aria-label="Bundesland"
            >
              {Object.keys(BUNDESLAENDER).map((k) => (
                <option key={k} value={k}>
                  {k}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={s.field}>
          <span className={s.label}>Ausrichtung</span>
          <div className={s.seg} role="group" aria-label="Ausrichtung">
            {Object.entries(ORIENTATION).map(([key, v]) => (
              <button
                key={key}
                className={orient === key ? `${s.segBtn} ${s.segOn}` : s.segBtn}
                onClick={() => setOrient(key)}
                aria-pressed={orient === key}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>

        <div className={s.field}>
          <span className={s.label}>Montage</span>
          <div className={s.seg} role="group" aria-label="Montageart">
            {Object.entries(TILT).map(([key, v]) => (
              <button
                key={key}
                className={tilt === key ? `${s.segBtn} ${s.segOn}` : s.segBtn}
                onClick={() => setTilt(key)}
                aria-pressed={tilt === key}
              >
                {v.label}
              </button>
            ))}
          </div>
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
            <span className={s.label}>Anschaffung</span>
            <div className={s.inputWrap}>
              <input
                className={s.input}
                type="number"
                min={0}
                max={5000}
                step={50}
                value={cost}
                onChange={(e) => setCost(Number(e.target.value))}
                aria-label="Anschaffungskosten in Euro"
              />
              <span className={s.unit}>€</span>
            </div>
          </div>
        </div>

        <div className={`${s.field} ${s.toggleRow}`}>
          <div>
            <span className={s.label}>Stromspeicher</span>
            <span className={s.hint}>
              {speicher
                ? "Eigenverbrauch ca. 65 % – Speicherkosten oben einrechnen"
                : "Eigenverbrauch ca. 35 %"}
            </span>
          </div>
          <button
            className={speicher ? `${s.switch} ${s.switchOn}` : s.switch}
            onClick={() => setSpeicher((v) => !v)}
            role="switch"
            aria-checked={speicher}
            aria-label="Stromspeicher umschalten"
          >
            <span className={s.knob} />
          </button>
        </div>
      </section>

      {/* Ergebnis */}
      <section className={s.results} aria-label="Ergebnis" aria-live="polite">
        <div className={s.totals}>
          <div className={`${s.total} ${s.totalAccent}`}>
            <span className={s.totalLabel}>Ersparnis pro Jahr</span>
            <span className={s.totalVal}>{euro(r.annualSavings)}</span>
          </div>
          <div className={s.total}>
            <span className={s.totalLabel}>Amortisation</span>
            <span className={s.totalVal}>{jahre(r.payback)}</span>
          </div>
          <div className={s.total}>
            <span className={s.totalLabel}>Erzeugung pro Jahr</span>
            <span className={s.totalVal}>{num(r.generation)} kWh</span>
          </div>
          <div className={s.total}>
            <span className={s.totalLabel}>Ersparnis in 20 Jahren</span>
            <span className={s.totalVal}>{euro(r.savings20)}</span>
          </div>
        </div>

        <div className={s.breakdown}>
          <ul>
            <li>
              <span>Selbst genutzt</span>
              <span className={s.bdVal}>{num(r.selfKwh)} kWh</span>
            </li>
            <li>
              <span>Eingespeist (unvergütet)</span>
              <span className={s.bdVal}>{num(r.feedKwh)} kWh</span>
            </li>
            <li>
              <span>CO₂-Einsparung</span>
              <span className={s.bdVal}>
                {new Intl.NumberFormat("de-DE", { maximumFractionDigits: 2 }).format(r.co2)} t/Jahr
              </span>
            </li>
          </ul>
          <p className={s.bdNote}>
            Nur selbst genutzter Strom spart Geld. Eingespeister Strom fließt ohne Vergütung ins
            Netz. Ein höherer Eigenverbrauch – etwa durch einen Speicher oder zeitlich verschobene
            Nutzung – verbessert die Ersparnis deutlich.
          </p>
        </div>

        <div className={s.cta}>
          <div className={s.ctaText}>
            <h3>Passendes Set finden</h3>
            <p>
              Geprüfte {num(wp)}-Wp-Sets mit 800-W-Wechselrichter – inklusive Halterung für deine
              Montageart.
            </p>
          </div>
          {/* Affiliate-Link: href vor Launch ersetzen */}
          <a className="btn" href="#" rel="sponsored nofollow">
            Angebote vergleichen
          </a>
        </div>

        <div className={s.legal}>
          <span className={s.legalTitle}>Regeln 2026</span>
          <span>
            Max. 800 W Wechselrichter, bis 2.000 Wp Module (mit Schuko-Stecker max. 960 Wp),
            Anmeldung nur im Marktstammdatenregister.
          </span>
        </div>

        <p className={s.disclaimer}>
          Alle Werte sind Schätzungen und hängen von Standort, Ausrichtung, Verschattung und Wetter
          ab. Keine Steuer-, Rechts- oder Energieberatung.
        </p>
      </section>
    </div>
  );
}

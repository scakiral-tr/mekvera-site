"use client";

import { FormEvent, useMemo, useState } from "react";

type ProjectAnalysis = {
  summary: string;
  priorities: string[];
  designApproach: string;
  technicalChecks: string[];
  suggestedProcess: string[];
  missingInfo: string[];
  nextStep: string;
};

type FormState = {
  projectType: string;
  city: string;
  area: string;
  budget: string;
  targetDate: string;
  description: string;
};

const initialForm: FormState = {
  projectType: "",
  city: "",
  area: "",
  budget: "",
  targetDate: "",
  description: "",
};

const whatsappNumber = "905303339929";

function cleanForShare(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

export default function AIProjectAssistant() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [analysis, setAnalysis] = useState<ProjectAnalysis | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const canSubmit = useMemo(() => {
    return Boolean(form.projectType && form.description.trim().length >= 40 && !loading);
  }, [form.projectType, form.description, loading]);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!canSubmit) return;

    setLoading(true);
    setError("");
    setAnalysis(null);

    try {
      const response = await fetch("/api/proje-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data?.error || "Ön proje analizi şu anda oluşturulamadı.");
      }

      setAnalysis(data.analysis as ProjectAnalysis);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Beklenmeyen bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  }

  const shareText = useMemo(() => {
    if (!analysis) return "";
    const priorities = analysis.priorities.map((x) => `• ${cleanForShare(x)}`).join("\n");
    return [
      "Merhaba MEKVERA, web sitenizdeki AI Ön Proje Asistanı ile bir ön değerlendirme oluşturdum.",
      "",
      `Proje türü: ${form.projectType}`,
      form.city ? `Şehir: ${form.city}` : "",
      form.area ? `Yaklaşık alan: ${form.area} m²` : "",
      form.targetDate ? `Hedef tarih: ${form.targetDate}` : "",
      "",
      `Proje özeti: ${cleanForShare(analysis.summary)}`,
      "",
      "Öncelikler:",
      priorities,
      "",
      `Önerilen sonraki adım: ${cleanForShare(analysis.nextStep)}`,
    ]
      .filter(Boolean)
      .join("\n");
  }, [analysis, form]);

  const whatsappHref = analysis
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(shareText)}`
    : `https://wa.me/${whatsappNumber}`;

  const emailHref = analysis
    ? `mailto:info@mekvera.com?subject=${encodeURIComponent("MEKVERA AI Ön Proje Değerlendirmesi")}&body=${encodeURIComponent(shareText)}`
    : "mailto:info@mekvera.com";

  return (
    <section id="proje-asistani" className="section ai-project-section">
      <div className="ai-project-intro">
        <div>
          <p className="eyebrow">MEKVERA AI ÖN PROJE ASİSTANI</p>
          <h2>
            Projenizi anlatın.
            <br />
            İlk çerçeveyi birlikte çıkaralım.
          </h2>
        </div>
        <div>
          <p>
            Mekânınız ve hedefiniz hakkında birkaç bilgi paylaşın. Yapay zekâ destekli sistemimiz;
            ihtiyaçları, tasarım yönünü, teknik kontrol başlıklarını ve önerilen proje akışını kısa bir
            ön değerlendirmede toplasın.
          </p>
          <p className="ai-disclaimer-top">
            Bu çıktı teklif, keşif, kesin bütçe, kesin süre veya uygulama projesi değildir. MEKVERA
            ekibinin incelemesine hazırlanmış bir ön brief niteliğindedir.
          </p>
        </div>
      </div>

      <div className="ai-project-shell">
        <form className="ai-project-form" onSubmit={submit}>
          <div className="ai-form-head">
            <span>01</span>
            <div>
              <strong>Proje bilgileri</strong>
              <p>Kişisel iletişim bilgisi yazmanız gerekmez.</p>
            </div>
          </div>

          <div className="ai-form-grid">
            <label>
              <span>Proje türü *</span>
              <select
                value={form.projectType}
                onChange={(e) => updateField("projectType", e.target.value)}
                required
              >
                <option value="">Seçiniz</option>
                <option>Ofis</option>
                <option>İş Yeri / Ticari Alan</option>
                <option>Mağaza</option>
                <option>Düğün Salonu</option>
                <option>Villa & Konut</option>
                <option>Fuar Standı</option>
                <option>Diğer</option>
              </select>
            </label>

            <label>
              <span>Şehir</span>
              <input
                value={form.city}
                onChange={(e) => updateField("city", e.target.value)}
                placeholder="Örn. İstanbul"
                maxLength={80}
              />
            </label>

            <label>
              <span>Yaklaşık alan (m²)</span>
              <input
                type="number"
                inputMode="numeric"
                value={form.area}
                onChange={(e) => updateField("area", e.target.value)}
                placeholder="Örn. 600"
                min="1"
                max="100000"
              />
            </label>

            <label>
              <span>Bütçe yaklaşımı</span>
              <select value={form.budget} onChange={(e) => updateField("budget", e.target.value)}>
                <option value="">Belirtmek istemiyorum</option>
                <option>Ekonomik ve kontrollü</option>
                <option>Dengeli / orta segment</option>
                <option>Premium</option>
                <option>Bütçe henüz belirlenmedi</option>
              </select>
            </label>

            <label className="ai-full-row">
              <span>Hedef teslim / açılış tarihi</span>
              <input
                type="text"
                value={form.targetDate}
                onChange={(e) => updateField("targetDate", e.target.value)}
                placeholder="Örn. Aralık 2026 / 4 ay içinde"
                maxLength={80}
              />
            </label>

            <label className="ai-full-row">
              <span>Projenizi anlatın *</span>
              <textarea
                value={form.description}
                onChange={(e) => updateField("description", e.target.value)}
                placeholder="Mekânın mevcut durumunu, hedefinizi, kapasiteyi, istediğiniz tarzı, öncelikleri ve varsa özel ihtiyaçları yazın. Örn: 600 m² düğün salonu, 400 kişi, modern ve gösterişli, sahne ve gelin yolu yenilenecek..."
                minLength={40}
                maxLength={2400}
                required
              />
              <small>{form.description.trim().length}/2400 · En az 40 karakter</small>
            </label>
          </div>

          <div className="ai-privacy-note">
            <b>Not:</b> Bu alana T.C. kimlik numarası, kart bilgisi, parola veya başka hassas kişisel
            veri yazmayın. Girilen proje metni yalnızca ön değerlendirme üretmek için işlenir.
          </div>

          <button className="btn gold ai-submit" type="submit" disabled={!canSubmit}>
            {loading ? "Ön Analiz Hazırlanıyor…" : "AI Ön Proje Analizi Oluştur"}
            <span>{loading ? "" : "↗"}</span>
          </button>

          {error ? (
            <div className="ai-error" role="alert">
              <strong>Analiz oluşturulamadı.</strong>
              <p>{error}</p>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">
                WhatsApp ile devam edin →
              </a>
            </div>
          ) : null}
        </form>

        <div className="ai-result-panel" aria-live="polite">
          {!analysis && !loading ? (
            <div className="ai-empty-state">
              <span>02</span>
              <div>
                <strong>Ön değerlendirme burada oluşacak</strong>
                <p>
                  Sistem tasarım yapmaz ve fiyat uydurmaz. Proje briefinizi düzenleyerek hangi
                  başlıkların keşifte ve teknik projede netleşmesi gerektiğini gösterir.
                </p>
              </div>
            </div>
          ) : null}

          {loading ? (
            <div className="ai-loading-state">
              <span className="ai-loader" />
              <strong>Proje briefiniz değerlendiriliyor</strong>
              <p>İhtiyaçlar, teknik başlıklar ve önerilen süreç yapılandırılıyor…</p>
            </div>
          ) : null}

          {analysis ? (
            <div className="ai-result">
              <div className="ai-result-head">
                <div>
                  <span>MEKVERA · AI ÖN DEĞERLENDİRME</span>
                  <h3>{form.projectType}</h3>
                </div>
                <b>ÖN BRIEF</b>
              </div>

              <div className="ai-summary-block">
                <small>Proje özeti</small>
                <p>{analysis.summary}</p>
              </div>

              <ResultList title="Öncelikli başlıklar" items={analysis.priorities} />

              <div className="ai-summary-block">
                <small>Tasarım yaklaşımı</small>
                <p>{analysis.designApproach}</p>
              </div>

              <ResultList title="Teknik kontrolde ele alınmalı" items={analysis.technicalChecks} />
              <ResultList title="Önerilen proje akışı" items={analysis.suggestedProcess} ordered />
              <ResultList title="Netleştirilmesi gereken bilgiler" items={analysis.missingInfo} />

              <div className="ai-next-step">
                <small>MEKVERA için önerilen sonraki adım</small>
                <p>{analysis.nextStep}</p>
              </div>

              <div className="ai-result-actions">
                <a className="btn whatsapp-btn" href={whatsappHref} target="_blank" rel="noreferrer">
                  WhatsApp&apos;ta MEKVERA&apos;ya Gönder <span>↗</span>
                </a>
                <a className="btn ghost" href={emailHref}>
                  E-posta ile Gönder <span>↗</span>
                </a>
              </div>

              <p className="ai-result-disclaimer">
                Yapay zekâ çıktısı yalnızca ön değerlendirmedir. Kesin kapsam; yerinde keşif, ölçüm,
                teknik inceleme, mevzuat kontrolü ve MEKVERA ekibinin değerlendirmesiyle belirlenir.
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function ResultList({
  title,
  items,
  ordered = false,
}: {
  title: string;
  items: string[];
  ordered?: boolean;
}) {
  if (!items?.length) return null;
  const Tag = ordered ? "ol" : "ul";
  return (
    <div className="ai-list-block">
      <small>{title}</small>
      <Tag>
        {items.map((item, index) => (
          <li key={`${title}-${index}`}>{item}</li>
        ))}
      </Tag>
    </div>
  );
}

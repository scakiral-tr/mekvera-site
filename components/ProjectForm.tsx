'use client';

import { FormEvent, useState } from 'react';

type Status = 'idle' | 'sending' | 'success' | 'error';

export function ProjectForm(){
  const [status,setStatus] = useState<Status>('idle');
  const [message,setMessage] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>){
    e.preventDefault();
    setStatus('sending');
    setMessage('');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try{
      const res = await fetch('/api/proje-talebi',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)
      });
      const body = await res.json().catch(()=>({}));
      if(!res.ok) throw new Error(body?.message || 'Gönderim sırasında bir hata oluştu.');
      form.reset();
      setStatus('success');
      setMessage('Talebiniz alındı. Ekibimiz proje bilgilerinizi inceleyerek sizinle iletişime geçecek.');
    }catch(err){
      setStatus('error');
      setMessage(err instanceof Error ? err.message : 'Talep gönderilemedi. Lütfen WhatsApp veya telefon ile ulaşın.');
    }
  }

  return <form className="form project-form" onSubmit={handleSubmit}>
    <div className="form-grid">
      <label><span>Ad Soyad *</span><input name="name" required autoComplete="name" placeholder="Adınız Soyadınız" /></label>
      <label><span>Telefon *</span><input name="phone" required autoComplete="tel" inputMode="tel" placeholder="05xx xxx xx xx" /></label>
      <label><span>E-posta</span><input name="email" autoComplete="email" type="email" placeholder="ornek@email.com" /></label>
      <label><span>Proje Türü *</span><select name="projectType" required defaultValue=""><option value="" disabled>Seçiniz</option><option>Ofis</option><option>Otel</option><option>Mağaza / Dükkan</option><option>Hastane / Klinik</option><option>Düğün Salonu</option><option>Villa / Konut</option><option>Diğer</option></select></label>
      <label><span>Yaklaşık Alan</span><input name="area" placeholder="Örn. 850 m²" /></label>
      <label><span>Lokasyon</span><input name="location" placeholder="İl / İlçe" /></label>
      <label><span>Mevcut Durum</span><select name="currentState" defaultValue=""><option value="">Seçiniz</option><option>Boş / yeni mekân</option><option>Kullanımda</option><option>Kısmi yenileme</option><option>Komple renovasyon</option></select></label>
      <label><span>Hedef Başlangıç</span><input name="startDate" placeholder="Örn. Ekim 2026" /></label>
    </div>
    <label className="form-full"><span>Projenizi Kısaca Anlatın *</span><textarea name="details" required minLength={10} placeholder="Mekânın mevcut durumu, hedefiniz ve ihtiyaçlarınız..." /></label>
    <label className="consent-row"><input name="consent" type="checkbox" required value="accepted"/><span>İletişim bilgilerimin proje talebimin değerlendirilmesi amacıyla kullanılmasını kabul ediyorum.</span></label>
    <div className="form-submit-row"><button className="btn btn-gold" disabled={status==='sending'} type="submit">{status==='sending' ? 'Gönderiliyor…' : 'Projemi Değerlendirin ↗'}</button><span>Genellikle ilk görüşme için telefon veya e-posta ile dönüş yapılır.</span></div>
    {message && <div className={`form-message ${status==='success'?'success':'error'}`} role="status">{message}</div>}
  </form>
}

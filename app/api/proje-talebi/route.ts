import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

type Payload = {
  name?: string; phone?: string; email?: string; projectType?: string; area?: string;
  location?: string; currentState?: string; startDate?: string; details?: string; consent?: string;
};

const clean = (value: unknown, max = 1200) => typeof value === 'string' ? value.trim().slice(0,max) : '';
const esc = (value: string) => value.replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c] || c));

export async function POST(req: Request){
  try{
    const body = await req.json() as Payload;
    const data = {
      name: clean(body.name,120), phone: clean(body.phone,60), email: clean(body.email,160),
      projectType: clean(body.projectType,80), area: clean(body.area,80), location: clean(body.location,120),
      currentState: clean(body.currentState,120), startDate: clean(body.startDate,100), details: clean(body.details,3000),
      consent: clean(body.consent,30)
    };

    if(!data.name || !data.phone || !data.projectType || data.details.length < 10 || data.consent !== 'accepted'){
      return NextResponse.json({message:'Lütfen zorunlu alanları eksiksiz doldurun.'},{status:400});
    }

    const apiKey = process.env.RESEND_API_KEY;
    if(!apiKey){
      console.error('RESEND_API_KEY is missing');
      return NextResponse.json({message:'E-posta sistemi henüz aktif değil. Lütfen 0530 333 99 29 numarasından ulaşın.'},{status:503});
    }

    const rows = [
      ['Ad Soyad',data.name],['Telefon',data.phone],['E-posta',data.email || '—'],['Proje Türü',data.projectType],
      ['Yaklaşık Alan',data.area || '—'],['Lokasyon',data.location || '—'],['Mevcut Durum',data.currentState || '—'],
      ['Hedef Başlangıç',data.startDate || '—'],['Proje Detayı',data.details]
    ];
    const html = `<!doctype html><html><body style="font-family:Arial,sans-serif;background:#f4f1ec;color:#171717;padding:32px"><div style="max-width:720px;margin:auto;background:#fff;border:1px solid #ddd6cc"><div style="background:#121212;color:#fff;padding:28px"><div style="color:#c8a46b;font-size:12px;letter-spacing:2px">MEKVERA</div><h1 style="font-size:28px;margin:10px 0 0">Yeni Proje Talebi</h1></div><div style="padding:28px">${rows.map(([k,v])=>`<div style="padding:14px 0;border-bottom:1px solid #eee"><strong style="display:block;font-size:11px;color:#876942;letter-spacing:1px;text-transform:uppercase;margin-bottom:6px">${esc(k)}</strong><div style="line-height:1.6">${esc(v).replace(/\n/g,'<br>')}</div></div>`).join('')}<p style="font-size:12px;color:#777;margin-top:24px">Bu talep mekvera.com üzerindeki Projenizi Anlatın formundan gönderildi.</p></div></div></body></html>`;

    const resendResponse = await fetch('https://api.resend.com/emails',{
      method:'POST',
      headers:{Authorization:`Bearer ${apiKey}`,'Content-Type':'application/json'},
      body:JSON.stringify({
        from:'MEKVERA Proje Talebi <form@mekvera.com>',
        to:['info@mekvera.com'],
        subject:`Yeni Proje Talebi — ${data.projectType} — ${data.name}`,
        html,
        ...(data.email ? {reply_to:data.email} : {})
      })
    });

    if(!resendResponse.ok){
      const detail = await resendResponse.text();
      console.error('Resend error:',detail);
      return NextResponse.json({message:'Talep gönderilemedi. Lütfen WhatsApp veya telefon ile ulaşın.'},{status:502});
    }

    return NextResponse.json({ok:true});
  }catch(error){
    console.error(error);
    return NextResponse.json({message:'Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.'},{status:500});
  }
}

import { useState, useEffect, useCallback } from 'react';
import coverImg from 'figma:asset/ChatGPT_Image_2_Mei_2026,_11.50.51.png';

// ─── Facebook Pixel ──────────────────────────────────────────────────────────
declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
    _fbq: unknown;
  }
}

const PIXEL_IDS = [
  '418738255169453',   // Hompimplay
  '520138225624460',   // Hompimplay Official
  '610250549956331',   // Hompimplay official's Pixel
  '189690619845200',   // Sukakbisnis.id
  '329806854705319',   // Hompimplay Pixel FB Mas Shana
  '1333093887200485',  // Akun Baru 2's Pixel
  '602552764076110',   // Cosmore Pixel
  '846333809899698',   // konsultan.grotivy pixel baru
  '769768064480863',   // Konsultant Grotivy Ad Account Baru
  // '3660700977484426',  // API PIXEL REAL PURCHASE  → blocked: traffic permission not set for this domain
  // '354185456535364',   // Pixel Ryan               → blocked: traffic permission not set for this domain
  '1030649995175982',  // PIXEL BARU MEI 2025 GROTIVY
  '1030649995175962',  // PIXEL BARU MEI 2025 GROTIVY - Verified
  '633601179713855',   // Jual Produk Digital Mei
];

function initFacebookPixels() {
  if (typeof window.fbq === 'function') return; // already loaded
  const s = document.createElement('script');
  s.innerHTML = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');`;
  document.head.appendChild(s);
  PIXEL_IDS.forEach(id => window.fbq('init', id));
  window.fbq('track', 'PageView');
}

function trackAddToCart() {
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'AddToCart');
  }
}

function goToCheckout() {
  trackAddToCart();
  window.open('https://samudrastore.myscalev.com/checkout-page', '_blank');
}
import contentImg1 from 'figma:asset/image.png';
import contentImg2 from 'figma:asset/image-1.png';
import tocImg1 from 'figma:asset/image-7.png';
import tocImg2 from 'figma:asset/image-8.png';
import testiImg1 from 'figma:asset/image-4.png';
import testiImg2 from 'figma:asset/image-5.png';
import bonusHpp from 'figma:asset/bonus-hpp.png';
import bonusHrd from 'figma:asset/bonus-hrd.png';
import bonusSop from 'figma:asset/bonus-sop.png';

// ─── Color tokens ───────────────────────────────────────────────────────────
const C = {
  gold: '#C9A84C',
  goldLight: '#E8C87A',
  goldDark: '#9A7030',
  navy: '#0D1B2A',
  navyLight: '#1E3350',
  cream: '#FAF7F0',
  creamDark: '#F0EBE0',
  textDark: '#1A1A2E',
  textMid: '#4A5568',
  red: '#E53E3E',
};

const playfair: React.CSSProperties = { fontFamily: "'Playfair Display', serif" };
const dmSans: React.CSSProperties  = { fontFamily: "'DM Sans', sans-serif" };

// ─── Reusable Gold Button ────────────────────────────────────────────────────
function BtnGold({ children, onClick, style }: { children: React.ReactNode; onClick?: () => void; style?: React.CSSProperties }) {
  return (
    <button
      onClick={onClick}
      style={{
        ...dmSans,
        background: `linear-gradient(135deg, ${C.goldDark}, ${C.gold}, ${C.goldLight})`,
        color: C.navy,
        fontWeight: 800,
        fontSize: 14,
        padding: '16px 22px',
        borderRadius: 8,
        border: 'none',
        cursor: 'pointer',
        width: '100%',
        boxShadow: `0 6px 24px rgba(201,168,76,0.4)`,
        letterSpacing: '0.02em',
        lineHeight: 1.4,
        transition: 'all 0.3s',
        ...style,
      }}
    >
      {children}
    </button>
  );
}

// ─── Tag Decorator ───────────────────────────────────────────────────────────
function Tag({ children, center }: { children: string; center?: boolean }) {
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: C.gold,
      marginBottom: 10,
      justifyContent: center ? 'center' : 'flex-start',
      width: center ? '100%' : 'auto',
    }}>
      <span style={{ display: 'block', width: 20, height: 1, background: C.gold }} />
      {children}
      <span style={{ display: 'block', width: 20, height: 1, background: C.gold }} />
    </div>
  );
}

// ─── Section Wrapper ─────────────────────────────────────────────────────────
function Sec({ children, bg, style }: { children: React.ReactNode; bg?: string; style?: React.CSSProperties }) {
  return (
    <section style={{ padding: '56px 20px', background: bg || '#fff', width: '100%', ...style }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        {children}
      </div>
    </section>
  );
}

// ─── Book Cover — Real Image ─────────────────────────────────────────────────
function BookCover() {
  return (
    <div style={{
      width: '72%',
      maxWidth: 260,
      margin: '0 auto 28px',
      filter: 'drop-shadow(0 24px 56px rgba(0,0,0,0.75))',
      animation: 'float 6s ease-in-out infinite',
      borderRadius: 14,
      overflow: 'hidden',
    }}>
      <img
        src={coverImg}
        alt="Smart Business Autopsy Framework — Cover"
        style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 14 }}
      />
    </div>
  );
}

// ─── SECTION 1: Hero ─────────────────────────────────────────────────────────
function HeroSection({ onCTA }: { onCTA: () => void }) {
  return (
    <section style={{
      background: 'linear-gradient(160deg,#0A1628 0%,#0D1B2A 60%,#162540 100%)',
      padding: '56px 20px 52px',
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
    }}>
      <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          background: 'rgba(229,62,62,0.12)', border: '1px solid rgba(229,62,62,0.35)',
          borderRadius: 100, padding: '5px 14px',
          ...dmSans, fontSize: 10, fontWeight: 700, color: '#FC8181',
          letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 18,
        }}>
          ⚠️ Peringatan untuk Pemilik UMKM Indonesia
        </div>

        {/* H1 */}
        <h1 style={{
          ...playfair,
          fontSize: 'clamp(28px,7vw,48px)',
          fontWeight: 900,
          lineHeight: 1.15,
          color: '#fff',
          marginBottom: 14,
        }}>
          Jualan Tiap Hari,<br />
          <em style={{ color: C.gold, fontStyle: 'normal' }}>Tapi Kok Uangnya Gak Nambah-Nambah?</em>
        </h1>

        {/* Sub */}
        <p style={{
          ...dmSans,
          fontSize: 15,
          color: 'rgba(255,255,255,0.65)',
          lineHeight: 1.7,
          marginBottom: 26,
          width: '100%',
        }}>
          Hati-hati — <strong style={{ color: 'rgba(255,255,255,0.92)', fontWeight: 700 }}>bisnismu mungkin sedang sakit.</strong> Dan kalau kamu terus biarkan karena nggak tahu sakitnya di mana, pelan-pelan bisa bangkrut.
        </p>

        {/* Book Cover */}
        <BookCover />

        {/* Agitate Box */}
        <div style={{
          background: 'rgba(229,62,62,0.08)',
          borderLeft: `3px solid ${C.red}`,
          borderRadius: '0 8px 8px 0',
          padding: '12px 16px',
          marginBottom: 24,
          ...dmSans,
          fontSize: 13,
          color: 'rgba(255,255,255,0.65)',
          lineHeight: 1.65,
          fontStyle: 'italic',
          width: '100%',
          textAlign: 'left',
        }}>
          Kamu sudah jualan keras, omzet terlihat lumayan. Tapi uang di rekening tetap tipis — biaya terus nambah, keuntungan entah ke mana. Ini bukan nasib. Ini tanda <strong style={{ color: 'rgba(255,255,255,0.88)', fontStyle: 'normal' }}>bisnismu sedang bocor di tempat yang belum kamu temukan.</strong>
        </div>

        {/* CTA Button */}
        <BtnGold onClick={onCTA}>
          🔬 DIAGNOSA BISNISMU SEKARANG — SEBELUM TERLAMBAT!
        </BtnGold>

        {/* Trust */}
        <div style={{ ...dmSans, display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'center', fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 12 }}>
          <span style={{ color: C.gold }}>★★★★★</span>
          500+ Pemilik UMKM Sudah Temukan Kebocoran Bisnis Mereka
        </div>
      </div>
    </section>
  );
}

// ─── Proof Bar ───────────────────────────────────────────────────────────────
function ProofBar() {
  return (
    <div style={{
      background: `linear-gradient(90deg, ${C.goldDark}, ${C.gold}, ${C.goldDark})`,
      padding: '12px 20px',
      textAlign: 'center',
      ...dmSans,
      fontWeight: 700,
      fontSize: 12,
      color: C.navy,
      lineHeight: 1.6,
      width: '100%',
    }}>
      🩺 <strong>500+ pemilik UMKM</strong> sudah diagnosa bisnis mereka pakai framework ini — dan berhasil menutup kebocoran yang selama ini bikin uang menguap tanpa jejak
    </div>
  );
}

// ─── SECTION 2: Problem ──────────────────────────────────────────────────────
const problems = [
  { icon: '💸', title: 'Omzet Ada, Profit Entah Ke Mana', desc: 'Penjualan terlihat lumayan, tapi di akhir bulan uang habis begitu saja. Nggak tahu kemana perginya.' },
  { icon: '🕳️', title: 'Bisnis Bocor Tapi Nggak Kelihatan', desc: 'Ada yang salah di bisnismu, tapi kamu nggak bisa tunjuk jarinya. Semuanya terasa normal, padahal tidak.' },
  { icon: '🏷️', title: 'Harga Jual Nggak Pernah Tepat', desc: 'Takut kemahalan, tapi kalau murah malah rugi. HPP nggak pernah dihitung dengan benar selama ini.' },
  { icon: '📉', title: 'Cash Flow Minus di Akhir Bulan', desc: 'Uang masuk dan keluar nggak balance. Bayar supplier, gaji karyawan — eh rekening sudah kosong lagi.' },
  { icon: '😰', title: 'Makin Ramai, Makin Pusing', desc: 'Bukannya makin untung, makin banyak order malah makin banyak masalah dan pengeluaran tak terduga.' },
  { icon: '❓', title: 'Nggak Tahu Kapan Bisa Balik Modal', desc: 'Sudah berbulan-bulan jualan tapi nggak ada kepastian. Bisnis jalan, tapi kamu nggak tahu ke mana arahnya.' },
];

function ProblemSection() {
  return (
    <Sec bg={C.creamDark}>
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <Tag center>Apakah Ini Kamu?</Tag>
        <h2 style={{ ...playfair, fontSize: 'clamp(22px,5.5vw,34px)', fontWeight: 700, color: C.navy, lineHeight: 1.25 }}>
          Tanda-Tanda Bisnismu<br /><em style={{ color: C.red, fontStyle: 'normal' }}>Sedang Sakit (Tanpa Kamu Sadari)</em>
        </h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 12 }}>
        {problems.map((p) => (
          <div key={p.title} style={{
            background: '#fff',
            border: `1px solid rgba(229,62,62,0.15)`,
            borderLeft: `3px solid ${C.red}`,
            borderRadius: 10,
            padding: '16px',
          }}>
            <div style={{ fontSize: 22, marginBottom: 6 }}>{p.icon}</div>
            <div style={{ ...dmSans, fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 4 }}>{p.title}</div>
            <p style={{ ...dmSans, fontSize: 12, color: C.textMid, lineHeight: 1.55, margin: 0 }}>{p.desc}</p>
          </div>
        ))}
      </div>
    </Sec>
  );
}

// ─── SECTION 3: Value Quads ──────────────────────────────────────────────────
const quads = [
  {
    color: '#1B3D2C',
    arrow: '🩺',
    title: 'Diagnosa',
    items: ['Temukan di mana uangmu bocor', 'Business Diagnostic Matrix', 'Identifikasi area paling sakit', 'Temukan akar masalah sesungguhnya'],
  },
  {
    color: '#3D1B1B',
    arrow: '💊',
    title: 'Obati',
    items: ['Perbaiki HPP & struktur harga jual', 'Tutup kebocoran biaya operasional', 'Benahi cash flow yang tidak sehat', 'Strategi pricing yang menguntungkan'],
  },
  {
    color: '#1B2C3D',
    arrow: '⚙️',
    title: 'Perkuat',
    items: ['SOP & sistem bisnis yang kuat', 'Manajemen tim & SDM efektif', 'Kontrol keuangan bisnis yang benar', 'Template operasional siap pakai'],
  },
  {
    color: '#2A1B3D',
    arrow: '📈',
    title: 'Scale Up',
    items: ['Roadmap 90 hari menuju profit', 'KPI & metric keuangan bisnis', 'Tumbuh dengan pondasi yang sehat', 'Framework scale-up terbukti'],
  },
];

function ValueQuads() {
  return (
    <Sec bg={C.navy}>
      <div style={{ textAlign: 'center', marginBottom: 28 }}>
        <Tag center>Solusi Lengkap</Tag>
        <h2 style={{ ...playfair, fontSize: 'clamp(22px,5.5vw,34px)', fontWeight: 700, color: '#fff', lineHeight: 1.25 }}>
          SBAF adalah <em style={{ color: C.gold, fontStyle: 'normal' }}>Dokter Bisnis</em>mu —<br />4 Pilar untuk Sembuhkan Bisnismu
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 3,
        borderRadius: 10,
        overflow: 'hidden',
      }}>
        {quads.map((q) => (
          <div key={q.title} style={{ background: q.color, padding: '24px 18px' }}>
            <div style={{ fontSize: 20, marginBottom: 6 }}>{q.arrow}</div>
            <h3 style={{ ...playfair, fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 14 }}>{q.title}</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {q.items.map((item) => (
                <li key={item} style={{
                  ...dmSans,
                  fontSize: 12,
                  color: 'rgba(255,255,255,0.82)',
                  lineHeight: 1.5,
                  paddingLeft: 18,
                  position: 'relative',
                }}>
                  <span style={{ position: 'absolute', left: 0, color: C.gold, fontWeight: 700, fontSize: 11, top: 1 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
        {/* Footer quote */}
        <div style={{
          gridColumn: '1 / -1',
          background: `linear-gradient(135deg, ${C.goldDark}, ${C.gold})`,
          padding: '20px 24px',
          textAlign: 'center',
        }}>
          <p style={{ ...playfair, fontSize: 14, fontWeight: 700, color: C.navy, fontStyle: 'italic', lineHeight: 1.55, margin: 0 }}>
            "Bisnis yang sakit bukan berarti gagal — tapi bisnis yang sakit dan dibiarkan, itu baru berbahaya. SBAF hadir untuk mendiagnosa, mengobati, dan menguatkan bisnismu."
          </p>
        </div>
      </div>
    </Sec>
  );
}

// ─── SECTION 4: Benefit Cards ────────────────────────────────────────────────
const benefits = [
  { num: '01', title: 'Temukan Di Mana Uangmu Bocor', desc: 'Business Diagnostic Matrix yang langsung tunjuk kebocoran di bisnismu — bukan tebak-tebakan, tapi sistem yang terukur.' },
  { num: '02', title: 'Perbaiki HPP & Harga Jual yang Benar', desc: 'Berhenti jual rugi tanpa sadar. Hitung HPP dengan tepat dan tentukan harga yang benar-benar menguntungkan.' },
  { num: '03', title: 'Kendalikan Cash Flow Bisnismu', desc: 'Pahami ke mana uang mengalir. Bangun sistem keuangan sederhana yang bikin rekening nggak kosong lagi.' },
  { num: '04', title: '26 Bab Praktikal + Action Plan Konkret', desc: 'Setiap bab punya langkah yang langsung bisa diterapkan. Bukan teori — tapi panduan aksi yang nyata.' },
  { num: '05', title: 'Studi Kasus UMKM Indonesia yang Relate', desc: 'Contoh nyata dari bisnis seperti milikmu — dari yang sakit, sampai akhirnya sehat dan profitable.' },
];

function BenefitSection() {
  return (
    <Sec bg={C.cream}>
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <Tag center>Kenapa Pilih SBAF</Tag>
        <h2 style={{ ...playfair, fontSize: 'clamp(22px,5.5vw,34px)', fontWeight: 700, color: C.navy, lineHeight: 1.25 }}>
          Inilah Cara SBAF<br /><em style={{ color: C.gold, fontStyle: 'normal' }}>Menyembuhkan Bisnismu</em>
        </h2>
        <p style={{ ...dmSans, fontSize: 14, color: C.textMid, lineHeight: 1.7, maxWidth: 600, margin: '12px auto 0' }}>
          Panduan simpel yang bisa dibaca sambil bisnis jalan — tapi POWERFUL untuk temukan kebocoran, perbaiki keuangan, dan buat bisnismu benar-benar menguntungkan.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 14 }}>
        {benefits.map((b) => (
          <div key={b.num} style={{
            background: '#fff',
            border: `1px solid rgba(201,168,76,0.18)`,
            borderRadius: 12,
            padding: '20px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${C.goldDark}, ${C.goldLight})` }} />
            <div style={{ ...playfair, fontSize: 38, fontWeight: 900, color: 'rgba(201,168,76,0.12)', lineHeight: 1, marginBottom: 4 }}>{b.num}</div>
            <h4 style={{ ...dmSans, fontSize: 14, fontWeight: 700, color: C.navy, marginBottom: 6 }}>{b.title}</h4>
            <p style={{ ...dmSans, fontSize: 13, color: C.textMid, lineHeight: 1.6, margin: 0 }}>{b.desc}</p>
          </div>
        ))}
      </div>
    </Sec>
  );
}

// ─── Daftar Isi Section ──────────────────────────────────────────────────────
function DaftarIsiSection() {
  return (
    <Sec bg={C.creamDark}>
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <Tag center>Transparansi Penuh</Tag>
        <h2 style={{ ...playfair, fontSize: 'clamp(22px,5.5vw,34px)', fontWeight: 700, color: C.navy, lineHeight: 1.25 }}>
          Lihat Sendiri <em style={{ color: C.gold, fontStyle: 'normal' }}>Apa Saja yang Ada</em><br />di Dalam SBAF
        </h2>
        <p style={{ ...dmSans, fontSize: 14, color: C.textMid, lineHeight: 1.7, maxWidth: 560, margin: '10px auto 0' }}>
          26 bab lengkap yang mencakup semua aspek bisnis kamu — dari diagnosa kebocoran awal hingga bisnis yang profitable.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14 }}>
        {[tocImg1, tocImg2].map((img, i) => (
          <div key={i} style={{
            borderRadius: 12,
            overflow: 'hidden',
            border: `2px solid rgba(201,168,76,0.3)`,
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
          }}>
            <img src={img} alt={`Daftar Isi SBAF halaman ${i + 1}`} style={{ width: '100%', height: 'auto', display: 'block' }} />
            <div style={{
              background: `linear-gradient(135deg, ${C.goldDark}, ${C.gold})`,
              padding: '8px 14px',
              ...dmSans, fontSize: 11, fontWeight: 700, color: C.navy, textAlign: 'center',
            }}>
              Daftar Isi — Halaman {i + 1}
            </div>
          </div>
        ))}
      </div>
    </Sec>
  );
}

// ─── Content Preview Section ─────────────────────────────────────────────────
function ContentPreviewSection() {
  return (
    <Sec bg={C.cream}>
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <Tag center>Sneak Peek Isi</Tag>
        <h2 style={{ ...playfair, fontSize: 'clamp(22px,5.5vw,34px)', fontWeight: 700, color: C.navy, lineHeight: 1.25 }}>
          Ini Bukan Ebook Biasa —<br /><em style={{ color: C.gold, fontStyle: 'normal' }}>Lihat Kualitas Isinya</em>
        </h2>
        <p style={{ ...dmSans, fontSize: 14, color: C.textMid, lineHeight: 1.7, maxWidth: 560, margin: '10px auto 0' }}>
          Setiap halaman dirancang untuk langsung bisa dieksekusi — bukan sekadar dibaca dan dilupakan.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14 }}>
        {[
          { img: contentImg1, label: 'Contoh Isi — Framework Diagnosa Kebocoran' },
          { img: contentImg2, label: 'Contoh Isi — Action Plan Perbaikan Bisnis' },
        ].map(({ img, label }) => (
          <div key={label} style={{
            borderRadius: 12,
            overflow: 'hidden',
            border: `1px solid rgba(201,168,76,0.25)`,
            boxShadow: '0 6px 28px rgba(0,0,0,0.1)',
          }}>
            <img src={img} alt={label} style={{ width: '100%', height: 'auto', display: 'block' }} />
            <div style={{
              background: C.navy,
              padding: '10px 14px',
              ...dmSans, fontSize: 11, fontWeight: 700, color: C.goldLight, textAlign: 'center',
            }}>
              📄 {label}
            </div>
          </div>
        ))}
      </div>
    </Sec>
  );
}

// ─── SECTION 5: Social Proof ─────────────────────────────────────────────────
const proofNums = [
  { num: '500+', label: 'Pemilik UMKM\nTemukan Kebocoran' },
  { num: '87%', label: 'Menemukan Masalah\ndi Hari Pertama' },
  { num: '3x', label: 'Rata-rata Peningkatan\nProfit dalam 90 Hari' },
];

const testimonials = [
  { star: 5, quote: 'Ternyata selama ini aku jual rugi karena salah hitung HPP! Setelah pakai SBAF, omzet sama tapi profit bersih naik 3x lipat!', name: 'Budi Santoso', role: 'Pemilik Warung Makan, Jakarta' },
  { star: 5, quote: 'Bisnis rame tapi uang habis terus — ternyata ada kebocoran di biaya operasional yang nggak pernah aku sadari. Sekarang cash flow sudah positif tiap bulan!', name: 'Siti Rahma', role: 'Owner Toko Online Fashion, Surabaya' },
  { star: 5, quote: 'Jualan tiap hari tapi rekening tipis terus. Pakai SBAF baru sadar margin produkku minus. Langsung aku perbaiki dan sekarang benar-benar untung!', name: 'Ahmad Rizki', role: 'Pemilik Katering, Bandung' },
  { star: 5, quote: 'Akhirnya tahu persis di mana uang bisnisku bocor. Dari rugi tiap bulan, sekarang profit bersih naik 150% dalam 4 bulan pertama.', name: 'Dewi Kusuma', role: 'Owner Salon & Beauty, Yogyakarta' },
];

function ProofSection() {
  return (
    <Sec bg={C.navy}>
      <div style={{ textAlign: 'center', marginBottom: 28 }}>
        <Tag center>Bukti Nyata</Tag>
        <h2 style={{ ...playfair, fontSize: 'clamp(22px,5.5vw,34px)', fontWeight: 700, color: '#fff', lineHeight: 1.25 }}>
          Dari Jualan Rugi ke Bisnis<br /><em style={{ color: C.gold, fontStyle: 'normal' }}>yang Benar-Benar Untung</em>
        </h2>
      </div>

      {/* Proof numbers */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, marginBottom: 32 }}>
        {proofNums.map((p) => (
          <div key={p.num} style={{
            background: 'rgba(201,168,76,0.07)',
            border: '1px solid rgba(201,168,76,0.22)',
            borderRadius: 10,
            padding: '18px 8px',
            textAlign: 'center',
          }}>
            <div style={{ ...playfair, fontSize: 'clamp(20px,5vw,36px)', fontWeight: 900, color: C.gold, lineHeight: 1, marginBottom: 4 }}>{p.num}</div>
            <p style={{ ...dmSans, fontSize: 11, color: 'rgba(255,255,255,0.55)', lineHeight: 1.4, margin: 0, whiteSpace: 'pre-line' }}>{p.label}</p>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
        {testimonials.map((t) => (
          <div key={t.name} style={{
            background: 'rgba(255,255,255,0.04)',
            border: `1px solid rgba(201,168,76,0.22)`,
            borderRadius: 12,
            padding: '20px 18px',
          }}>
            <div style={{ color: C.gold, fontSize: 14, marginBottom: 10, letterSpacing: 2 }}>{'★'.repeat(t.star)}</div>
            <p style={{ ...dmSans, fontSize: 13, color: 'rgba(255,255,255,0.82)', lineHeight: 1.65, fontStyle: 'italic', marginBottom: 16 }}>"{t.quote}"</p>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 12 }}>
              <div style={{ ...dmSans, fontSize: 13, fontWeight: 700, color: '#fff' }}>{t.name}</div>
              <div style={{ ...dmSans, fontSize: 11, color: 'rgba(255,255,255,0.45)', marginTop: 2 }}>{t.role}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Real Screenshot Testimonials */}
      <div style={{ marginTop: 32 }}>
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <div style={{ ...dmSans, display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: 100, padding: '5px 14px', fontSize: 11, fontWeight: 700, color: C.goldLight }}>
            📸 Screenshot Testimoni Asli
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14 }}>
          {[
            { img: testiImg1, label: '🏆 Dari Rugi Jadi Raih Penghasilan Miliaran' },
            { img: testiImg2, label: '🚀 Tutup Kebocoran → Tembus Rp 400 Juta+ dalam 3 Bulan' },
          ].map(({ img, label }) => (
            <div key={label} style={{
              borderRadius: 12,
              overflow: 'hidden',
              border: `2px solid rgba(201,168,76,0.35)`,
              boxShadow: '0 8px 40px rgba(0,0,0,0.35)',
            }}>
              <img src={img} alt={label} style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div style={{
                background: `linear-gradient(135deg, ${C.goldDark}, ${C.gold})`,
                padding: '10px 16px',
                ...dmSans, fontSize: 12, fontWeight: 700, color: C.navy, textAlign: 'center',
              }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Sec>
  );
}

// ─── SECTION 6: Bonus ───────────────────────────────────────────────────────
function BonusSection() {
  const bonuses = [
    {
      num: 'BONUS 1',
      img: bonusHpp,
      value: 'Rp 350.000',
      title: 'Aplikasi Hitung HPP',
      desc: 'Template Google Sheets siap pakai untuk menghitung Harga Pokok Produksi dengan tepat. Jual dengan margin yang sehat — bukan asal tebak yang bikin kamu rugi diam-diam.',
    },
    {
      num: 'BONUS 2',
      img: bonusSop,
      value: 'Rp 450.000',
      title: 'SOP Departemen Lengkap',
      desc: 'Koleksi SOP standar untuk semua departemen utama. Bisnis nggak lagi bergantung penuh ke kamu — tim bisa jalan sendiri dengan sistem yang benar.',
    },
    {
      num: 'BONUS 3',
      img: bonusHrd,
      value: 'Rp 550.000',
      title: 'Tools HRD Lengkap',
      desc: 'KPI HRD + SOP HRD + Form Tabel Gaji + Modul Interview. Kelola SDM secara profesional sehingga biaya SDM jadi investasi, bukan kebocoran.',
    },
  ];

  return (
    <Sec bg={C.navy} style={{ borderTop: '1px solid rgba(201,168,76,0.15)' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 36 }}>
        <div style={{
          ...dmSans, display: 'inline-flex', alignItems: 'center', gap: 6,
          background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.35)',
          borderRadius: 100, padding: '5px 16px',
          fontSize: 10, fontWeight: 700, color: C.goldLight,
          letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: 14,
        }}>
          🎁 Bonus Eksklusif
        </div>
        <h2 style={{ ...playfair, fontSize: 'clamp(22px,5.5vw,34px)', fontWeight: 700, color: '#fff', lineHeight: 1.25, marginBottom: 10 }}>
          Plus <em style={{ color: C.gold, fontStyle: 'normal' }}>3 Bonus Eksklusif</em><br />Senilai Rp 1.35 Juta
        </h2>
        <p style={{ ...dmSans, fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
          Tools lengkap untuk tutup semua celah kebocoran bisnismu — gratis saat beli SBAF hari ini
        </p>
      </div>

      {/* Bonus Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
        {bonuses.map((b) => (
          <div key={b.num} style={{
            background: 'rgba(255,255,255,0.04)',
            border: `1px solid rgba(201,168,76,0.25)`,
            borderRadius: 16,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column' as const,
          }}>
            {/* Badge */}
            <div style={{
              background: `linear-gradient(90deg, ${C.goldDark}, ${C.gold})`,
              padding: '7px 16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <span style={{ ...dmSans, fontSize: 11, fontWeight: 800, color: C.navy, letterSpacing: '0.08em' }}>{b.num}</span>
              <span style={{ ...dmSans, fontSize: 11, fontWeight: 700, color: C.navy }}>
                Nilai: <strong>{b.value}</strong>
              </span>
            </div>

            {/* Image */}
            <div style={{ background: '#0a1525' }}>
              <img
                src={b.img}
                alt={b.title}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            {/* Content */}
            <div style={{ padding: '18px 16px', flex: 1, display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
              <div style={{ ...playfair, fontSize: 16, fontWeight: 700, color: '#fff' }}>{b.title}</div>
              <p style={{ ...dmSans, fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, margin: 0 }}>{b.desc}</p>
            </div>

            {/* Bottom accent */}
            <div style={{ height: 3, background: `linear-gradient(90deg, ${C.goldDark}, ${C.goldLight})` }} />
          </div>
        ))}
      </div>

      {/* Total value callout */}
      <div style={{
        marginTop: 28,
        background: 'rgba(201,168,76,0.08)',
        border: '1px solid rgba(201,168,76,0.25)',
        borderRadius: 12,
        padding: '16px 20px',
        display: 'flex',
        flexWrap: 'wrap' as const,
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
      }}>
        <span style={{ ...dmSans, fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>
          🎁 Total nilai bonus yang kamu dapatkan <strong style={{ color: 'rgba(255,255,255,0.8)' }}>GRATIS:</strong>
        </span>
        <span style={{ ...playfair, fontSize: 22, fontWeight: 900, color: C.gold }}>Rp 1.350.000</span>
      </div>
    </Sec>
  );
}

// ─── SECTION 7: Offer + Countdown ────────────────────────────────────────────
function CountdownTimer() {
  const [time, setTime] = useState({ h: 23, m: 47, s: 30 });

  useEffect(() => {
    const id = setInterval(() => {
      setTime(prev => {
        let { h, m, s } = prev;
        if (s > 0) s--;
        else { s = 59; if (m > 0) m--; else { m = 59; if (h > 0) h--; } }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 20 }}>
      {[{ n: time.h, l: 'JAM' }, { n: time.m, l: 'MENIT' }, { n: time.s, l: 'DETIK' }].map(({ n, l }, i) => (
        <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            background: 'rgba(255,255,255,0.05)',
            border: `1px solid rgba(201,168,76,0.25)`,
            borderRadius: 8,
            padding: '10px 14px',
            textAlign: 'center',
            minWidth: 58,
          }}>
            <span style={{ ...playfair, fontSize: 28, fontWeight: 900, color: C.gold, lineHeight: 1, display: 'block' }}>{pad(n)}</span>
            <span style={{ ...dmSans, fontSize: 9, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 2, display: 'block' }}>{l}</span>
          </div>
          {i < 2 && <span style={{ ...playfair, color: C.gold, fontSize: 22, fontWeight: 900 }}>:</span>}
        </div>
      ))}
    </div>
  );
}

const offerRows = [
  { ic: '📘', title: 'Smart Business Autopsy Framework', sub: '26 Bab Praktikal + Business Diagnostic Matrix — Temukan & Tutup Kebocoran Bisnismu', val: 'Rp 1.000.000' },
  { ic: '📊', title: 'Bonus 1: Aplikasi Hitung HPP', sub: 'Hitung Harga Pokok Produksi dengan tepat — berhenti jual rugi tanpa sadar', val: 'Rp 350.000' },
  { ic: '📝', title: 'Bonus 2: SOP Departemen Lengkap', sub: 'Template SOP lengkap untuk semua divisi — bisnis jalan walau kamu nggak ada', val: 'Rp 450.000' },
  { ic: '👥', title: 'Bonus 3: Tools HRD Lengkap', sub: 'KPI + SOP + Tabel Gaji + Modul Interview — SDM profesional, bukan beban biaya', val: 'Rp 550.000' },
];

function OfferSection({ onCTA }: { onCTA: () => void }) {
  return (
    <Sec bg="linear-gradient(135deg,#0A1628,#0D1B2A)" style={{ borderTop: '1px solid rgba(201,168,76,0.15)' }}>
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <Tag center>Penawaran Terbatas</Tag>
        <h2 style={{ ...playfair, fontSize: 'clamp(22px,5.5vw,34px)', fontWeight: 700, color: '#fff', lineHeight: 1.25 }}>
          Stop Biarkan Uangmu Terus<br /><em style={{ color: C.gold, fontStyle: 'normal' }}>Bocor Tanpa Kamu Tahu</em>
        </h2>
        <p style={{ ...dmSans, fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, marginTop: 8 }}>
          Semua yang kamu butuhkan untuk diagnosa, obati, dan perkuat bisnismu:
        </p>
      </div>

      <div style={{
        background: 'rgba(255,255,255,0.03)',
        border: `1px solid rgba(201,168,76,0.22)`,
        borderRadius: 16,
        padding: '24px 18px',
        margin: '0 auto',
        maxWidth: 600,
      }}>
        {/* Offer rows */}
        {offerRows.map((r, i) => (
          <div key={r.title} style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            padding: '12px 0',
            borderBottom: i < offerRows.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
            gap: 12,
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, flex: 1, minWidth: 0 }}>
              <span style={{ fontSize: 18, flexShrink: 0, marginTop: 2 }}>{r.ic}</span>
              <div>
                <div style={{ ...dmSans, fontSize: 13, fontWeight: 700, color: '#fff', lineHeight: 1.4 }}>{r.title}</div>
                <div style={{ ...dmSans, fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 2, lineHeight: 1.4 }}>{r.sub}</div>
              </div>
            </div>
            <div style={{ ...dmSans, fontSize: 12, color: C.gold, fontWeight: 700, whiteSpace: 'nowrap', flexShrink: 0, paddingTop: 2 }}>{r.val}</div>
          </div>
        ))}

        {/* Total */}
        <div style={{
          background: 'rgba(201,168,76,0.07)', border: '1px solid rgba(201,168,76,0.15)',
          borderRadius: 10, padding: '14px 16px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          margin: '16px 0', gap: 8, flexWrap: 'wrap' as const,
        }}>
          <span style={{ ...dmSans, fontSize: 13, color: 'rgba(255,255,255,0.55)', fontWeight: 600 }}>Total Nilai Keseluruhan:</span>
          <span style={{ ...playfair, fontSize: 22, color: C.gold, fontWeight: 700, whiteSpace: 'nowrap' }}>Rp 2.350.000</span>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(201,168,76,0.15)', margin: '18px 0' }} />

        {/* Pricing */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ ...dmSans, fontSize: 13, color: 'rgba(255,255,255,0.35)', textDecoration: 'line-through', marginBottom: 4 }}>Rp 2.350.000</div>
          <div style={{ ...dmSans, fontSize: 12, color: 'rgba(255,255,255,0.45)', marginBottom: 6 }}>Kamu Bayar Hari Ini:</div>
          <div style={{ ...playfair, fontSize: 'clamp(42px,11vw,58px)', fontWeight: 900, color: C.gold, lineHeight: 1, marginBottom: 8 }}>Rp 293.000</div>
          <div style={{
            display: 'inline-block',
            background: 'rgba(229,62,62,0.15)', border: '1px solid rgba(229,62,62,0.3)',
            color: '#FC8181', fontSize: 11, fontWeight: 700,
            padding: '4px 14px', borderRadius: 100, marginBottom: 18,
            ...dmSans,
          }}>
            🔥 Hemat 87% — Hanya Hari Ini!
          </div>

          {/* Scarcity */}
          <p style={{ ...dmSans, fontSize: 12, color: 'rgba(255,255,255,0.4)', fontStyle: 'italic', marginBottom: 16, lineHeight: 1.5 }}>
            ⏰ Penawaran ini berakhir dalam:{' '}
            <strong style={{ color: '#FC8181', fontStyle: 'normal' }}>waktu terbatas</strong>. Jangan sampai menyesal!
          </p>

          {/* Countdown */}
          <CountdownTimer />

          {/* CTA */}
          <BtnGold onClick={onCTA} style={{ fontSize: 15 }}>
            🩺 YA! SAYA MAU DIAGNOSA & SEMBUHKAN BISNIS SAYA SEKARANG!
          </BtnGold>

          {/* Trust */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 14, marginTop: 14, flexWrap: 'wrap' as const }}>
            {['✅ Akses Instan', '🔒 Pembayaran Aman', '📱 Bisa di HP'].map(t => (
              <span key={t} style={{ ...dmSans, fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </Sec>
  );
}

// ─── SECTION 8: FAQ ──────────────────────────────────────────────────────────
const faqs = [
  { q: 'Bisnis saya masih kecil, apakah SBAF cocok untuk saya?', a: 'Justru SBAF paling powerful untuk bisnis kecil yang merasa "kok uangnya nggak nambah-nambah". Semakin cepat kamu diagnosa, semakin cepat kamu tahu di mana kebocoran dan bisa memperbaikinya sebelum makin parah.' },
  { q: 'Bagaimana SBAF bisa membantu saya tahu uang saya bocor di mana?', a: 'SBAF punya Business Diagnostic Matrix yang secara sistematis memeriksa semua area bisnis kamu — keuangan, operasional, SDM, marketing, hingga pricing. Kamu akan tahu persis area mana yang menyebabkan uang menguap.' },
  { q: 'Apakah ini hanya teori atau ada praktiknya?', a: 'Sangat praktikal! Setiap bab punya action plan konkret yang bisa langsung diterapkan. Plus ada template HPP siap pakai, SOP lengkap, dan Roadmap 90 Hari — semua untuk menutup kebocoran dan mulai profit.' },
  { q: 'Bagaimana cara mendapatkannya setelah bayar?', a: 'Setelah pembayaran dikonfirmasi, kamu akan langsung mendapat akses ke semua materi secara digital. Akses instan, bisa dibuka dari HP atau laptop kapanpun dan dimanapun.' },
  { q: 'Apakah ada garansi uang kembali?', a: 'Kami sangat yakin dengan kualitas SBAF. Jika dalam 7 hari kamu merasa framework ini tidak memberikan nilai, hubungi kami dan kami akan proses refund dengan senang hati.' },
];

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Sec bg={C.cream}>
      <div style={{ textAlign: 'center', marginBottom: 32, maxWidth: 680, margin: '0 auto 32px' }}>
        <Tag center>FAQ</Tag>
        <h2 style={{ ...playfair, fontSize: 'clamp(22px,5.5vw,34px)', fontWeight: 700, color: C.navy, lineHeight: 1.25 }}>
          Pertanyaan yang Sering<br /><em style={{ color: C.gold, fontStyle: 'normal' }}>Ditanyakan</em>
        </h2>
      </div>

      {/* Objection quote */}
      <div style={{
        background: '#fff',
        borderRadius: 14,
        padding: '26px 20px',
        marginBottom: 28,
        border: `1px solid rgba(201,168,76,0.18)`,
        position: 'relative',
        overflow: 'hidden',
        maxWidth: 680,
        margin: '0 auto 28px',
      }}>
        <span style={{ ...playfair, fontSize: 80, color: 'rgba(201,168,76,0.07)', position: 'absolute', top: -8, left: 12, lineHeight: 1, pointerEvents: 'none' }}>"</span>
        <p style={{ ...dmSans, fontSize: 14, lineHeight: 1.85, color: C.textMid, position: 'relative', zIndex: 1, margin: 0 }}>
          Bayangkan... <strong style={{ color: C.navy }}>Rp 293.000</strong> itu jauh lebih kecil dari kerugian bisnis yang bocor 1 bulan saja. Berapa banyak uang yang sudah hilang tanpa kamu tahu? Investasi ini bukan pengeluaran — ini <strong style={{ color: C.navy }}>alat untuk menutup kebocoran dan menghasilkan lebih banyak.</strong>
        </p>
      </div>

      {/* FAQ Accordion */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 680, margin: '0 auto' }}>
        {faqs.map((f, i) => (
          <div key={i} style={{
            background: '#fff',
            border: `1px solid rgba(201,168,76,0.18)`,
            borderRadius: 10,
            overflow: 'hidden',
          }}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                width: '100%',
                padding: '14px 16px',
                ...dmSans,
                fontWeight: 700,
                fontSize: 13,
                color: C.navy,
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'transparent',
                border: 'none',
                textAlign: 'left',
                gap: 10,
              }}
            >
              <span>{f.q}</span>
              <span style={{ color: C.gold, fontSize: 20, flexShrink: 0, transform: open === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s', display: 'inline-block' }}>+</span>
            </button>
            {open === i && (
              <div style={{
                padding: '0 16px 14px',
                borderTop: '1px solid rgba(201,168,76,0.1)',
                paddingTop: 12,
                ...dmSans,
                fontSize: 13,
                lineHeight: 1.65,
                color: C.textMid,
              }}>
                {f.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </Sec>
  );
}

// ─── Author Section ──────────────────────────────────────────────────────────
function AuthorSection() {
  return (
    <Sec bg={C.creamDark}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <Tag center>Tentang Penulis</Tag>
        <div style={{
          background: '#fff',
          borderRadius: 14,
          padding: '24px 20px',
          border: `1px solid rgba(201,168,76,0.18)`,
          display: 'flex',
          flexDirection: 'column' as const,
          alignItems: 'center',
          textAlign: 'center',
          gap: 16,
        }}>
          {/* Avatar */}
          <div style={{
            width: 76, height: 76, borderRadius: '50%',
            background: `linear-gradient(135deg, ${C.goldDark}, ${C.gold})`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            ...playfair, fontSize: 28, fontWeight: 900, color: C.navy,
            flexShrink: 0,
          }}>SA</div>
          <div>
            <div style={{ ...playfair, fontSize: 18, fontWeight: 700, color: C.navy, marginBottom: 3 }}>Sam Adhiasta</div>
            <div style={{ ...dmSans, fontSize: 11, color: C.gold, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: 10 }}>Business Consultant · Grotivy Consultant</div>
            <p style={{ ...dmSans, fontSize: 13, lineHeight: 1.7, color: C.textMid, margin: 0 }}>
              Sam Adhiasta adalah business consultant berpengalaman yang telah membantu ratusan pemilik UMKM Indonesia menemukan kebocoran bisnis mereka dan memperbaikinya secara sistematis. Melihat banyak pemilik UMKM yang jualan tiap hari tapi uangnya nggak nambah-nambah, Sam menciptakan SBAF — sebuah sistem diagnosa bisnis yang simpel namun powerful untuk menemukan masalah, mengobatinya, dan membuat bisnis benar-benar menguntungkan.
            </p>
          </div>
        </div>
      </div>
    </Sec>
  );
}

// ─── Final CTA ───────────────────────────────────────────────────────────────
function FinalCTA({ onCTA }: { onCTA: () => void }) {
  return (
    <section style={{
      background: `linear-gradient(135deg, ${C.navy}, ${C.navyLight})`,
      padding: '60px 20px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center,rgba(201,168,76,0.08) 0%,transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 580, margin: '0 auto' }}>
        <div style={{ fontSize: 36, marginBottom: 14 }}>🩺</div>
        <h2 style={{ ...playfair, fontSize: 'clamp(24px,6vw,38px)', fontWeight: 900, color: '#fff', lineHeight: 1.2, marginBottom: 14 }}>
          Bisnismu Sedang Sakit.<br /><em style={{ color: C.gold, fontStyle: 'normal' }}>Waktunya Diagnosa — Bukan Dibiarkan.</em>
        </h2>
        <p style={{ ...dmSans, fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: 28 }}>
          Setiap hari yang berlalu tanpa diagnosa adalah uang yang terus bocor. Investasi <strong style={{ color: C.gold }}>Rp 293.000</strong> ini bisa mengubah bisnismu dari yang terus rugi diam-diam menjadi benar-benar menguntungkan.
        </p>
        <BtnGold onClick={onCTA} style={{ fontSize: 15 }}>
          🚀 DIAGNOSA & SEMBUHKAN BISNISMU SEKARANG!
        </BtnGold>
        <p style={{ ...dmSans, fontSize: 12, color: 'rgba(255,255,255,0.3)', marginTop: 14 }}>
          ✅ Akses Instan · 🔒 Pembayaran Aman · 🌟 Jaminan 7 Hari
        </p>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{
      background: '#040B14',
      padding: '24px 20px',
      textAlign: 'center',
      ...dmSans,
      fontSize: 12,
      color: 'rgba(255,255,255,0.28)',
      borderTop: '1px solid rgba(201,168,76,0.08)',
      width: '100%',
    }}>
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        <div style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 700, marginBottom: 4 }}>Smart Business Autopsy Framework</div>
        <div style={{ marginBottom: 8 }}>by Sam Adhiasta — <span style={{ color: C.gold }}>Grotivy Consultant</span></div>
        <div>WhatsApp: <a href="https://wa.me/6283861537366" style={{ color: C.gold, textDecoration: 'none' }}>+62 838-6153-7366</a> · info@grotivy.com</div>
        <div style={{ marginTop: 12, fontSize: 11 }}>© 2024 Grotivy Consultant. All rights reserved.</div>
      </div>
    </footer>
  );
}

// ─── Purchase Popup ──────────────────────────────────────────────────────────
const buyers = [
  { name: 'Anton S., Jakarta', time: '2 menit lalu' },
  { name: 'Januar Tejasusilo, Surabaya', time: '4 menit lalu' },
  { name: 'Adnan Nur Hidayat, Bandung', time: '6 menit lalu' },
  { name: 'Wahyono, Semarang', time: '8 menit lalu' },
  { name: 'Irfan Hidayat, Medan', time: '10 menit lalu' },
  { name: 'Nurdin Zuhri, Makassar', time: '12 menit lalu' },
  { name: 'Nurhidayati, Yogyakarta', time: '14 menit lalu' },
  { name: 'Aji Buono, Bogor', time: '16 menit lalu' },
  { name: 'Tere, Depok', time: '18 menit lalu' },
  { name: 'Miftahul Huda, Malang', time: '20 menit lalu' },
  { name: 'Fendy Helfi, Palembang', time: '22 menit lalu' },
  { name: 'Dody Suryadikjaya, Tangerang', time: '24 menit lalu' },
  { name: 'Sugihantara, Solo', time: '26 menit lalu' },
  { name: 'Bagus Putu Fabio, Bali', time: '28 menit lalu' },
  { name: 'Rudi Kurniawan Arief, Bekasi', time: '30 menit lalu' },
];

function PurchasePopup() {
  const [visible, setVisible] = useState(false);
  const [idx, setIdx] = useState(0);

  const show = useCallback(() => {
    setVisible(true);
    setTimeout(() => setVisible(false), 7000);
  }, []);

  useEffect(() => {
    const start = setTimeout(() => {
      show();
      const interval = setInterval(() => {
        setIdx(i => (i + 1) % buyers.length);
        show();
      }, 14000);
      return () => clearInterval(interval);
    }, 3000);
    return () => clearTimeout(start);
  }, [show]);

  return (
    <div style={{
      position: 'fixed',
      bottom: 20,
      left: 14,
      background: '#fff',
      borderRadius: 12,
      boxShadow: '0 6px 28px rgba(0,0,0,0.18)',
      border: `1px solid rgba(201,168,76,0.25)`,
      padding: '10px 12px',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      zIndex: 9997,
      maxWidth: 264,
      transform: visible ? 'translateX(0)' : 'translateX(-320px)',
      transition: 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1)',
      pointerEvents: visible ? 'auto' : 'none',
    }}>
      <div style={{
        width: 34, height: 34, borderRadius: '50%', flexShrink: 0,
        background: `linear-gradient(135deg, ${C.goldDark}, ${C.gold})`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 15,
      }}>🎉</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ ...dmSans, fontSize: 12, fontWeight: 700, color: C.textDark, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{buyers[idx].name}</div>
        <div style={{ ...dmSans, fontSize: 11, color: C.textMid, marginTop: 1, lineHeight: 1.4 }}>baru saja membeli SMART BUSINESS AUTOPSY FRAMEWORK</div>
        <div style={{ ...dmSans, fontSize: 10, color: 'rgba(0,0,0,0.3)', marginTop: 2 }}>{buyers[idx].time}</div>
      </div>
    </div>
  );
}

// ─── App ────────────────────────────────────────────────────────────────────
export default function App() {
  // Init all FB Pixels on mount → fires PageView / Landing Page View
  useEffect(() => {
    initFacebookPixels();
  }, []);

  const scrollToCTA = () => {
    document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', background: C.navy, ...dmSans, overflowX: 'hidden' }}>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        * { box-sizing: border-box; }
        #cta-section { scroll-margin-top: 0; }
      `}</style>

      <HeroSection onCTA={scrollToCTA} />
      <ProofBar />
      <ProblemSection />
      <ValueQuads />
      <BenefitSection />
      <DaftarIsiSection />
      <ContentPreviewSection />
      <ProofSection />
      <BonusSection />
      <div id="cta-section">
        <OfferSection onCTA={goToCheckout} />
      </div>
      <FAQSection />
      <AuthorSection />
      <FinalCTA onCTA={goToCheckout} />
      <Footer />

      <PurchasePopup />
    </div>
  );
}
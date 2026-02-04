export default function Promo() {
  return (
    <div className="promo-container">
      <section className="promo-hero">
        <h1>Diskon Besar-besaran 🔥</h1>
        <p>Nikmati promo spesial hari ini. Jangan sampai kelewatan!</p>
        <button className="promo-btn">Ambil Promo</button>
      </section>

      <section className="promo-cards">
        <div className="promo-card">
          <h3>🔥 50% OFF</h3>
          <p>Untuk produk pilihan</p>
        </div>

        <div className="promo-card">
          <h3>🚚 Gratis Ongkir</h3>
          <p>Minimal belanja 100K</p>
        </div>

        <div className="promo-card">
          <h3>🎁 Bonus Item</h3>
          <p>Selama stok tersedia</p>
        </div>
      </section>
    </div>
  );
}

const Slide2 = () => {
  return (
    <div className="swiper-slide py-16 px-6 text-center flex! flex-col justify-center items-center gap-6 sm:py-24 sm:px-12">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-6 animate-pulse">
        <span>🔥</span> Promo Terbatas Hari Ini!
      </div>

      <h1 className="text-4xl font-bold font-playfair tracking-tight max-w-3xl mx-auto leading-tight sm:text-5xl lg:text-6xl">
        Diskon Spesial untuk <span className="text-orange-600">Produk Terlaris!</span>
      </h1>

      <p className="mt-6 text-lg max-w-2xl mx-auto leading-relaxed font-sans sm:text-xl">
        Dapatkan potongan harga hingga <span className="font-bold text-highlight-dark">50%</span> khusus untuk koleksi produk favorit pilihan pelanggan kami.
        Jangan sampai kehabisan!
      </p>

      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href="#produk"
          className="w-full px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-xl shadow-lg shadow-orange-600/25 transition-all duration-200 transform hover:-translate-y-0.5 sm:w-auto"
        >
          Belanja Sekarang
        </a>
        <a
          href="#katalog"
          className="w-full px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 font-medium rounded-xl border border-gray-200 transition-all duration-200 sm:w-auto"
        >
          Lihat Katalog
        </a>
      </div>
    </div>
  );
};

export default Slide2;

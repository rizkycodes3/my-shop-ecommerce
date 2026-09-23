import { Link } from "react-router-dom";

const Slide2 = () => {
  return (
    <div className="swiper-slide py-16 px-6 text-center flex! flex-col justify-center items-center gap-6 sm:py-24 sm:px-12">
      {/* badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-l-accent-warning text-sm font-semibold mb-6 animate-pulse dark:text-d-accent-warning">
        <span>🔥</span> Promo Terbatas Hari Ini!
      </div>
      {/* title */}
      <h1 className="text-4xl font-bold font-playfair tracking-tight max-w-3xl mx-auto leading-tight sm:text-5xl lg:text-6xl">
        Diskon Spesial untuk <span className="text-orange-600">Produk Terlaris!</span>
      </h1>
      {/* description */}
      <p className="mt-6 text-lg text-l-text-secondary max-w-2xl mx-auto leading-relaxed font-sans dark:text-d-text-secondary sm:text-xl">
        Dapatkan potongan harga hingga <span className="font-bold text-l-text-primary dark:text-d-text-primary">50%</span> khusus untuk koleksi produk favorit
        pilihan pelanggan kami. Jangan sampai kehabisan!
      </p>
      {/* button */}
      <div className="mt-8">
        <Link
          to="/catalog"
          className="w-full px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-xl shadow-lg shadow-orange-600/25 transition-all duration-200 transform hover:-translate-y-0.5 sm:w-auto"
        >
          Belanja Sekarang
        </Link>
      </div>
    </div>
  );
};

export default Slide2;

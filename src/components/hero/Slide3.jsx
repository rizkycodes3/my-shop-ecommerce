const Slide3 = () => {
  return (
    <div className="swiper-slide flex! flex-col justify-center items-center gap-6 p-6 text-center shadow-xl transition-all sm:p-12">
      {/* badge */}
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 text-xs sm:text-sm font-semibold tracking-wide uppercase">
        <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
        Penawaran Terbatas
      </span>
      {/* title */}
      <h1 className="text-3xl font-bold font-playfair tracking-tight leading-tight max-w-3xl sm:text-5xl lg:text-6xl">
        Promo Menarik <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 via-orange-500 to-red-500">Setiap Minggu!</span>
      </h1>
      {/* description */}
      <p className="text-base text-l-text-secondary max-w-xl font-sans leading-relaxed dark:text-d-text-secondary sm:text-xl">
        Jangan lewatkan penawaran spesial kami yang hanya berlaku untuk waktu terbatas. Dapatkan harga terbaik sebelum kehabisan!
      </p>
      {/* button */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2 w-full sm:w-auto">
        <a
          href="#promo"
          className="w-full px-8 py-3.5 bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 font-semibol text-text-pri-dark rounded-xl shadow-lg shadow-orange-500/25 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 sm:w-auto"
        >
          Klaim Promo Minggu Ini
        </a>
      </div>
    </div>
  );
};

export default Slide3;

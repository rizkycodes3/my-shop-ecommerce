const Slide1 = () => {
  return (
    <div className="swiper-slide flex! flex-col justify-center items-center gap-6 p-6 text-center sm:p-10">
      {/* title */}
      <h1 className="text-3xl font-bold font-playfair tracking-wide leading-tight max-w-2xl sm:text-4xl lg:text-5xl">
        Halo Guys, Selamat Datang di Toko Kami & Selamat Belanja!
      </h1>
      {/* description */}
      <p className="text-base text-gray-600 max-w-lg dark:text-gray-300 sm:text-lg">Temukan produk terbaik untuk memenuhi segala kebutuhan Anda 😉</p>
      {/* button */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
        <a
          href="#product"
          className="px-6 py-3 bg-l-accent-primary text-d-text-primary font-medium rounded-xl shadow-md hover:scale-105 hover:bg-l-accent-hover transition-all dark:bg-d-accent-primary dark:hover:bg-d-accent-hover dark:text-l-text-primary"
        >
          Mulai Belanja
        </a>
        <a
          href="#promo"
          className="px-6 py-3 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-700/90 text-gray-800 dark:text-gray-200 font-medium rounded-xl border border-gray-200/80 dark:border-gray-700/80 shadow-sm backdrop-blur-sm transition-all transform hover:-translate-y-0.5"
        >
          Lihat Promo
        </a>
      </div>
    </div>
  );
};

export default Slide1;

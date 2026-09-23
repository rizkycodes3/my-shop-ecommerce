// icons
import { FcShop } from "react-icons/fc";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// data
import { shipping, payment } from "../data";

const Footer = () => {
  // variabel style
  const pTopFooter = "col-span-full text-sm mt-1.5";
  const logo = "cursor-pointer hover:text-l-accent-hover";

  return (
    <footer className="w-screen bg-[#232323] text-l-text-muted p-3">
      {/* top footer */}
      <div className="grid grid-cols-[auto_3fr] grid-rows-[repeat(3,auto)] w-full border-b pb-3">
        <FcShop className="size-7" />
        <h2 className="font-bold font-playfair text-xl ml-2">My Shop</h2>
        <p className={pTopFooter}>Pusat Belanja Online Terpercaya</p>
        <p className={pTopFooter}>Email: info@gmail.com | WA: 0812-3456-7890 | Jam Kerja: Setiap Hari 06.00 - 18.00</p>
      </div>
      {/* middle footer */}
      <div className="flex flex-col gap-3 border-b pb-3 sm:flex-row sm:justify-around sm:items-start sm:py-8">
        <div className="grid grid-cols-[repeat(5,auto)] grid-rows-[repeat(2,auto)] w-fit gap-x-4 gap-y-2">
          <h2 className="col-span-full font-semibold">Sosial Media</h2>
          <FaFacebook className={logo} />
          <FaInstagram className={logo} />
          <FaTiktok className={logo} />
          <FaYoutube className={logo} />
          <FaXTwitter className={logo} />
        </div>
        <div className="grid grid-cols-[repeat(6,auto)] grid-rows-[repeat(2,auto)] gap-x-3 gap-y-2 w-fit">
          <h2 className="col-span-full font-semibold">Metode Pembayaran</h2>
          {payment.map((pay, i) => (
            <img key={i} src={pay} alt="payment" className="h-auto w-10 self-center" />
          ))}
        </div>
        <div className="grid grid-cols-[repeat(2,auto)] grid-rows-[repeat(2,auto)] gap-x-3 gap-y-2 w-fit">
          <h2 className="col-span-full font-semibold">Pengiriman</h2>
          {shipping.map((shi, i) => (
            <img key={i} src={shi} alt="shipping" className="h-auto w-10 self-center" />
          ))}
        </div>
      </div>
      {/* bottom footer */}
      <p className="text-center text-sm mt-3">&copy; {new Date().getFullYear()} My Shop. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

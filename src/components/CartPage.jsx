import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/Context";
import { toast } from "sonner";
//👇 icons
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa6";

const CartPage = () => {
  const navigate = useNavigate();
  const { cartState, cartDispatch } = useContext(CartContext);
  const cartItems = cartState.cart;
  // console.log(cartItems);

  const subTotal = cartItems.reduce((acc, curr) => {
    const multiplication = curr.price * curr.quantity;
    return acc + multiplication;
  }, 0);
  const totalDiscount = cartItems.reduce((acc, curr) => {
    const discount = Math.round(curr.price * curr.quantity * (curr.discountPercentage / 100));
    return acc + discount;
  }, 0);
  const total = subTotal - totalDiscount + 15;
  const payment = () => {
    toast.success("Pembayaran Berhasil");
    cartDispatch({ type: "payment" });
  };

  if (cartState.cart == 0) {
    return (
      <div className="pt-12 h-screen flex flex-col justify-center items-center gap-5 text-center bg-l-primary dark:bg-d-primary text-l-text-primary dark:text-d-text-primary">
        <h1 className="text-3xl font-bold">Keranjang Belanjamu Kosong</h1>
        <button
          onClick={() => navigate("/catalog")}
          className="bg-linear-to-r from-l-accent-primary to-d-accent-primary text-d-text-primary py-2 px-4 rounded-2xl cursor-pointer transition-all hover:-translate-y-1"
        >
          Berbelanja Sekarang
        </button>
      </div>
    );
  }

  return (
    <div className="pt-15 bg-l-primary min-h-screen flex flex-col gap-5 dark:bg-d-primary text-l-text-primary dark:text-d-text-primary pb-5 xl:grid xl:grid-cols-2 xl:grid-rows-[auto_1fr] xl:gap-y-8">
      <h1 className="text-xl font-bold text-center xl:col-span-full xl:text-3xl">Keranjang Saya</h1>
      <ul className="col-[1/2] row-[2/3]">
        {cartItems.map((item) => (
          <li key={item.id} className="border grid grid-cols-[1fr_2fr_0.5fr_0.5fr] sm:grid-cols-[1fr_3fr_1fr_0.5fr] grid-rows-2 items-center gap-2 py-1 rounded-2xl mt-1 h-30 mx-2 my-3">
            <img src={item.images[0]} alt={item.title} className="row-span-full h-25" />
            <h3 className="text-sm font-semibold font-playfair row-span-1 col-[2/3] sm:text-xl">{item.title}</h3>
            <span className="row-span-2 col-[2/3] text-sm sm:text-xl">${item.price}</span>
            <div className="flex items-center gap-1 w-fit px-2 row-span-full col-[3/4] border text-xs sm:text-base sm:gap-3 xl:text-xl">
              <FaMinus onClick={() => cartDispatch({ type: "DECREMENT", payload: item })} className="cursor-pointer" />
              <span>{item.quantity}</span>
              <FaPlus onClick={() => cartDispatch({ type: "INCREMENT", payload: item })} className="cursor-pointer" />
            </div>
            <FaTrash onClick={() => cartDispatch({ type: "REMOVE_FROM_CART", payload: item })} className="row-span-full col-[4/5] justify-self-center sm:text-xl xl:text-2xl" />
          </li>
        ))}
      </ul>
      <div className="border rounded-2xl mx-2 p-3 col-[2/3] row-[2/3] xl:self-start xl:p-5">
        <h2 className="font-bold text-xl mb-4 xl:text-2xl">Ringkasan Pesanan</h2>
        <div className="flex justify-between xl:text-xl">
          <span>Subtotal</span>
          <span>${subTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between xl:text-xl">
          <span>Total Item</span>
          <span>{cartItems.length}</span>
        </div>
        <div className="flex justify-between xl:text-xl">
          <span>Discount</span>
          <span>-${totalDiscount}</span>
        </div>
        <div className="flex justify-between xl:text-xl">
          <span>Biaya Pengiriman</span>
          <span>$15</span>
        </div>
        <div className="flex justify-between font-semibold border-t mt-2 xl:text-2xl">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button onClick={payment} className="bg-l-accent-primary dark:bg-d-accent-primary text-l-tertiary w-full rounded-xl py-1 mt-3 cursor-pointer xl:text-xl">
          Bayar
        </button>
      </div>
    </div>
  );
};

export default CartPage;

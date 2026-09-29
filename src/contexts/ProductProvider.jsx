import { useState, useEffect } from "react";
import axios from "axios";
import { ProductContext } from "./Context";

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products", {
          signal: controller.signal,
        });
        console.log(res.data.products);
        setProducts(Array.isArray(res.data.products) ? res.data.products : []);
      } catch (requestError) {
        if (!axios.isCancel(requestError)) {
          console.error("Gagal mengambil produk:", requestError);
        }
      }
    };

    fetchProducts();

    return () => controller.abort();
  }, []);

  return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>;
};

export default ProductProvider;

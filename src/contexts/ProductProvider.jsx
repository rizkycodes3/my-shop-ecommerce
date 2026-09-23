import { useState, useEffect } from "react";
import axios from "axios";
import { ProductContext } from "./Context";

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products", {
          signal: controller.signal,
        });
        setProducts(Array.isArray(response.data) ? response.data : []);
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

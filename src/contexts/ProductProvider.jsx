import { useState, useEffect } from "react";
import axios from "axios";
import ProductContext from "./ProductContext";

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchProducts = async () => {
      try {
        setError(null);
        const response = await axios.get("https://fakestoreapi.com/products", {
          signal: controller.signal,
        });
        setProducts(Array.isArray(response.data) ? response.data : []);
      } catch (requestError) {
        if (!axios.isCancel(requestError)) {
          console.error("Gagal mengambil produk:", requestError);
          setError("Produk tidak dapat dimuat. Silakan coba lagi nanti.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchProducts();

    return () => controller.abort();
  }, []);

  return <ProductContext.Provider value={{ products, loading, error }}>{children}</ProductContext.Provider>;
};

export { ProductProvider };

import { useCallback, useEffect, useState } from "react";
import AuthAPiClient from "../services/AuthApiClient";

const useFetchCart = () => {
  const [cart, setCart] = useState(null);
  const [cartID, setCartID] = useState(() => localStorage.getItem("cartId"));
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const createOrGetCart = useCallback(async () => {
    setLoading(true);
    try {
      const response = await AuthAPiClient.post("/api/cart/");
      if (!cartID) {
        localStorage.setItem("cartId", response.data.id);
        setCartID(response.data.id);
      }
      setCart(response.data);
    } catch (error) {
      console.log("Creating Cart Error!", error);
    } finally {
      setLoading(false);
    }
  }, [cartID]);

  const getCartItems = async () => {
    setLoading(true);
    try {
      const response = await AuthAPiClient.get(`/api/cart/${cartID}/items/`);
      setCartItems(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const addCartItems = async (product, quantity) => {
    setLoading(true);
    try {
      await AuthAPiClient.post(`/api/cart/${cartID}/items/`, {
        product,
        quantity,
      });
      return { success: true, message: "Item added to cart successfully" };
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    createOrGetCart(), getCartItems();
  }, []);

  return { createOrGetCart, cart, addCartItems, cartItems, loading };
};

export default useFetchCart;

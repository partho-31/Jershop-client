import { useCallback, useEffect, useState } from "react";
import AuthAPiClient from "../services/AuthApiClient";
import { toast } from "react-toastify";

const useCart = () => {
  const [cart, setCart] = useState(null);
  const [cartID, setCartID] = useState(() => localStorage.getItem("cartId"));
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const showErrorToast = () => {
    toast.error("Something went wrong! Please try again later", {
      position: "top-center",
    });
  };

  const getCartItems = useCallback(async () => {
    if (!cartID) return;
    setLoading(true);
    try {
      const response = await AuthAPiClient.get(`/api/cart/${cartID}/items/`);
      setCartItems(response.data);
    } catch (error) {
      return {
        success: false,
        message: "Error getting cartItem",
        error: error,
      };
    } finally {
      setLoading(false);
    }
  }, [cartID]);

  const createOrGetCart = useCallback(async () => {
    setLoading(true);
    try {
      const response = await AuthAPiClient.post("/api/cart/");
      if (!cartID) {
        localStorage.setItem("cartId", response.data.id);
        setCartID(response.data.id);
      }
      setCart(response.data);
      getCartItems();
    } catch (error) {
      return {
        success: false,
        message: "Error getting cart",
        error: error,
      };
    } finally {
      setLoading(false);
    }
  }, [cartID, getCartItems]);

  const addCartItems = async (product, quantity) => {
    setLoading(true);
    try {
      await AuthAPiClient.post(`/api/cart/${cartID}/items/`, {
        product,
        quantity,
      });
      await createOrGetCart();
      return { success: true, message: "Item added to cart successfully" };
    } catch (error) {
      showErrorToast();
      return {
        success: false,
        message: "Error getting product",
        error: error,
      };
    } finally {
      setLoading(false);
    }
  };

  const deleteCartItem = async (id) => {
    setLoading(true);
    try {
      await AuthAPiClient.delete(`/api/cart/${cartID}/items/${id}/`);
      await createOrGetCart();
      return { success: true, message: "Item removed from the cart" };
    } catch (error) {
      showErrorToast();
      return {
        success: false,
        message: "Error deleting cart item",
        error: error,
      };
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    createOrGetCart();
  }, [createOrGetCart]);

  return {
    createOrGetCart,
    cart,
    addCartItems,
    cartItems,
    deleteCartItem,
    loading,
  };
};

export default useCart;

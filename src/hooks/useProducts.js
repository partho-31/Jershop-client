import { useEffect, useState } from "react";
import ApiClient from "../services/ApiClient";
import AuthAPiClient from "../services/AuthApiClient";
import { toast } from "react-toastify";

const useProducts = () => {
  const [productsList, setProductsList] = useState([]);
  const [latestProducts, setLatestProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchByCategory, setSearchByCategory] = useState("");
  const [searchByKeyword, setSearchByKeyword] = useState("");

  const showErrorToast = () => {
    toast.error("Something went wrong! Please try again later", {
      position: "top-center",
    });
  };

  const createProduct = async (data) => {
    setLoading(true);
    try {
      await AuthAPiClient.post("/api/products/", data);
      return { success: true, message: "Product created successfully!" };
    } catch (error) {
      showErrorToast();
      return {
        success: false,
        message: "Error creating product",
        error: error,
      };
    } finally {
      setLoading(false);
    }
  };

  const getLatestProducts = async () => {
    setLoading(true);
    try {
      const response = await ApiClient.get("/api/latest/products/");
      setLatestProducts(response.data);
    } catch (error) {
      return {
        success: false,
        message: "Error getting product",
        error: error,
      };
    } finally {
      setLoading(false);
    }
  };

  const updateProduct = async (id, data) => {
    setLoading(true);
    try {
      await AuthAPiClient.patch(`/api/products/${id}/`, data);
      return { success: true, message: "Product updated successfully!" };
    } catch (error) {
      showErrorToast();
      return {
        success: false,
        message: "Error updating product",
        error: error,
      };
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id) => {
    setLoading(true);
    try {
      await AuthAPiClient.delete(`/api/products/${id}/`);
      return { success: true, message: "Product deleted successfully!" };
    } catch (error) {
      showErrorToast();
      return {
        success: false,
        message: "Error deleting product",
        error: error,
      };
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getProductsList = async () => {
      setLoading(true);
      try {
        const response = await ApiClient.get(
          `/api/products/?category=${searchByCategory}&search=${searchByKeyword}`
        );
        setProductsList(response.data);
      } catch (error) {
        showErrorToast()
        return {
          success: false,
          message: "Error getting product",
          error: error,
        };
      } finally {
        setLoading(false);
      }
    };
    getProductsList();
    getLatestProducts();
  }, [searchByCategory, searchByKeyword]);

  return {
    productsList,
    latestProducts,
    createProduct,
    getLatestProducts,
    updateProduct,
    deleteProduct,
    setSearchByCategory,
    setSearchByKeyword,
    loading,
  };
};

export default useProducts;

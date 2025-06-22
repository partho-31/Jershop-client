import { useEffect, useState } from "react";
import ApiClient from "../services/ApiClient";
import AuthAPiClient from "../services/AuthApiClient";

const useFetchProducts = () => {
  const [productsList, setProductsList] = useState([]);
  const [latestProducts, setLatestProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const createProduct = async (data) => {
    setLoading(true);
    try {
      await AuthAPiClient.post("/api/products/", data);
      return { success: true, message: "Product created successfully!" };
    } catch (error) {
      console.log("Error while creating products", error);
    } finally {
      setLoading(false);
    }
  };

  const getProductsList = async () => {
    setLoading(true);
    try {
      const response = await ApiClient.get("/api/products/");
      setProductsList(response.data);
    } catch (error) {
      console.log("Error while fetching products", error);
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
      console.log("Error while fetching products", error);
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
      console.log("Error while updating product", error);
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
      console.log("Error while deleting product", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductsList();
    getLatestProducts();
  }, []);

  return {
    productsList,
    latestProducts,
    createProduct,
    getLatestProducts,
    updateProduct,
    deleteProduct,
    loading,
  };
};

export default useFetchProducts;

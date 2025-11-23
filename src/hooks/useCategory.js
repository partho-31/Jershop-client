import { useEffect, useState } from "react";
import ApiClient from "../services/ApiClient";
import AuthAPiClient from "../services/AuthApiClient";
import { toast } from "react-toastify";

const useCategory = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const showErrorToast = () => {
    toast.error("Something went wrong! Please try again later", {
      position: "top-center",
    });
  };


  const getCategories = async () => {
    setLoading(true);
    try {
      const response = await ApiClient.get("/api/category/");
      setCategories(response.data);
    } catch (error) {
      return {
        success: false,
        message: "Error fetching categories",
        error: error,
      };
    } finally {
      setLoading(false);
    }
  };

  const createCategory = async (data) => {
    setLoading(true);
    try {
      await AuthAPiClient.post("/api/category/", data);
      return { success: true, message: "Category created successfully!" };
    } catch (error) {
      showErrorToast()
      return {
        success: false,
        message: "Error creating category",
        error: error,
      };
    } finally {
      setLoading(false);
    }
  };

  const deleteCategory = async (id) => {
    setLoading(true);
    try {
      await AuthAPiClient.delete(`/api/category/${id}/`);
      return { success: true, message: "Category deleted successfully!" };
    } catch (error) {
      showErrorToast()
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
    getCategories();
  }, []);

  return { categories, createCategory, deleteCategory, getCategories, loading };
};

export default useCategory;

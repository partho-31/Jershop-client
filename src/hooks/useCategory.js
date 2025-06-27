import { useEffect, useState } from "react";
import ApiClient from "../services/ApiClient";
import AuthAPiClient from "../services/AuthApiClient";

const useCategory = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCategories = async () => {
    setLoading(true);
    try {
      const response = await ApiClient.get("/api/category/");
      setCategories(response.data);
    } catch (error) {
      console.log("Error while fetching categories", error);
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
      console.log("Error while creating category", error);
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
      console.log("Error while deleting category", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return { categories, createCategory, deleteCategory,getCategories, loading };
};

export default useCategory;

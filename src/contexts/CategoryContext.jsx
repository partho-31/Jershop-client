import { createContext } from "react";
import useCategory from "../hooks/useCategory";



const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const data = useCategory()
  return (
    <CategoryContext.Provider value={data}>{children}</CategoryContext.Provider>
  );
};

export default CategoryContext; 
import { createContext } from "react";
import useProducts from "../hooks/useProducts";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const data = useProducts();
  return (
    <ProductsContext.Provider value={data}>{children}</ProductsContext.Provider>
  );
};

export default ProductsContext; 

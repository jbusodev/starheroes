import { useContext } from "react";
import { PaginateContext } from "../context/PaginateContext";

export const usePaginate = () => {
    const context = useContext(PaginateContext);
    if (!context) {
      throw new Error('usePaginateContext must be used within a PaginateProvider');
    }
    return context;
  };
import { useEffect, useState } from "react";
import { ProductsContext } from "./ProductsContext"

export const ProductsProvider = ({children}) => {

    const [items, setItems] = useState([]);

    const fetchItems = async() => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setItems(data);
    }
  
    useEffect(() => {
      fetchItems();
    }, [])
  
  return (
    <ProductsContext.Provider value={{items}}>      
      {children}
    </ProductsContext.Provider>
  )
}

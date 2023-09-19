import { useContext } from "react"
import { Card } from "../components/Card";
import { ProductsContext } from "../context/ProductsContext";
import { CartContext } from "../context/CartContext";

export const ShoppingPage = () => {

  const { items } = useContext(ProductsContext);
  const { agregarCompra, eliminarCompra } = useContext(CartContext);

  const handleAgregar = (compra) => {
    agregarCompra(compra);
  }
  const handleEliminar = (id) => {
    eliminarCompra(id);
  }
  

  return (
    <>
      <div>ShoppingPage</div>
      <div className="row d-flex gap-3 mx-auto">
        {
          items.map(item => (
            <Card key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
              handleAgregar={() => handleAgregar(item)}
              handleEliminar={() => handleEliminar(item.id)}
            />
          ))
        }</div>

    </>
  )
}

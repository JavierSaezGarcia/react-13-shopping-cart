import { useContext } from "react"
import { CartContext } from "../context/CartContext"


export const CartPage = () => {

  const { shoppingList, aumentarCantidad, disminuirCantidad, eliminarCompra} = useContext(CartContext);
 
  const calcularTotal = () => {
    return shoppingList.reduce((total, item) => total + item.price * item.cantidad, 0 ).toFixed(2)
  }

  const handleImpresion = () => {
      
    print()
}

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>    
            <th scope="col">Image</th>        
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Delete</th>            
          </tr>
         
        </thead>
        <tbody>
          {
            
            shoppingList.map((item) => (
              <tr key={item.id}>
                <td><img src={item.image} alt={item.title} className="image-thumbnail" /></td>
                <td>{item.title}</td>
                <td>{item.price} €</td>                        
                <td>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => disminuirCantidad(item.id)}
                  >-</button>
                  <button className="btn btn-primary btn-sm">{item.cantidad}</button>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => aumentarCantidad(item.id)}
                  >+</button>
                </td> 
                <td><button className="btn btn-danger btn-sm" onClick={() => eliminarCompra(item.id)}
                >X</button></td>             
              </tr>
            ))
          }

         <tr><td><b>Total:</b></td>
         <td><b>{calcularTotal()} €</b></td>
         </tr>
         
         
                            
           
        </tbody>
        
      </table>
      <div className="d-grid gap-2">
                <button 
                className="btn btn-primary"
                onClick={() => handleImpresion()}
                disabled={shoppingList.length<1}

                >COMPRAR</button>
            </div>
      
    </>
  )
}

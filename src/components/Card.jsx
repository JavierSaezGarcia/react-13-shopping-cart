import { useState } from 'react'
import '../styles/card.css'

export const Card = ({ id, image, title, description, price, handleAgregar, handleEliminar }) => {

  const [added, setAdded] = useState(false);

  const clickAgregar = () => {
    handleAgregar();
    setAdded(true);
    
  }

  const clickEliminar = () => {
    handleEliminar();
    setAdded(false);
    
  }


  return (
    <div className="card text-center" style={{"maxWidth": "18rem","padding":"25px"}}>
      <img className="card-img-top image" src={image} alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <a className="card-text" data-bs-toggle="collapse" href={"#leeme"+id} > Description: </a>
          <p className="collapse text" id={"leeme"+id} >{description}</p>          
        <h3 className="card-title">{price}</h3>
        {
        added 
          ?
          <button 
            type="button"
            className="btn btn-danger" 
            onClick={clickEliminar}
            >Remover</button> 
          :
          <button 
            type="button"
            className="btn btn-primary" 
            onClick={clickAgregar}
            >Agregar</button>
      }
      </div>    
      
    </div>
  )
}

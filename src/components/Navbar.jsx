import { ShoppingCart } from "@mui/icons-material"
import { Badge } from "@mui/material"
import { NavLink } from "react-router-dom"
import { CartContext } from "../context/CartContext";
import { useContext } from "react";




export const Navbar = () => {

    const { shoppingList } = useContext(CartContext);
    return (
        <>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <NavLink to='/' className="navbar-brand" href="#">Navbar</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item active">
                                <NavLink to='/' className="nav-link">Shopping</NavLink>
                            </li>

                        </ul>
                        <NavLink to='/cart'>
                            <Badge badgeContent={shoppingList.length === 0 ? '0' : shoppingList.length} color="secondary">
                                <ShoppingCart color="primary" />
                            </Badge>
                        </NavLink>

                    </div>
                </nav>
            </div>
        </>
    )
}

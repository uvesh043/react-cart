import { Link, Redirect } from 'react-router-dom'

//using comtext
import { useContext } from "react";
import { CartContext } from "../pages/CartContext";

function Navigation() {
    const cartStyle = {
        background: '#F59E0D',
        display: 'flex',
        paddinhg: '6px 12px',
        borderRadius: '20px',
        padding: "5px"

    }
    
    const { cart } = useContext(CartContext)
    // console.log(cart);
//   var totalCartItems;
//     if (cart.totalItems==undefined || cart.totalCartItems==null) {
//         totalCartItems = ""
//     }
//     else {
//         totalCartItems = cart.totalItems
//     }
    return (
        <>
            <nav className="container mx-auto flex items-center justify-around py-4">
                <Link to='/'>
                    <img style={{ height: 50 }} src="/images/logo.png" alt="logo" />
                </Link >
                <ul className="flex items-center ">
                    <li className="ml-5 font-bold"><Link to="/">Home</Link></li>
                    <li className="ml-5 font-bold"><Link to="/product">Product</Link></li>
                    <li className="ml-5 font-bold"><Link to="/signup">Signup</Link></li>
                    <li className="ml-5 font-bold"><Link to="/login">Login</Link></li>
                    <li className="ml-5 font-bold">
                        <Link to="/cart">
                            <div style={cartStyle}>
                                {/* <span className="pl-2">{!cart.totalItems?"":cart.totalItems}</span> */}
                                <span className="pl-2">{!cart.totalItems ? '' : cart.totalItems}</span>
                                <img className="ml-2" src="/images/cart.png" alt="cart-icon" />
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
export default Navigation
























//  //{/* <a href="/">Home</a>  use Link Tag instead of Anchor(a) tag because link not reload app but anchor tag does*/}
//  <>
//  <Link to="/">Home</Link>
//  <Link to="/about">About</Link>
// </>
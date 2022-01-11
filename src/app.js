import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";

import product from "./pages/product";
import Cart from "./pages/cart";
import Navigation from "./components/Navigation";
import SingleProduct from "./components/SingleProduct";
import Logout from "./components/Logout";
import Signup from "./pages/signup";
import Login from "./pages/login";
import { CartContext } from "./pages/CartContext";
import { useEffect, useState } from "react";
import { createContext, useReducer, useContext } from "react";
// import CartSchema from "../server/Models/cartSchema";
function App() {
  const [cart, setCart] = useState({}); //creating local state for maintain cart item ,etc
  //if don't give useEffect any dependencies useEffect  run on page refresh or first time page load
  const pizzaData = [
    {
      _id: 1,
      name: "Havana Special",
      size: "Small",
      price: "400",
      images: "../images/peproni.png",
    },
    {
      _id: 2,
      name: "Non veg pizza",
      size: "Medium",
      price: "121",
      images: "../images/peproni.png",
    },
    {
      _id: 3,
      name: " veg pizza",
      size: "Small",
      price: "180",
      images: "../images/peproni.png",
    },
    {
      _id: 4,
      name: "Full Cream Pizza",
      size: "Extra Small",
      price: "400",
      images: "../images/peproni.png",
    },
    {
      _id: 5,
      name: "Half Cream Pizza",
      size: "Large",
      price: "145",
      images: "../images/peproni.png",
    },
    {
      _id: 6,
      name: "Milky Cream Pizza",
      size: "Small",
      price: "178",
      images: "../images/peproni.png",
    },
  ];
  const [cartItems,setCartItems]=useState('')
  const Cart = createContext();
  // const [state, dispatch] = useReducer(cartReducer, {
  //   products: pizzaData,
  //   cart: [],
  // });
  useEffect(() => {
    const cart = window.localStorage.getItem("cart");
    // setting local state to cart (and ci)
    setCart(JSON.parse(cart));
  }, []);
  // use useEffect to store cart in localStorage set dpendencies cart(i.e when cart change useEffect change)
  useEffect(() => {
    //localStorage store data in string form so that we cinverted it into string
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  
  useEffect(() => {
    getCartDBData();
  }, []);

  const getCartDBData= async()=> {
    const response = await fetch("/loadItems", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const data = await response.json();
    setCartItems(data)
    console.log(cartItems);
   
  }
  return (
    <>
      {/* <Cart.Provider value={{ state, dispatch }}>{props.children}</Cart.Provider>; */}
      <Router>
        <CartContext.Provider value={{ cart: cart, setCart: setCart }}>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path="/product" component={product}></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route path="/signup" component={Signup}></Route>
            <Route path="/Login" component={Login}></Route>
            <Route path="/logout" component={Logout}></Route>
            <Route path="/products/:_id" component={SingleProduct}></Route>
          </Switch>
        </CartContext.Provider>
      </Router>
    </>
  );
}
export default App;

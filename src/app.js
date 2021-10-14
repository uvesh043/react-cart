import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/home'

import product from './pages/product'
import Cart from './pages/cart'
import Navigation from './components/Navigation';
import SingleProduct from './components/SingleProduct';
import Signup from './pages/signup'
import Login from './pages/login'
import { CartContext } from "./pages/CartContext";
import { useEffect,useState } from 'react';

function App() {
    const [cart, setCart] = useState({}) //creating local state for maintain cart item ,etc
    //if don't give useEffect any dependencies useEffect  run on page refresh or first time page load
    useEffect(() => {
        const cart = window.localStorage.getItem('cart')
        // setting local state to cart (and ci)
        setCart(JSON.parse(cart))
    }, [])
    // use useEffect to store cart in localStorage set dpendencies cart(i.e when cart change useEffect change)
    useEffect(() => {
        //localStorage store data in string form so that we cinverted it into string
        window.localStorage.setItem('cart',JSON.stringify(cart))
    }, [cart])
    return (
        <>
            <Router>
                <CartContext.Provider value={{ cart: cart, setCart: setCart }}>
                    <Navigation />
                    <Switch>
                        <Route path="/" component={Home} exact></Route>
                        <Route path="/product" component={product}></Route>
                        <Route path="/cart" component={Cart}></Route>
                        <Route path="/signup" component={Signup}></Route>
                        <Route path="/Login" component={Login}></Route>
                        <Route path="/products/:_id" component={SingleProduct}></Route>
                    </Switch>
                </CartContext.Provider>
            </Router>
        </>
    )
}
export default App;
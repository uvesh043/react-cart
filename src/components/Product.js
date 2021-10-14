// import React from 'react'
import { Link, useHistory } from "react-router-dom";
import {
  Typography,
  Grid,
  Grow,
  Item,
  makeStyles,
  CardContent,
  Card,
  Button,
  CardActionArea,
  CardMedia,
  CardActions,
} from "@material-ui/core";
//using context
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../pages/CartContext";


const useStyles = makeStyles((theme) => ({
  card:{
    border:"20px solid red",
    width:'20vw',
    height:'20vh'
  },
  cardMedia:{
    border:"10px solid yellow",
    width:'100px',
    height:'100px'
  },
  cardContent:{
    border:"2px solid blue",
  }
  
}))
function SingleProducts(props) {
  const classes = useStyles();
  const histroy = useHistory();
  const [user, setUserData] = useState("");
  const getUserData = async () => {
    try {
      const res = await fetch("/product", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      setUserData(data);
      if (!res.status == 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      histroy.push("/login");
    }
  };
  useEffect(() => {
    getUserData();
  }, []);
  const { cart, setCart } = useContext(CartContext);

  const { images,name,price,size } = props.pizzaData;
console.log("This is props",props);
  const [isAdding, setIsAdding] = useState(false);
  // console.log(isAdding);
  const addToCart = (event, pizzaData) => {
    event.preventDefault();
    let _cart = { ...cart };
    // console.log(_cart);
    if (!_cart.items) {
      // if cart does not have items key()(i.e _cart is { } empty object) the we assign it ot empty object
      _cart.items = {};
    }
    if (_cart.items[pizzaData._id]) {
      // if _cart(which is stored from localStorage ) already have items with that id so add that itesm quantity by 1
      _cart.items[pizzaData._id] = _cart.items[pizzaData._id] + 1;
    } else {
      // if _cart(which is stored from localStorage ) not have items with that id so add that items and set its qunatity with 1
      _cart.items[pizzaData._id] = 1;
    }
    if (!_cart.totalItems) {
      _cart.totalItems = 0;
    }
    _cart.totalItems = _cart.totalItems + 1;
    setCart(_cart);
    setIsAdding(true);
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);

    // // structure of Cart object(dummny object)
    // // const cart={
    // //     itmes:{
    // //         '6051519vhb1sdfdf16fs':2,
    // //         '6632sa5655x6z669x66q':1
    // //     },

    // //     totalItems:5
    // // }
  };
  function getuser() {
    console.log(user);
  }

  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          height="20"
          image={images}
          alt="green iguana"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="div">
          {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Added
        </Button>
      </CardActions>
    </Card>
      </Grid>
    </>
  );
}
export default SingleProducts;

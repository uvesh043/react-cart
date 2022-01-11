import React from "react";
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
  container: {
    boxShadow: "0 2px 5px 0  rgb(0 0 /20%), 0 2px 10px 0 rgb(0 0 /22%)",
    height: "350px",
    width: "300px",
    display: "flex",
    flexDirection: "column",

    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#d99058",
    backgroundImage: "linear-gradient(315deg, #d99058 0%, #f8de7e 74%)",
    height: "320px",
    width: "300px",
    borderBottom: "10px solid rgb(200,205,48)",
  },
  image: {
    height: "200px",
    width: "300px",
    justifyContent: "center",
  },
  imageDiv: {
    height: "230px",
    width: "300px",
    objectFit: "cover",
  },
  title: {
    color: "black",
    width: "300px",
    fontWeight: "bolder",
  },
  name:{
    fontWeight:"bold"
  },
  dateSourceContainer: {
    marginTop:"0.5rem",
    marginBottom:"0.5rem",
    fontSize:"1.5rem",
    width: "100%",
    display: "flex",
   
    justifyContent: "space-around",
    fontWeight: "bolder",
    fontSize:'1.4rem' 
  },
  size:{
fontWeight:"bold"
  },
 
  priceDetaile: {
    // paddingLeft:'1rem',
    display: "flex",
    justifyContent: "space-around",
  },
  showDetaile:{
//     fontWeight:"bold",
//     textAlign:'center',
// width:"40vw"
textDecoration:"underline"

  },
  bgGreen: {
    backgroundColor: "#7ee8fa",
    backgroundImage: "linear-gradient(315deg, #7ee8fa 0%, #80ff72 74%)",
  },
  bgYellow: {
    backgroundColor: " #f39f86",
    backgroundImage: "linear-gradient(315deg, #f39f86 0%, #f9d976 74%)",
  },
}));
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
      // console.log(data);
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
  const pizzaData = props.pizzaData;
  // console.log("props.pizzaData",props.pizzaData);
  const { images, name, price, size } = props.pizzaData;
  const [isAdding, setIsAdding] = useState(false);

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
        <Card className={classes.card}>
          <div className={classes.CardMedia}>
            <CardMedia className={classes.image} image={images} alt="" />
          </div>
          <div  className={classes.dateSourceContainer}>
            <Typography className={classes.size} variant="body2" color="textSecondary" componet="h2">
              Size :{size}
            </Typography>
            <Typography className={classes.name} variant="body2" color="textSecondary" componet="h2">
              {name}
            </Typography>
          </div>
          <div className={classes.priceDetaile}>
            <Typography className={classes.title1}>{`₹ ${price}`}</Typography>
          <Link to={`/products/${props.pizzaData._id}`}>  <Typography color="primary" className={classes.showDetaile}>
              Show Detailes
            </Typography></Link>
          </div>
          <div className={classes.learn_more}>
            <Button
            
              variant="contained"
              className={`${isAdding ? classes.bgGreen : classes.bgYellow} `}
              onClick={(event) => {
                addToCart(event, pizzaData);
              }}
            >
              Add
            </Button>
          </div>
        </Card>
      </Grid>
    </>
  );
}
export default SingleProducts;

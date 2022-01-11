import React from "react";
import { useState, useEffect } from "react";
import Product from "./Product";
import { Typography, Grid, Grow, Item, makeStyles } from "@material-ui/core";

//import context
import { CartContext } from "../pages/CartContext";

const Products = () => {
  // const { name } = useContext(CartContext); //using cart context
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
  const [product, setProducts] = useState([]);
  useEffect(() => {
    setProducts(pizzaData);
  }, []);
  return (
    // <div className="conatiner mx-auto pb-24">
    <Grow in>
      <Grid container alignItems="stretch" spacing={3}>
        {product.map((productItem) => {
          return <Product key={productItem._id} pizzaData={productItem} />;
        })}
      </Grid>
    </Grow>
    // </div>
  );
  // <div className="conatiner mx-auto pb-24">
  //     <h1 className="text-lg font-bold my-8"> Product </h1>
  //     <div className="grid grid-cols-5 my-8 gap-24 mx-8">
  //         {
  //             product.map((productItem) => {
  //                 // console.log(productItem);
  //                 return (
  //                     <Product key={productItem._id} pizzaData={productItem} />
  //                 )
  //             })
  //         }
  //     </div>
  // </div>
  // )
};

export default Products;

// <div className="conatiner mx-auto pb-24">
// <h1 className="text-lg font-bold my-8">Product</h1>
// <div className="flex justify-around m-5">
//     <div className="mx-4 ">
//         <img src="../images/peproni.png" />
//         <div className="flex flex-col ">
//             <h2 className="text-center">peproni</h2>

//             <h2 className="text-center mt-4 mx-auto bg-gray-200 rounded-full w-1/3">Small</h2>

//             <div className="flex justify-around ">
//                 <span className="mt-1"> &#x20b9; 520</span>
//                 <button className="bg-yellow-600 px-2 py-1 rounded-full">ADD</button>
//             </div>
//         </div>

//     </div>
//     <div className="mx-4 ">
//         <img src="../images/peproni.png" />
//         <div className="flex flex-col ">
//             <h2 className="text-center">peproni</h2>

//             <h2 className="text-center mt-4 mx-auto bg-gray-200 rounded-full w-1/3">Small</h2>

//             <div className="flex justify-around ">
//                 <span className="mt-1"> &#x20b9; 520</span>
//                 <button className="bg-yellow-600 px-2 py-1 rounded-full">ADD</button>
//             </div>
//         </div>

//     </div><div className="mx-4 ">
//         <img className="" src="../images/peproni.png" />
//         <div className="flex flex-col ">
//             <h2 className="text-center">peproni</h2>

//             <h2 className="text-center mt-4 mx-auto bg-gray-200 rounded-full w-1/3">Small</h2>

//             <div className="flex justify-around ">
//                 <span className="mt-1"> &#x20b9; 520</span>
//                 <button className="bg-yellow-600 px-2 py-1 rounded-full">ADD</button>
//             </div>
//         </div>

//     </div>
//     <div className="mx-4 ">
//         <img src="../images/peproni.png" />
//         <div className="flex flex-col ">
//             <h2 className="text-center">peproni</h2>
//             <h2 className="text-center mt-4 mx-auto bg-gray-200 rounded-full w-1/3">Small</h2>
//             <div className="flex justify-around ">
//                 <span className="mt-1"> &#x20b9; 520</span>
//                 <button className="bg-yellow-600 px-2 py-1 text-bolder rounded-full">ADD</button>
//             </div>
//         </div>
//     </div>

// </div>
// </div>

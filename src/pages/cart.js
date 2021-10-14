//using comtext
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../pages/CartContext";

function Cart() {
  const { cart } = useContext(CartContext);
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
      size: "Small",
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
      size: "Small",
      price: "400",
      images: "../images/peproni.png",
    },
    {
      _id: 5,
      name: "Half Cream Pizza",
      size: "Small",
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
  const [cartProduct, setCatProduct] = useState([]);
  // const cartProperties = Object.keys(cart.items)
  // const cartPropertiesValue = Object.entries(cart.items)
  console.log(typeof cart.items);
  useEffect(() => {
    if (!cart.items) {
      return;
    }
    setCatProduct(pizzaData);
  }, [cart]);

  return (
    <div className="container mx-auto  lg:w-1/2 w-full pb-24">
      <h1 className="  font-bold mt-4 mb-6">Cart items</h1>
      <ul>
        {cartProduct.map((ele) => {
          return (
            <li className="mb-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {" "}
                  <img src="/images/peproni.png" className="w-16" alt="" />
                  {/* <span className="font-bold ml-4 w-48">{pizzaData.filter((el)=>{console.log(el)})}</span> */}
                  <span className="font-bold ml-4 w-48">csdc</span>
                </div>
                <div className="flex items-center">
                  <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">
                    -
                  </button>
                  <b className="px-4">2</b>
                  <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">
                    +
                  </button>
                </div>
                <span>$500</span>
                <button className="bg-red-500 px-4 py-2 rounded-full leading-none text-white  ">
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      <hr className="my-6" />
      <div className="text-right my-4">
        <b>Grand Total:</b>500
      </div>
      <div className="text-right mt-2">
        <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">
          Order Now
        </button>
      </div>
    </div>
  );
}

export default Cart;

{
  /* <li className="mb-10">
<div className="flex items-center justify-between">
    <div className="flex items-center"> <img src="/images/peproni.png" className="w-16" alt="" />
        <span className="font-bold ml-4 w-48">Name</span>
    </div>
    <div className="flex items-center">
        <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">-</button>
        <b className="px-4">2</b>
        <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">+</button>
    </div>
    <span>$500</span>
    <button className="bg-red-500 px-4 py-2 rounded-full leading-none text-white  ">Delete</button>
</div>
</li> */
}

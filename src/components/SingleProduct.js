import { BrowserRouter as Link, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

function SingleProduct() {
    
    const pizzaData = [
        {
            _id: 1,
            name: "Havana Special",
            size: "large",
            price: "400",
            images: "../images/peproni.png"
        },
        {
            _id: 2,
            name: "Non veg pizza",
            size: "medium",
            price: "121",
            images: "../images/peproni.png"
        },
        {
            _id: 3,
            name: " veg pizza",
            size: "Small",
            price: "180",
            images: "../images/peproni.png"
        },
        {
            _id: 4,
            name: "Full Cream Pizza",
            size: "Extra Small",
            price: "400",
            images: "../images/peproni.png"
        },
        {
            _id: 5,
            name: "Half Cream Pizza",
            size: "Small",
            price: "145",
            images: "../images/peproni.png"
        },
        {
            _id: 6,
            name: "Milky Cream Pizza",
            size: "Small",
            price: "178",
            images: "../images/peproni.png"
        },

    ]
    let params = useParams();
    function functionToMatchPizza(params) {
        for (let i = 0; i < pizzaData.length; i++) {
            if (params._id == pizzaData[i]._id) {
             return pizzaData[i]
            }
        }
    
    }
    let individualPizza=functionToMatchPizza(params)
    const history=useHistory()
    return (
        <div className="container mx-auto px-4 ml-10">
            <Link to="/"> <button className="font-bold text-2xl mx-2 mb-4 " onClick={()=>{history.goBack()}}>Back</button>
            </Link>
         <div className="flex">
         <div className="" >
                <img src={individualPizza.images}  alt="pizza"/>
               
            </div>
            <div className="ml-10" >
               <h2 className=" text text-2xl font-extrabold"  >Pizza Sepecial</h2> 
               <h3 className="font-bold text-xl my-3">Medium</h3>
               <h2 className="font-bold text-xl">$500</h2>
               <button  style={{ background: '#F59E0D'}} className="px-4 ml-6 mt-3 py-2 text-center w-auto rounded-2xl font-bold">Add to Cart</button>
            </div>
         </div>
        </div>
    )
}

export default SingleProduct;
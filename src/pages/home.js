// import { Button } from '@mui/material'
import Product from '../components/Products'
function Home() {
    const divStyle = {
        //  margin:'20px'   
        // border: "2px solid red",
    
    }
    return (

        <> 
            <div style={divStyle} className="hero py-16 ml-12">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="w-1/2 ml-5">
                        <h6 className="text-lg "><em>Are you Hungary</em></h6>
                        <h1 className="text-3xl md:text-6xl font-bold">Don't Wait</h1>
                        <button className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-500 hover:bg-yellow-600" >Order Now</button>
                    </div>
                    <div className="w-1/2">
                        <img src="/images/pizza.png"/>
                    </div>
                </div>
            </div>
            <div className="pb-24 font-bold text-xl ml-8">
                <Product/>
            </div>
        </>
    )
}

export default Home
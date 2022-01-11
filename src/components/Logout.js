import React,{useContext,useEffect} from "react";
import { useHistory } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
toast.configure();
const Logout=()=>{
   const history=useHistory()
  useEffect(()=>{
   fetch('/logout',{
     method:"GET",
     headers:{
        Accept:"application/json",
        "Content-type":"application/json"
     },
     credentials:'include'
  }).then((response)=>{
     
if(response.status==200){
   toast.success("Your are Logout successfully", { position: toast.POSITION.TOP_RIGHT });
   history.push('/login',{replace:true})
}
else{
   toast.success("Your  Logout not  successfully", { position: toast.POSITION.TOP_RIGHT })
   history.push('/logout',{replace:true})
}
  }).catch((error)=>{
console.log(error);
  })
  },[])
return(
   <h1>This is logout page</h1>
)
}
export default Logout;
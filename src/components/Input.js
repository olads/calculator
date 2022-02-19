import Button from "./Button";
import Numbers from "./Numbers";
import Operators from "./Operators";
import Functions from "./Functions";
import { createContext } from "react";



const Input = ({value}) => {
    
    return(
     
        <div className = "input">
         <Numbers action={value}/>
         <Operators action={value}/>  
        </div>

    )
};

export default Input
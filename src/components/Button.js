import { AppContext } from "../App"
import { useContext } from "react"


const getStyle = (type) => {
    if(type === "1"){
        return "num"
    }
    else if (type === "2"){
        return "oper"
    }
    else if(type === "3" ){
        return "func"
    }
}
const Button = ({type,value,id = ""}) => {
    if(!isNaN(value)){
        id += value;
    }
    const action = useContext(AppContext) 
    const updateDisplay = (event) => {
        if(type === "3"){
            action("",2)
        }
        else if(id === "ans"){
            console.log("Evaluate")
            action("",2)
        }
        else{
       action(value,1)
        }
    }
    return(
        <div  className={getStyle(type)} id = {"btn" + id} onClick={updateDisplay} >
          {value}
        </div>
    )
}


export default Button
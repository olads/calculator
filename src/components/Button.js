import { AppContext } from "./Calc"
import { useContext } from "react"
import Request from "../Request"


const getStyle = (type) => {
    let classes = "button ";
    if(type === "1"){
        classes = classes.concat("num")
    }
    else if (type === "2"){
        classes = classes.concat("oper")
    }
    else if(type === "3" ){
        return "func"
    }
    return classes;
}

const Button = ({type,value,id = ""}) => {
    if(!isNaN(value)){
        id += value;
    } 
 
    const action = useContext(AppContext)
    const updateDisplay = () => {
        console.log("The Id pressed is ",id)
        // if(type === "3"){
        //     action("",2)
        // }
        // else 
        if(id === "ans"){
            // console.log("Answer button has been pressed")
            // let result = Request.solve(value);
            // console.log(result)
            action(value,3)
        }
        else if(id === "clr"){
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
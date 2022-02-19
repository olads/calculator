import { useState,useEffect } from "react";




const Display = ({value}) => {
/* const fetc = () => {
     fetch("http://jsonplaceholder.typicode.com/posts")
         .then((response) => response.json())
         .then((data) => console.log(data))
     return " Check your console";
 }*/

    return(
        <div className="display">
         {value}
        </div>
    )

    
};

export default Display
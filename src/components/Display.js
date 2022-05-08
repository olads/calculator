import { useState,useEffect } from "react";


const Display = ({value, ans}) => {
/* const fetc = () => {
     fetch("http://jsonplaceholder.typicode.com/posts")
         .then((response) => response.json())
         .then((data) => console.log(data))
     return " Check your console";
 }*/
 console.log("ans is " + ans);

    return(
        <div className="display">
            <div className="expr">
               {value}
            </div>

         <div className="result">
            {ans}
         </div>
         
        </div>
    )

    
};

export default Display
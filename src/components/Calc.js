import React from 'react';
import Display from "./Display";
import Input from "./Input";
import Functions from "./Functions";
import { useState, createContext} from 'react';
import {request} from "../axios";



    export const AppContext = createContext(null)


    const Calc = () => {
        const [expr,setExpr] = useState("")
        const [ans, setAns] = useState("")
        const register = (name,password) => {
            // request.get("/register", {
            //     params:
            //         {name,password}
            // })
            //     .then((response) => console.log(response.data));
        }

        const reg = (name,password) => {
           // request.post("/welcome",(name,password))
               // .then((response) => console.log(response.data));
        }

        const getModule = (url) => {
            request.get(url)
                .then((response) => console.log(response.data));
        }
        const updateExpr = (param,action) => {
            switch(action){
                case 1 :
                    setExpr(expr + param)
                   // register("migia","migia");
                    break;
                case 2:
                    setExpr("")
                    // request.post("/login",{
                    //     username: "admin",
                    //     password: "migia"
                    // }).then((response) => console.log(response.data));

                   // getModule("/admin")
                    break;
                case 3:
                    setAns(param)
                    break;

                default:
                    console.log("Action not recognised")
                    break;

            }
        }
        return(
            <AppContext.Provider value={updateExpr}>
                <div className="calc">
                    <span id="name"> Calculator </span>
                    <Display value = {expr} ans={ans}/>
                    <Input/>
                    <Functions />

                </div>
            </AppContext.Provider>
        )
    };



export default Calc;
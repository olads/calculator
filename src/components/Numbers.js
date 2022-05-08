import Button from "./Button";
import { useContext } from "react";
import { createContext } from "react";
import { inputContext } from "./Input";
import Link from "react-router-dom";




const Numbers = ({action}) => {
     
    return (
       
        <div className="numbers" >
            <Button type = "1" value ="1" />
            <Button type = "1" value ="2"/>
            <Button type = "1" value ="3"/>
            <Button type = "1" value ="4"/>
            <Button type = "1" value ="5"/>
            <Button type = "1" value ="6"/>
            <Button type = "1" value ="7"/>
            <Button type = "1" value ="8"/>
            <Button type = "1" value ="9"/>
            <Button type = "1" value ="0"/>
        </div>

    )
}

export default Numbers;
import Button from "./Button";
const Operators = () => {
    return(
        <div className="operators">
            <Button type = "2" value = "+"  id="p"/>
            <Button type = "2" value = "-" id="mi"/>
            <Button type = "2" value = "^" id="po"/>
            <Button type = "2" value = "x" id="mu"/>
            <Button type = "2" value = "/" id="di"/>
            <Button type = "2" value = "sqrt" id="sqrt"/>
            
        </div>
    )
}

export default Operators;
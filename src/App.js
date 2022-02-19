
import Display from './components/Display';
import Input from './components/Input';
import Functions from './components/Functions';
import { useState, createContext} from 'react';


export const AppContext = createContext(null)

const App = () => {
  const [expr,setExpr] = useState("Hello World")

  const updateExpr = (param,action) => {
  switch(action){
      case 1 : 
      setExpr(expr + param)
      break;
      case 2: 
       setExpr("")
       break;
      default:
         console.log("Action not recognised")
         break;

  }
} 
  return(
    <AppContext.Provider value={updateExpr}>
    <div className="app">
      <span id="name"> Calculator </span>
      <Display value = {expr}/>
      <Input/>
      <Functions />

    </div>
    </AppContext.Provider>
  )
};

export default App;

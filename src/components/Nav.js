import React from "react";
import CLink from "./CLink";
import { useState } from "react";
import Content from "./Content";
import Request from "../Request";

const Nav = () => {
  const [HOME, HISTORY, AUTH] = [1, 2, 3];
  const [signedIn, setSignIn] = useState(localStorage.getItem("auth") !== null);
  const [isOpen, setIsOpen] = useState(false);
  const [tab, setTab] = useState(HISTORY);
  const [content,setContent] = useState(null)
 const [histories,setHistories] = useState([]);


  const history = () => {
   
    return <div >
     {histories.map((data,key) => {
        console.log(data.expr);
        return(<div key={key} className="history">{data.expr} = {data.ans}</div>)
      })}
   </div>
  };



  const registerObject = {
    username: "",
    email:"",
    password:""
  }

  const changed = (event) => {
    console.log("In the onChange event handler now...")
    console.log(event.target.value)
    switch(event.target.id){
      case "username":
        registerObject.username = event.target.value
        break;
      case "email":
        registerObject.email = event.target.value
        break;
      case "password": 
      registerObject.password = event.target.value
      break;
        default:
          console.log("Type not found ")
    }
    
  };
  const signIn = (event) =>{
    console.log("In the signin function...")
    Request.login(registerObject.username, registerObject.password)
  
    setIsOpen(false)
    setSignIn(true)
    console.log(localStorage.getItem("auth"))
  }

  const signUp = (event) =>{
    console.log("In the signup function")
    Request.register(registerObject.username,registerObject.email,registerObject.password)
    setIsOpen(false)
    setSignIn(true)
  }

  const showSignUp = () => {
    setContent(register())
  }
  const register = () => {
  
    return (
      <div className="form register">
      <div>
          <div className="form-input">
            <label htmlFor="username"> Username: </label>
            <input
              id="username"
              type="text"
              name="username"
              required
              autoFocus
              onChange={changed}
            />
          </div>
          
          <div className="form-input">
            <label htmlFor="email"> Email: </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              autoFocus
              onChange={changed}
            />
          </div>

          <div className="form-input">
            <label htmlFor="password"> Password: </label>
            <input 
            id="password"
             name="password"
              type="password"
              required
              autoFocus 
              onChange={changed} />
          </div> 
         <button id="signup"  onClick={signUp} type="submit">Sign Up</button>
          </div>
          
      
      </div>
    );
  };

  const login = () => {
    return (
      <div className="form login">
      <div>
          <div className="form-input">
            <label htmlFor="username"> Username: </label>
            <input
              id="username"
             name="name"
              type="text"
              onChange={changed}
            />
          </div>
          <div className="form-input">
            <label htmlFor="password"> Password: </label>
            <input id="password" 
            type="password" 
            onChange={changed}
            name="password" />
          </div>
           <div className="signin-signup">
          <button id="show-signup" onClick={showSignUp}>Sign Up</button>
          <button id="signin" onClick={signIn}>Sign In</button>
      </div>
          </div>
         
      </div>
    );
  };


  const historyClicked = () => {
    console.log(tab,isOpen);
    Request.getHistory().then(result => {
      setHistories(result)
    })
   setIsOpen(true)
    if(tab === HISTORY){
       setIsOpen(!isOpen); 
    }
   
    setTab(HISTORY);
    setContent(history())
  };

  const authClicked = () => {
    
    if(!signedIn){
   // console.log(tab,isOpen);
    setIsOpen(true)
    if(tab === AUTH){
      
        setIsOpen(!isOpen); 
    }
  
     setTab(AUTH);
    setContent(login())
  }
  if(signedIn){
    setIsOpen(true)
    setSignIn(false)
    Request.logout()
  }
  };

  

  return (
    <div className="nav">
      <div className="desc">
        <CLink value="MiGiA" />
      </div>
      <div className="tab">
        <div className="links">
          <CLink value="History" action={historyClicked} />
          <CLink
            value={signedIn ? "Sign Out" : "Sign In"}
            action={authClicked}
          />
        </div>
        {(isOpen) ? <Content component={content}/> : null}
        
      </div>
    </div>
  );
};
export default Nav;

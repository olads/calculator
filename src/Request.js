import Api from "./Api";

const baseURL = "http://localhost:8080"
const TOKEN = "auth"
const header = {"Content-type": "application/json; charset=UTF-8"}
class Request {

static getHeader(){
  if(localStorage.getItem(TOKEN) !== null){
    console.log("Login set!!!" + localStorage.getItem(TOKEN))
   return {
    "Content-type": "application/json; charset=UTF-8",
    "Authorization": localStorage.getItem(TOKEN)
   }
  }
  return header;
}
 static login(name,password) {
    console.log("Making the request now");

    fetch(baseURL+"/api/auth/signin", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        password: password
      }),
      mode: "cors",
      credentials: "include",
      headers: header
    })
      .then(response => response.json())
      .then(result =>{
         console.log(result.message);
        localStorage.setItem(TOKEN,result.message)
       // console.log(jwt.message)
      })
       
      .catch((reason) => {
        console.log(reason);
      });
  }

 static register(username,email,password){
    fetch(baseURL+"/api/auth/signup",{
        method: "POST",
        body: JSON.stringify({
         username:username,
         password:password,
         email:email
     }), 
     mode: "cors",
     credentials: "include",
     headers: Request.getHeader()
      }).then((res) => {
         console.log(res)
     })
     .catch((reason) => {
         console.log(reason)
     })
  }

 static logout(){
      fetch(baseURL+"/api/auth/signout",{
          method: "GET",
          mode: "cors",
          credentials: "include",
          headers: Request.getHeader()
      })
      localStorage.removeItem(TOKEN);
  }

 static solve(expr) {

 // let res = ""
   return fetch(baseURL+"/calculator/calculate",{
       method: "POST",
       headers:  Request.getHeader(),
       body: JSON.stringify({
           message: expr
       }),
       mode: "cors",
      credentials: "include",
   })
   .then(response => response.text())
    .then(result =>{
    //res = result;
    // console.log("Result is ", result);
   return result;
    })
   
    
   // return res;
  }

  static getHistory(){
    
    return fetch(baseURL + "/calculator/history",{
      method: "GET",
      headers: Request.getHeader(),
      mode:"cors",
      credentials:"include"
    }).then(response => response.json())
    .catch(reason => {
      console.log(reason)
    })
 
  }
}
export default Request;



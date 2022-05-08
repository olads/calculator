import React from 'react';
import CLink from "./CLink";
import {useState} from 'react'

const Nav = () => {
    const [signedIn,setSignIn] = useState(false);
    return(
        <div className="nav">
            <div className="desc">
                <CLink to="/me" value="MiGiA"/>
            </div>
            <div className="links">
                <CLink to="/home" value="Home"/>
                <CLink to="/recent" value="Recent"/>
                <CLink to={signedIn ? "/signOut" : "/signIn"} value={signedIn ? "Sign Out" : "Sign In"}/>
            </div>

        </div>
    )
}
export default Nav;
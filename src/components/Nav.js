import React from "react";
import CLink from "./CLink";
import { useState } from "react";
import Content from "./Content";

const Nav = () => {
  const [HOME, HISTORY, AUTH] = [1, 2, 3];
  const [signedIn, setSignIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [tab, setTab] = useState(HISTORY);

  const history = () => {
    return <div>Hello World</div>;
  };

  const changed = () => {};
  const auth = () => {
    return (
      <div className="signin">
        <form method="post">
          <div className="form-input">
            <label htmlFor="username"> Username: </label>
            <input
              id="username"
              placeholder="username"
              type="text"
              onChange={changed}
            />
          </div>
          <div className="form-input">
            <label htmlFor="email"> Email: </label>
            <input
              id="email"
              placeholder="email"
              type="email"
              onChange={changed}
            />
          </div>

          <div className="form-input">
            <label htmlFor="password"> Password: </label>
            <input id="password" type="password" onChange={changed} />
          </div>
          <button id="signup">Sign Up</button>
        </form>
      </div>
    );
  };

  const getContent = () => {
    if (tab === HISTORY || tab === HOME) return history();
    else return auth();
  };

  const historyClicked = () => {
    console.log("History clicked");
    setTab(HISTORY);
    setIsOpen(!isOpen);
  };

  const authClicked = () => {
    console.log("Sign in clicked ");
    setTab(AUTH);
    setIsOpen(!isOpen);
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
        <Content component={getContent()} />
      </div>
    </div>
  );
};
export default Nav;

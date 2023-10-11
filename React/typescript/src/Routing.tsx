//import React from "react";
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import "./Routing.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";

export default function Routing() {
  return (
    <BrowserRouter>
      <center>
        <div>
          <h1>Hello Routing</h1>
          <ul>
            <li>
              <Link to="/One">One</Link>
            </li>
            <li>
              <Link to="/Two">Two</Link>
            </li>
            <li>
              <Link to="/Three">Three</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/One" Component={One} />
            <Route path="/Two" Component={Two} />
            <Route path="/Three" Component={Three} />
          </Routes>
        </div>
      </center>
    </BrowserRouter>
  );
}

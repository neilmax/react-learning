import * as React from "react";
import "./index.css";

interface NavProps {
  siteName: string;
  userName: string;
}

const Nav: React.SFC<NavProps> = props => (
  <div className="nav-container">
    <div className="nav-header">
      <div className="sitename">{props.siteName}</div>
      <div className="username">{props.userName}</div>
    </div>
  </div>
);

export default Nav;

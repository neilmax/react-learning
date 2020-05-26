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
      <div className="subSite">
        <a href="#/homepage">首页</a>
      </div>
      <div className="subSite">
        <a href="#/favorite">用户信息</a>
      </div>
      
      <div className="subSite">
        <a href="#/searchmovie">电影信息</a>
      </div>

      <div className="subSite">
        <a href="#/updatemovie">添加电影</a>
      </div>

      {/* <div className="username">当前用户：{props.userName}</div> */}
    </div>
  </div>
);

export default Nav;

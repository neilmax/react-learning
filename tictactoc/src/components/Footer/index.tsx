import * as React from "react";
import "./index.css";

interface FooterProps {
  copyright: string;
}

const Footer: React.SFC<FooterProps> = props => (
  <div className="footer">© 2019 {props.copyright} All Rights Reserved</div>
);

export default Footer;

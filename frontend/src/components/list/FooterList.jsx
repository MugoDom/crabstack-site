import React from "react";
import { Link } from "react-router-dom";

const footerItems = [
  { itemName: "Term & Conditions", link: "" },
  { itemName: "Privacy Policy", link: "" },
];

const FooterList = () => {
  return (
    <ul>
      {footerItems.map((item, i) => (
        <li key={i}>
          <Link to={item.link}>{item.itemName}</Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterList;

import React from "react";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from "react-pro-sidebar";
import Social from "../../Social";

const menuContent = [
  {
    name: "Home",
    path: "#"
  },
  {
    name: "Portfolio",
    path: "#works"
  },
  {
    name: "Services",
    path: "#services"
  },
  {
    name: "Team",
    path: "#team"
  },
  {
    name: "Blog",
    path: "#blog"
  },
];

const MobileMenu = () => {
  return (
    <>
      <div className="ptf-offcanvas-menu__navigation">
        <ProSidebar>
          <SidebarContent>
            <Menu className="sidebar-menu_wrapper">
              {menuContent.map((item, i) => (
                
                    <MenuItem key={i}>
                      <Link to={item.path}>{item.name}</Link>
                    </MenuItem>  
               
              ))}
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
      {/* End .ptf-offcanvas-menu__navigation */}

      <div className="ptf-offcanvas-menu__footer">
        <p className="ptf-offcanvas-menu__copyright">
          @{new Date().getFullYear()} <span>Crabstack</span>. All Rights Reserved.{" "}
          <br />
          Development by Crabstack
        </p>
        <Social />
      </div>
      {/* End .ptf-offcanvas-menu__footer */}
    </>
  );
};

export default MobileMenu;

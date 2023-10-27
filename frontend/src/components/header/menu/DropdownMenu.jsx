import {useEffect} from "react";
import { NavLink, useLocation } from "react-router-dom";



const DropdownMenu = () => {
  const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split('/');

    useEffect(() => {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1))
            if (elem) {
                elem.scrollIntoView({behavior: 'smooth'})
            }
        } else {
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
        }
        
    }, [location]);
 
  return (
    <ul className="sf-menu sf-menu-onepage">
     
        <li>
          <NavLink to="#">
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="#works">
            <span>Portfolio</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="#services">
            <span>Services</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="#team">
            <span>Team</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="#blog">
            <span>Blog</span>
          </NavLink>
        </li>
    
    </ul>
  );
};

export default DropdownMenu;

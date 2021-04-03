import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import "./NavBar.css";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar_container">
          <Link
            to="/mustang_project"
            className="navbar_logo"
            onClick={closeMobileMenu}
          >
            <img
              src={require("../../images/img/logo_mustang.jpg").default}
              alt=""
            />
            
          </Link>
          <div className="menu_icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? 'nav_menu active' : 'nav_menu' }>
              <li className='nav_items'>
                  <Link to='/mustang_project' className='nav_links' onClick={closeMobileMenu} exact="true">
                    60's
                  </Link>
              </li>
              <li className='nav_items'>
                  <Link to='/mustang_project/70' className='nav_links' onClick={closeMobileMenu}>
                    70's
                  </Link>
              </li>
              <li className='nav_items'>
                  <Link to='/mustang_project/80' className='nav_links' onClick={closeMobileMenu}>
                    80's
                  </Link>
              </li>
              <li className='nav_items'>
                  <Link to='/mustang_project/90' className='nav_links' onClick={closeMobileMenu}>
                    90's
                  </Link>
              </li>
              <li className='nav_items'>
                  <Link to='/mustang_project/00' className='nav_links' onClick={closeMobileMenu}>
                    00's
                  </Link>
              </li>
              <li className='nav_items'>
                  <Link to='/mustang_project/10' className='nav_links' onClick={closeMobileMenu}>
                    10's
                  </Link>
              </li>
              <li className='nav_items'>
                  <Link to='/mustang_project/20' className='nav_links' onClick={closeMobileMenu}>
                    20's
                  </Link>
              </li>
              {/* <li className='nav_items'>
                  <Link to='' className='nav_links_mobile' onClick={closeMobileMenu}>
                    More Projects
                  </Link>
              </li> */}
          </ul>
          {button && <Button buttonStyle='btn--outline'>More Projects</Button>}
        </div>
      </nav>
    </>
  );
};

export default NavBar;

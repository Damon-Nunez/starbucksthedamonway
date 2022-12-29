import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
//Imported react tools to be used in NavBarElements.js
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/menu' activeStyle>
            Menu
          </NavLink>
          <NavLink to='/rewards' activeStyle>
            Rewards
          </NavLink>
          <NavLink to='/giftcards' activeStyle>
            GiftCards
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
        <NavBtn>
            <NavBtnLink to= '/login'> Log In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;
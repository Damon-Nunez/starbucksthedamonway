// import React from 'react';
// import SBLogo from '../images/SBLOGO.webp'

// import {
//   Nav,
//   NavLink,
//   Bars,
//   NavMenu,
//   NavBtn,
//   NavBtnLink,
// } from './NavbarElements';
// //Imported react tools to be used in NavBarElements.js
  
// const Navbar = () => {
//   return (
//     <>
//       <Nav>
//         <Bars />
//         <img  className = "NavBarLogo"src= {SBLogo}>

//         </img>
//         <NavMenu>
//           <NavLink to='/home' activeStyle>
//             Home
//           </NavLink>
//           <NavLink to='/menu' activeStyle>
//             Menu
//           </NavLink>
//           <NavLink to='/rewards' activeStyle>
//             Rewards
//           </NavLink>
//           <NavLink to='/giftcards' activeStyle>
//             GiftCards
//           </NavLink>
//         </NavMenu>
//         <NavBtn>
//           <NavBtnLink to='/signin'>Sign In</NavBtnLink>
//         </NavBtn>
//         <NavBtn>
//             <NavBtnLink to= '/login'> Log In</NavBtnLink>
//         </NavBtn>
//       </Nav>
//     </>
//   );
// };
  
// export default Navbar;
import React from 'react';
import './Navbar.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
function Navbar() {
	return (
		<div className='header'>
			<img
				className='header__logo'
				src='https://upload.wikimedia.org/wikipedia/sco/d/d3/Starbucks_Corporation_Logo_2011.svg'
				alt='starbucksheaderlogo'
			/>

			<div className='header__menu'>
				<div className='header__left'>
					<ul className='menu__items menu__left__upper'>
						<li>menu</li>
						<li>rewards</li>
						<li>gift cards</li>
					</ul>
				</div>

				<div className='header__right'>
					<ul className='menu__items menu__items__right '>
						<li className='findstore'>
							<FaMapMarkerAlt className='marker' /> Find a store
						</li>
						<li className='list__butoons '>Sign in</li>
						<li className='list__butoons join'>Join now</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
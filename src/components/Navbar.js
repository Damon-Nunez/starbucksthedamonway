
import React from 'react';
import './Navbar.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Row,Col,Container } from "react-bootstrap";


function Navbar() {
	return (
		<div className='header'>
			<Link to ="/"><img
				className='header__logo'
				src='https://upload.wikimedia.org/wikipedia/sco/d/d3/Starbucks_Corporation_Logo_2011.svg'
				alt='starbucksheaderlogo'
			/></Link>
			<div className='header__menu'>
				<div className='header__left'>
					<ul className='menu__items menu__left__upper'>
						<li> <Link to="/"> Home </Link></li>
						<li><Link to="/menu"> Menu</Link></li>
						<li><Link to="/rewards"> Rewards</Link></li>
						<li><Link to="/giftcard"> GiftCard</Link></li>
					</ul>
				</div>
			</div>

		</div>
	);
}

export default Navbar;

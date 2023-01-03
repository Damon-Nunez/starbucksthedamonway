
import React from 'react';
import './Navbar.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
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
						<li><Link to="/menu"> Menu</Link></li>
						<li><Link to="/rewards"> Rewards</Link></li>
						<li><Link to="/giftcard"> GiftCard</Link></li>
					</ul>
				</div>

				<div className='header__right'>
					<ul className='menu__items menu__items__right '>
						<a href='https://www.starbucks.com/store-locator?map=39.635307,-101.337891,5z'><li className='findstore'>
							<FaMapMarkerAlt className='marker' /> Find a store
						</li></a>
						<li className='list__butoons '><a href='https://www.starbucks.com/account/signin'>Sign in </a></li>
						<li className='list__butoons join'><a href='https://www.starbucks.com/account/create'>Join now </a></li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
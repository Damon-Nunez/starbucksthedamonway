import React from 'react';
import './BottomFooter.css';
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';

const currentYear = new Date().getFullYear();
function BottomFooter() {
	return (
		<div className='bottomfooter'>
			<hr className='line' />
			<div className='social__icons'>
				<FaFacebook className='icon' />
				<AiFillInstagram className='icon' />
				<AiFillTwitterCircle className='icon' />
			</div>

			<div className='legal'>
				<a href='/'>Privacy Statement</a> <span>|</span>
				<a href='/'>Terms of Use</a>
				<span>|</span>
				<a href='/'>Partners</a>
			</div>
			<a href='/' className='language_change'>Passer au site français</a>
			<p className='copyright'>© {currentYear} Starbucks Coffee Company. All rights reserved.</p>
		</div>
	);
}

export default BottomFooter;
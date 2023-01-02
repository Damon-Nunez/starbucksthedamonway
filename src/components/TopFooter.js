import React from 'react';
import './TopFooter.css';
function TopFooter() {
	return (
		<div className='topfooter'>
			<div className='topfooter__list'>
				<h3 className='listitems__heading'>About Starbucks</h3>
				<ul className='listitems'>
					<li>Our Company</li>
					<li>Our Coffee</li>
					<li>Our Stories and News</li>
					<li>Investor Relations</li>
					<li>Customer Service</li>
				</ul>
			</div>
			<div className='topfooter__list'>
				<h3 className='listitems__heading'>Careers</h3>
				<ul className='listitems'>
					<li>Culture and Values</li>
					<li>Diversity and Inclusion</li>
					<li>Work at Starbucks</li>
					<li>Corporate Careers</li>
					<li>Retail Careers</li>
				</ul>
			</div>

			<div className='topfooter__list'>
				<h3 className='listitems__heading'>Social Impact</h3>
				<ul className='listitems'>
					<li>Overview</li>
					<li>People</li>
					<li>Planet</li>
					<li>Environmental and Social Impact Reporting</li>
				</ul>
			</div>
			<div className='topfooter__list'>
				<h3 className='listitems__heading'>For Business Partners</h3>
				<ul className='listitems'>
					<li>Corporate Gift Card Sales</li>
					<li>Branded Solutions</li>
				</ul>
			</div>
			<div className='topfooter__list'>
				<h3 className='listitems__heading'>Order and Pickup</h3>
				<ul className='listitems'>
					<li>Order on the App</li>
					<li>Order on the Web</li>
					<li>Delivery</li>
					<li>Order and Pickup Options</li>
				</ul>
			</div>
		</div>
	);
}

export default TopFooter;
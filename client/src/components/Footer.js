import React from 'react'
import Logo from '../img/gee.png'
const Footer = () => {
	return (
		<div className='footer'>
			<img  src={Logo} alt="logo" />
			<span>Made with &hearts; and <b>React.js</b>.  </span>
		</div>
	)
}

export default Footer
import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

const NavbarComponent = ({ fetching }) => (
	<div className="navbar">
		<Link to="/signin">SignIn</Link>
		<Link to="/signup">SignUp</Link>
		<Link to="/">Feed</Link>
	</div>
)

NavbarComponent.propTypes = {
	fetching: PropTypes.bool,
}

NavbarComponent.defaultProps = {
	fetching: false,
}

export default NavbarComponent;
import React from 'react';
import classnames from 'classnames'
import PropTypes from 'prop-types';

const NavbarComponent = ({ fetching }) => (
	<div className="feed__navbar">{fetching}</div>
)

NavbarComponent.propTypes = {
	fetching: PropTypes.bool,
}

NavbarComponent.defaultProps = {
	fetching: false,
}

export default NavbarComponent;
import React from 'react';
import classnames from 'classnames'
import PropTypes from 'prop-types';
import Navbarcomponent from './NavbarComponent'

const AppComponent = ({ children }) => (
	<div className="application">
		<Navbarcomponent/>
		{children}
	</div>
)

export default AppComponent;
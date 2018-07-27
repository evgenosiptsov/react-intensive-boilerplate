import React from 'react';
import classnames from 'classnames'
import PropTypes from 'prop-types';

const AppComponent = ({ children }) => (
	<div className="feed">
		{children}
	</div>
)

AppComponent.propTypes = {
	children: PropTypes.arrayOf(PropTypes.any),
}

export default AppComponent;
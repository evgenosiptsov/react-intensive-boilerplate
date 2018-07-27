import React from 'react';
import classnames from 'classnames'
import PropTypes from 'prop-types';

const EditorComponent = ({ id, comment, onPost }) => (
	<div>
		<textarea
			onChange={({target}) => onPost(target.value)}
			style={{height: 200}}
			value={comment}
		>
		</textarea>
	</div>
)

EditorComponent.propTypes = {
	id: PropTypes.number,
	onPost: PropTypes.func.isRequired,
}

EditorComponent.defaultProps = {
	id: null,
}

export default EditorComponent;
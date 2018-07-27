import React from 'react';
import classnames from 'classnames'
import PropTypes from 'prop-types';

const Post = ({ id, date, comment, firstName, lastName, onRemove, onEdit, onToggle }) => (
	<div className="feed__post">
		<div className="feed__post__user">
			<a href="#">{firstName} {lastName}</a>
			<time>{date}</time>
		</div>
		<div className="feed__post__actions">
			<a onClick={onEdit}>
				edit
			</a>
			<a onClick={onRemove}>
				remove
			</a>
		</div>
		<p>
			{comment}
		</p>
		<div className="feed__post__footer">
			<a className="feed__post__footer__like" onClick={onToggle}>
				Like
			</a>
			<div className="feed__post__footer__likes">
				<div className="feed__post__footer__likes__counter">0</div>
			</div>
		</div>
	</div>
)

Post.propTypes = {
	id: PropTypes.string,
	onRemove: PropTypes.func.isRequired,
	onEdit: PropTypes.func.isRequired,
	onToggle: PropTypes.func.isRequired,
}

Post.defaultProps = {
	id: null,
}

export default Post;
import React, { Component } from 'react';
import EditorComponent from '../components/EditorComponent'
import PostComponent from '../components/PostComponent'
import { PropTypes as mobxProtoTypes } from "mobx-react"
import '../../../css/index.css'

class FeedContainer extends Component {
	
	constructor(props) {
		super(props);
		this.props.store.fetchFeed()
	}

	render() {
		const { posts, fetchingFeed, feedError } = this.props.store

		return (
			<div className="feed">
				{ fetchingFeed && "Waiting for a while" }
                { feedError }
				{ !fetchingFeed && !feedError && posts && posts.map(post => <PostComponent onRemove={this.onPostRemove} key={post.id} {...post}/>)}
                { !fetchingFeed && !feedError && !posts && "No posts already"}
			</div>
		);
	}
}

FeedContainer.propTypes = {
	store: mobxProtoTypes.observableObject,
}

export default FeedContainer;

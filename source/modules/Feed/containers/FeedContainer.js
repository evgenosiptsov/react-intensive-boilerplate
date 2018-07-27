import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
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
		const { posts, fetchingFeed, feedError, token } = this.props.store

        if (!token) {
            return (<Redirect to="/signin"/>)
        }

        return (
			<div className="feed">
				{ fetchingFeed && "Waiting for a while" }
				{ feedError && <div className="message--error">{feedError}</div>}
				{ !fetchingFeed && !feedError && posts && posts.map(post => <PostComponent onRemove={this.onPostRemove} key={post.id} {...post}/>)}
                { !fetchingFeed && !feedError && posts && !posts.length && "No posts already"}
			</div>
		);
	}
}

FeedContainer.propTypes = {
	store: mobxProtoTypes.observableObject,
}

export default FeedContainer;

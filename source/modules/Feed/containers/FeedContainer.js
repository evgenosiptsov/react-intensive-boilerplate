import React, { Component } from 'react';
import EditorComponent from '../components/EditorComponent'
import PostComponent from '../components/PostComponent'
import NavbarComponent from '../components/NavbarComponent'
import AppComponent from '../components/AppComponent'
import { PropTypes as mobxProtoTypes } from "mobx-react"
import '../css/index.css'

class FeedContainer extends Component {
	
	constructor(props) {
		super(props);
		this.props.store.fetchFromServer()
	}
	
	onPostEdit(id, comment) {
		console.log(post);
	}
	
	onPostRemove(post) {
		console.log(post);
	}
	
	onPostToggle(id) {
		console.log(post);
	}
	
	render() {
		const { posts, fetching } = this.props.store

		return (
			<AppComponent>
				<NavbarComponent fetching={fetching}/>
				<EditorComponent onPost={(comment) => {alert(comment)}}/>
				{ fetching && "Wait for a while" }
				{ !fetching && posts && posts.map(post => <PostComponent onRemove={this.onPostRemove} key={post.id} {...post}/>)}
			</AppComponent>
		);
	}
}

FeedContainer.propTypes = {
	store: mobxProtoTypes.observableObject,
}

export default FeedContainer;

import axios from 'axios'
import moment from 'moment'
import { observable, action, decorate, reaction } from 'mobx';
import { MAIN_URL } from './REST'

class LectrumFacebookModel {
	
	posts = [];
	total = 0;
	page = 1;
	error = '';
	fetching = false;
	
	constructor() {
		this.subscribeStoreToServer();
	}
	
	subscribeStoreToServer() {
		reaction(
			() => this.posts.map(posts => `${post.id} ${this.fetching}`),
			posts => { console.log('Mock for sync', posts); },
		);
	}
	
	fetchFromServer() {
		this.fetching = true;
		
		return axios.get(MAIN_URL).then(( {data: { data: posts, meta: { total, page} }} ) => {
			this.error = '';
			this.fetching = false;
			this.total = total;
			this.page = page;
			this.posts = posts.map(post => {
				const date = moment.unix(post.created).format("MM/DD/YYYY")
				return { ...post, ...{ date } }
			});
		}).catch(err => {
			this.error = err.message;
			this.fetching = false;
		});
	}

}

export default decorate(LectrumFacebookModel, {
	posts: observable,
	fetching: observable,
	error: observable,
	page: observable,
	total: observable,
	fetchFromServer: action.bound,
});
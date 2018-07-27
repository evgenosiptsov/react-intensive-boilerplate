import axios from 'axios'
import moment from 'moment'
import { observable, action, decorate, reaction } from 'mobx';
import { MAIN_URL, SIGNIN_URL, SIGNUP_URL, GROUP_ID, TOKEN } from './REST'

class LectrumFacebookModel {

	id = "";
	firstName = null;
	lastName = null;
	token = null;
	email = null;
    avatar = null;

    signUpError = null
    signInError = null

	posts = [];
	total = 0;
	page = 1;
    feedError = '';
	fetchingFeed = false;
	
	constructor() {
		this.subscribeStoreToServer();
	}
	
	subscribeStoreToServer() {
		reaction(
			() => this.posts.map(posts => `${post.id} ${this.fetching}`),
			posts => { console.log('Mock for sync', posts); },
		);
	}

    signIn(email, password) {
        const data = { email, password };
        return axios.post(SIGNIN_URL, data).then(( {data: { id, token, firstName, lastName, avatar }} ) => {
            this.id = id;
            this.token = token;
            this.firstName = firstName;
            this.lastName = lastName;
            this.avatar = avatar;
            this.signInError = null;
        }).catch((err) => {
            const { message, response: { data } } = err
            this.signInError = data.message || message;
            this.fetching = false;
        });
    }

	signUp(firstName, lastName, email, password) {
		const data = { firstName, lastName, email, password, invite: TOKEN };
        return axios.post(SIGNUP_URL, data).then(( res ) => {
            const { data: { id, token, firstName, lastName, avatar, email}} = res.data
            this.id = id;
            this.token = token;
            this.firstName = firstName;
            this.lastName = lastName;
            this.avatar = avatar;
            this.email = email;
            this.signUpError = null;
        }).catch((err) => {
            const { message, response: { data } } = err
            this.signUpError = data.message || message;
            this.fetching = false;
        });
	}
	
	fetchFeed() {
		this.fetching = true;
		
		return axios.get(MAIN_URL).then(( {data: { data: posts, meta: { total, page} }} ) => {
			this.feedError = '';
			this.fetchingFeed = false;
			this.total = total;
			this.page = page;
			this.posts = posts.map(post => {
				const date = moment.unix(post.created).format("MM/DD/YYYY")
				return { ...post, ...{ date } }
			});
		}).catch((err) => {
            const { message, response: { data } } = err
            this.feedError = data.message || message;
            this.fetchingFeed = false;
        });
	}

}

export default decorate(LectrumFacebookModel, {
	posts: observable,

	//process errors
    signInError: observable,
    signUpError: observable,
    feedError: observable,

	//user
    id: observable,
    token: observable,
    firstName: observable,
	lastName: observable,
	email: observable,
	password: observable,

	//posts
	page: observable,
	total: observable,

	//process flags
    fetchingFeed: observable,

	//actions
    fetchFeed: action.bound,
    signUp: action.bound,
    signIn: action.bound,
});
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import SigninComponent from '../components/SigninComponent'
import { PropTypes as mobxProtoTypes } from "mobx-react"

import '../../../css/index.css'

class SigninContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        }
    }

    onSignUp() {
        const { email, password } = this.state;
        this.props.store.signIn(email, password);
    }

    render() {
        const { signInError, token } = this.props.store;

        if (token) {
            return (<Redirect to="/"/>)
        }

        return (
            <SigninComponent
                error={signInError}
                onSubmit={() => this.onSignUp()}
                onChangeEmail={(email) => this.setState({email})}
                onChangePassword={(password) => this.setState({password})}
            />
        );
    }
}

SigninContainer.propTypes = {
    store: mobxProtoTypes.observableObject,
}

export default SigninContainer;

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import SignupComponent from '../components/SignupComponent'
import { PropTypes as mobxProtoTypes } from "mobx-react"

import '../../../css/index.css'

class SignupContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        }
    }

    onSignUp() {
        const { firstName, lastName, email, password } = this.state
        this.props.store.signUp(firstName, lastName, email, password)
    }

    render() {
        const { signUpError, token } = this.props.store

        if (token) {
            return (<Redirect to="/"/>)
        }

        return (
            <SignupComponent
                error={signUpError}
                onSubmit={() => this.onSignUp()}
                onChangeFirstName={(firstName) => this.setState({firstName})}
                onChangeLastName={(lastName) => this.setState({lastName})}
                onChangeEmail={(email) => this.setState({email})}
                onChangePassword={(password) => this.setState({password})}
            />
        );
    }
}

SignupContainer.propTypes = {
    store: mobxProtoTypes.observableObject,
}

export default SignupContainer;

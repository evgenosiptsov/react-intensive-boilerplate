import React from 'react';
import classnames from 'classnames'
import PropTypes from 'prop-types';
import '../../../css/index.css'

const SignupComponent = ({ onChangeFirstName, onChangeLastName, onChangeEmail, onChangePassword, onSubmit, error}) => (
    <div className="sign">
        {error && <div className="message--error">{error}</div>}
		<input
            type="text"
            placeholder="First name"
            onChange={({target}) => onChangeFirstName(target.value)}
        >
		</input>
        <input
            type="text"
            placeholder="Last name"
            onChange={({target}) => onChangeLastName(target.value)}
        >
        </input>
        <input
            type="email"
            placeholder="Email"
            onChange={({target}) => onChangeEmail(target.value)}
        >
        </input>
        <input
            type="password"
            placeholder="Password"
            onChange={({target}) => onChangePassword(target.value)}
        >
        </input>
        <button
            onClick={() => onSubmit()}
        >
            Create accoount
        </button>

    </div>
)

SignupComponent.propTypes = {
    onChangeFirstName: PropTypes.func.isRequired,
    onChangeLastName: PropTypes.func.isRequired,
    onChangeEmail: PropTypes.func.isRequired,
    onChangePassword: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
}

export default SignupComponent;
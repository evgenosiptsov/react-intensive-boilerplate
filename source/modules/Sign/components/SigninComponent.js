import React from 'react';
import PropTypes from 'prop-types';
import '../../../css/index.css'

const SigninComponent = ({ onChangeEmail, onChangePassword, onSubmit, error}) => (
    <div className="sign">
        {error && <div className="message--error">{error}</div>}
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
            Login
        </button>

    </div>
)

SigninComponent.propTypes = {
    onChangeEmail: PropTypes.func.isRequired,
    onChangePassword: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
}

export default SigninComponent;
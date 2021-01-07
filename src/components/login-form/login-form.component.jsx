import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import CustomInput from '../custom-input/custom-input.component';

import { LoginFormContainer } from './login-form.styles';

const LoginForm = ({ handleClick }) => (
	<LoginFormContainer>
		<h3>Login with your email address</h3>
		<CustomInput type="email" placeholder={'Enter your email address'} />
		<CustomInput type="password" placeholder={'Enter your password'} />
		<CustomButton handleClick={handleClick} >Login</CustomButton>
		<div className="form-link">
			<span>New user? </span> 
			<Link to="/register">
				<span>Register here</span>
			</Link>
		</div>
	</LoginFormContainer>
);

LoginForm.propTypes = {
	handleClick: PropTypes.func
};

export default LoginForm;
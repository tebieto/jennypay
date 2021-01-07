import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import CustomInput from '../custom-input/custom-input.component';

import { RegisterFormContainer } from './register-form.styles';

const RegisterForm = () => (
	<RegisterFormContainer>
		<h3>Register with your email address</h3>
		<CustomInput type="text" name="full name" placeholder={'Enter your full name'} />
		<CustomInput type="email" name="email" placeholder={'Enter your email address'} />
		<CustomInput type="password" name="password" placeholder={'Enter your password'} />
		<CustomInput type="password" name="confirm" placeholder={'Confirm your password'} />
		<CustomButton>Register</CustomButton>
		<div className="form-link">
			<span>Already registered? </span> 
			<Link to="/login">
				<span>Login here</span>
			</Link>
		</div>
	</RegisterFormContainer>
);

export default RegisterForm;
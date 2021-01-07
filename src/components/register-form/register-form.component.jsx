import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUpStart } from '../../redux/user/user.action';
import CustomButton from '../custom-button/custom-button.component';
import CustomInput from '../custom-input/custom-input.component';
import Proptypes from 'prop-types';

import { RegisterFormContainer } from './register-form.styles';

const RegisterForm = ({ signUpStart }) => {
	
	const [ credentials, setCredentials ] = useState({ name: '', email: '', phone: '', password: '', confirm: '' });

	const handleSubmit = async event => {
		event.preventDefault();
		console.log(credentials);

		const { password } = credentials;
		const { confirm, ...otherDetails } = credentials;

		if(password !== confirm) {
			alert('Passwords don\'t match');
			return;
		}

		try {
			signUpStart(otherDetails);
			setCredentials({ name: '', email: '', phone: '', password: '', confirm: '' });
		} catch(error) {
			console.log('An error occured', error.message);
		}
	};

	const handleChange = event => {
		const { name, value } = event.target;

		setCredentials({ ...credentials, [name]: value  });
	};
	return(
		<RegisterFormContainer>
			<h3>Register with your email address</h3>
			<CustomInput handleChange={handleChange} type="text" name="name" placeholder={'Enter full name'} />
			<CustomInput handleChange={handleChange} type="email" name="email" placeholder={'Enter email address'} />
			<CustomInput handleChange={handleChange} type="number" name="phone" placeholder={'Enter phone number'} />
			<CustomInput handleChange={handleChange} type="password" name="password" placeholder={'Enter password'} />
			<CustomInput handleChange={handleChange} type="password" name="confirm" placeholder={'Confirm password'} />
			<CustomButton handleClick={handleSubmit} >Register</CustomButton>
			<div className="form-link">
				<span>Already registered? </span> 
				<Link to="/login">
					<span>Login here</span>
				</Link>
			</div>
		</RegisterFormContainer>
	);
};
RegisterForm.propTypes = {
	signUpStart: Proptypes.func
};
 
const mapDispatchToProps = dispatch => ({
	signUpStart: credentials => dispatch(signUpStart(credentials))
});

export default connect(null, mapDispatchToProps) (RegisterForm);
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import CustomInput from '../custom-input/custom-input.component';

import { LoginFormContainer } from './login-form.styles';
import { emailSignInStart } from '../../redux/user/user.action';

const LoginForm = () => {
	const [ credentials, setCredentials ] = useState({ email: '', password: '' });

	const handleSubmit = async event => {
		event.preventDefault();

		try {
			emailSignInStart(credentials);
			setCredentials({ email: '', password: '' });
		} catch(error) {
			console.log('An error occured', error.message);
		}
	};

	const handleChange = event => {
		const { name, value } = event.target;

		setCredentials({ ...credentials, [name]: value  });
	};
	return (
		<LoginFormContainer>
			<h3>Login with your email address</h3>
			<CustomInput handleChange={handleChange} name={'email'} type="email" placeholder={'Enter email address'} />
			<CustomInput handleChange={handleChange} name={'password'} type="password" placeholder={'Enter password'} />
			<CustomButton handleClick={handleSubmit} >Login</CustomButton>
			<div className="form-link">
				<span>New user? </span> 
				<Link to="/register">
					<span>Register here</span>
				</Link>
			</div>
		</LoginFormContainer>
	);
};


LoginForm.propTypes = {
	emailSignInStart: PropTypes.func
};
 
const mapDispatchToProps = dispatch => ({
	emailSignInStart: credentials => dispatch(emailSignInStart(credentials))
});

export default connect(null, mapDispatchToProps) (LoginForm);
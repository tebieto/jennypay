import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import CustomInput from '../custom-input/custom-input.component';
import CircularProgress from '@material-ui/core/CircularProgress';

import { LoginFormContainer } from './login-form.styles';
import { emailSignInStart } from '../../redux/user/user.action';
import { validateForm, } from '../../app.utils';
import { selectIsConnecting } from '../../redux/user/user.selector';

const LoginForm = ({ emailSignInStart, isConnecting }) => {
	const defaultCredentials = { email: '', password: '' };
	const [ credentials, setCredentials ] = useState(defaultCredentials);
	const defaultFormError = { email: null, password: null };
	const [ error, setError ] = useState({ ...defaultFormError });

	const { email, password } = credentials;

	const handleSubmit = async event => {
		event.preventDefault();

		const { errorObject, errorMessage } = validateForm(credentials);
		if(errorMessage) return setError(errorObject);
		setError(defaultFormError);

		try {
			emailSignInStart(credentials);
			setCredentials(defaultCredentials);
		} catch(error) {
			console.log('An error occured', error.message);
		}
	};

	const handleChange = event => {
		const { name, value } = event.target;
		setError({ ...error, [name]: null });
		setCredentials({ ...credentials, [name]: value  });
	};
	return (
		<LoginFormContainer>
			<h4>Login with your email address</h4>
			<CustomInput error_message={error.email} onChange={handleChange} value={email} name={'email'} type="email" placeholder={'Enter email address'} />
			<CustomInput error_message={error.password} value={password} onChange={handleChange} name={'password'} type="password" placeholder={'Enter password'} />
			<CustomButton handleClick={handleSubmit} >
				{
					isConnecting ? (<CircularProgress color={'inherit'} size={'16px'}/>) : (<span>Login</span>)
				}
			</CustomButton>
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
	emailSignInStart: PropTypes.func,
	isConnecting: PropTypes.bool
};
 
const mapDispatchToProps = dispatch => ({
	emailSignInStart: credentials => dispatch(emailSignInStart(credentials))
});

const mapStateToProps = createStructuredSelector({
	isConnecting: selectIsConnecting
});

export default connect(mapStateToProps, mapDispatchToProps) (LoginForm);
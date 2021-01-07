import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import { signUpStart } from '../../redux/user/user.action';
import CustomButton from '../custom-button/custom-button.component';
import CustomInput from '../custom-input/custom-input.component';
import CircularProgress from '@material-ui/core/CircularProgress';
import Proptypes from 'prop-types';

import { RegisterFormContainer } from './register-form.styles';
import { validateForm } from '../../app.utils';
import { selectIsConnecting } from '../../redux/user/user.selector';

const RegisterForm = ({ signUpStart, isConnecting }) => {
	const defaultCredentials = { name: '', email: '', phone: '', referal: '',  password: '', confirm: '' };
	const [ credentials, setCredentials ] = useState(defaultCredentials);
	const defaultFormError = { name: null, email: null, phone: null, referal: null,  password: null, confirm: null };
	const [ error, setError ] = useState({ ...defaultFormError });

	const { email, password, name, phone, referal, confirm } = credentials;

	const handleSubmit = async event => {
		event.preventDefault();
		const { confirm, ...otherDetails } = credentials;
		const { errorObject, errorMessage } = validateForm({ confirm, ...otherDetails });
		if(errorMessage) return setError(errorObject);
		setError(defaultFormError);

		try {
			signUpStart(otherDetails);
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
	return(
		<RegisterFormContainer>
			<h4>Register with your email address</h4>
			<CustomInput error_message={error.name} value={name} onChange={handleChange} type="text" name="name" placeholder={'Enter full name'} />
			<CustomInput error_message={error.email} value={email} onChange={handleChange} type="email" name="email" placeholder={'Enter email address'} />
			<CustomInput error_message={error.phone} value={phone} onChange={handleChange} type="number" name="phone" placeholder={'Enter phone number'} />
			<CustomInput error_message={error.referal} value={referal} onChange={handleChange} type="text" name="referal" placeholder={'How did you hear about JennyPay?'} />
			<CustomInput error_message={error.password} value={password} onChange={handleChange} type="password" name="password" placeholder={'Enter password'} />
			<CustomInput error_message={error.confirm} value={confirm} onChange={handleChange} type="password" name="confirm" placeholder={'Confirm password'} />
			<CustomButton handleClick={handleSubmit} >
				{
					isConnecting ? (<CircularProgress color={'inherit'} size={'16px'}/>) : (<span>Register</span>)
				}
			</CustomButton>
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
	signUpStart: Proptypes.func,
	isConnecting: Proptypes.bool
};
 
const mapDispatchToProps = dispatch => ({
	signUpStart: credentials => dispatch(signUpStart(credentials))
});

const mapStateToProps = createStructuredSelector({
	isConnecting: selectIsConnecting
});


export default connect(mapStateToProps, mapDispatchToProps) (RegisterForm);
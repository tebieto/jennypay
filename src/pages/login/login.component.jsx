import React from 'react';
import FormContainer from '../../components/form-container/form-container.component';
import LoginForm from '../../components/login-form/login-form.component';
import { LoginContainer } from './login.styles';

const Login = () => {
	const handleClick = e => {
		e.preventDefault();
	};
	
	return (
		<LoginContainer>
			<FormContainer>
				<div className="form-wrapper">
					<h2 className="form-header">Account Login</h2>
					<LoginForm handleClick={handleClick} />
				</div>
			</FormContainer>
		</LoginContainer>
	);
};

export default Login;
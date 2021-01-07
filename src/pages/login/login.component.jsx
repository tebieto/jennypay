import React from 'react';
import FormContainer from '../../components/form-container/form-container.component';
import LoginForm from '../../components/login-form/login-form.component';
import { LoginContainer } from './login.styles';

const Login = () => {
	return (
		<LoginContainer>
			<FormContainer>
				<div className="form-wrapper">
					<LoginForm/>
				</div>
			</FormContainer>
		</LoginContainer>
	);
};

export default Login;
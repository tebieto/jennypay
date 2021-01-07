import React from 'react';
import FormContainer from '../../components/form-container/form-container.component';
import LoginForm from '../../components/login-form/login-form.component';
import Logo from '../../components/logo/logo.component';
import Mission from '../../components/mission/mission.component';
import { LoginContainer } from './login.styles';

const Login = () => {
	return (
		<LoginContainer>
			<FormContainer>
				<div className="header">
					<Logo />
					<Mission />
				</div>
				<div className="form-wrapper">
					<LoginForm/>
				</div>
			</FormContainer>
		</LoginContainer>
	);
};

export default Login;
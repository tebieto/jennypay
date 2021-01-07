import React from 'react';
import FormContainer from '../../components/form-container/form-container.component';
import Logo from '../../components/logo/logo.component';
import Mission from '../../components/mission/mission.component';
import RegisterForm from '../../components/register-form/register-form.component';

import { RegisterContainer } from './register.styles';

const Register = () => (
	<RegisterContainer>
		<FormContainer>
			<div className="header">
				<Logo />
				<Mission />
			</div>
			<div className="form-wrapper">
				<RegisterForm />
			</div>
		</FormContainer>
	</RegisterContainer>
);

export default Register;
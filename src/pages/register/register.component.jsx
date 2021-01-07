import React from 'react';
import FormContainer from '../../components/form-container/form-container.component';
import RegisterForm from '../../components/register-form/register-form.component';

import { RegisterContainer } from './register.styles';

const Register = () => (
	<RegisterContainer>
		<FormContainer>
			<div className="form-wrapper">
				<RegisterForm />
			</div>
		</FormContainer>
	</RegisterContainer>
);

export default Register;
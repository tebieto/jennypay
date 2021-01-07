import React from 'react';
import PropTypes from 'prop-types';
import { FormContainerStyles } from './form-container.styles';

const FormContainer = ({ children }) => {
	return (
		<FormContainerStyles>
			{children}
		</FormContainerStyles>
	);
};

FormContainer.propTypes = {
	children: PropTypes.array
};


export default FormContainer;
import React from 'react';
import PropTypes from 'prop-types';
import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({ children, handleClick, ...otherProps }) => (
	<CustomButtonContainer {...otherProps}>
		<button onClick={handleClick}>
			{children}
		</button>
	</CustomButtonContainer>
);

CustomButton.propTypes = {
	children: PropTypes.element,
	handleClick: PropTypes.func
};

export default CustomButton;
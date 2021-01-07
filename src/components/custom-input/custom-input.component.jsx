import React, { forwardRef } from 'react';
import { CustomInputContainer } from './custom-input.styles';

import PropTypes from 'prop-types';

const Input  = (otherProps, ref) => {
	const props = { ...otherProps, ref };
	const { label, required, error_message, rows, radios, textarea, checkboxes, editable } = props;
	
	return (
		<CustomInputContainer isError={error_message}>
			{
				label && <label>{`${label} ${required ? '*' : ''}`}</label>
			}
			{
				checkboxes ? checkboxes.map((checkbox, key) =>(
					<div className='checkboxes' key={key}>
						<input
							{...props}
						/>
						<label>{checkbox}</label>
					</div>
				))
					:
					radios ? radios.map(radio =>(
						<div className='radios' key={radio}>
							<input
								{...props}
							/>
							<label>{radio}</label>
						</div>
					))
						:
						rows || textarea ?
							<textarea {...props}></textarea>
							:
							editable ?
								<div className={'editable'} {...props}></div>
								:
								<input {...props} />
			}
			{
				error_message && <span>{error_message}</span>
			}
		</CustomInputContainer>
	);
};

const CustomInput  = forwardRef(Input);


CustomInput.displayName = 'Input';

Input.propTypes = {
	label: PropTypes.string,
	required: PropTypes.bool,
	error_message: PropTypes.string,
	type: PropTypes.string,
	rows: PropTypes.string,
	radios: PropTypes.array,
	checkboxes: PropTypes.array,
	name: PropTypes.string,
	editable: PropTypes.bool,
	textarea: PropTypes.bool
};

export default CustomInput;
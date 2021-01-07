import styled from 'styled-components';
import { blackColor, redColor, secondaryColor, tertiaryColor, transparentColor, whiteColor } from '../../app.utils';

const getErrorColor = ({ isError }) => isError ? redColor :blackColor;

export const CustomInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    input, textarea, .editable {
        margin: 10px 0;
        outline: none;
        border: 2px solid ${transparentColor};
        border-radius: 5px;
        border-color: ${({ isError }) => isError ? redColor : transparentColor};
        background-color: ${({ isError }) => isError ? tertiaryColor : whiteColor};
        padding-left: 10px;
        :focus {
            border-color: ${secondaryColor};
            background-color: ${whiteColor};
        }
    }

    input, .editable {
        height: 30px;
    }

    label {
        color: ${getErrorColor}
    }

    span {
        font-size: 10px;
        color: ${getErrorColor}
    }

    .radios, .checkboxes {
        display: flex;
        align-items: center;
        input {
            width: 20px;
            margin: 0;
            padding: 0;
            cursor: pointer;
        }
        label{
            margin: 1px 0 0 20px;
            font-size: 12px;
        }
    }
`;
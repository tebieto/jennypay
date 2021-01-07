import styled from 'styled-components';
import { primaryColor } from '../../app.utils';
export const CustomButtonContainer = styled.div`
    button {
        min-width: 10px;
        width: auto;
        border-radius: 5px;
        height: 28px;
        letter-spacing: 0.5px;
        line-height: 28px;
        padding: 0 18px 0 18px;
        font-size: 12px;
        background-color: ${({ bgColor })=> bgColor ? bgColor : primaryColor};
        color: white;
        border: none;
        outline: none;
        cursor: pointer;
    }
`;

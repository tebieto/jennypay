import styled from 'styled-components';
import { indianRedColor, primaryColor } from '../../app.utils';

export const LogoContainer = styled.div`
    width: 100%;
    font-family: 'Pirata One', cursive; 
    margin: 10px 0;
    cursor: pointer;
    h2 {
        margin: 0;
        color: ${indianRedColor};
        .pay {
            color: ${primaryColor}
        }
    }
`;

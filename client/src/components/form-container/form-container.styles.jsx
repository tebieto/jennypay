import styled from 'styled-components';
import { primaryColor, secondaryColor, whiteColor, whitesmokeColor } from '../../app.utils';

export const FormContainerStyles = styled.div`
    width: 50%;
    padding: 20px 0;
    -webkit-box-shadow: 0 0 20px ${whitesmokeColor};
    box-shadow: 0 0 20px ${whitesmokeColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h4 {
        margin: 0;
        margin-bottom: 10px;
    }
    .header {
        width: 60%;
    }
    .form-link a{
        text-decoration: none;
        color: ${secondaryColor};
        font-weight: bold;
    }
    .form-wrapper {
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .form-header {
            text-align: left;
            width: 100%;
            margin: 0;
        }
        input {
            height: 40px;
            font-size: 16px;
        }

        button {
            font-size: 16px;
            background-color: ${whiteColor};
            color: ${primaryColor};
            border: 2px solid ${primaryColor};
            font-weight: bold;
            height: 35px !important;
            margin: 20px 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-width: 100px;

            :hover {
                background-color: ${primaryColor};
                color: ${whiteColor};
            }
        }
    }

    @media screen and (max-width: 800px) {
        width: 100%;
        height: 100vh;
        .form-wrapper {width: 90%};
    }
`;
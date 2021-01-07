import styled from 'styled-components';
import { indianRedColor } from '../../app.utils';

export const HomeContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .content {
        display: flex;
        width: 50%;
        height: 50vh;
        justify-content: center;

        .right {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            width: 60%;
            h3 {
                text-align: left;
            }

            button {
                background-color: ${indianRedColor} ;
                font-weight: bold;
                margin: 20px 0;
            }
        }

        .left {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40%;
        }

        img {
            width: 100px;
            height: auto;
        }
        @media screen and (max-width: 800px) {
            height: 100vh;
            width: 100%;

            .right, .left {
                width: 100%;
                justify-content: center;
                align-items: center;

                h3 {
                    text-align: center;
                }


            }

            flex-direction: column;

        }

    }
`;
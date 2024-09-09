import { css } from "@emotion/react";

export const layout =css`

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    

` ;

export const modalContent= css`
background-color: white;
padding: 10px;
border-radius: 8px;
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
overflow-y: auto; /* 내용이 넘칠 경우 스크롤바 표시 */
`;


export const close = css`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
`;

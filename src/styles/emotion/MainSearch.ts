import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 100%;
`;

export const searchContiner = css`
    width: 100%;
    height: 400px;
    border: 1px solid black;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const searchElement =css`
    position: absolute;
    box-sizing: border-box;
    width: 900px;
    height: 100px;
    border: 0px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    & input , button  {
        box-sizing: border-box;
        height: 50px;
        width: 200px;
        margin: 0px;
        margin-right: 15px;
        padding: 0px 20px;
        border: 0px;
        border-radius: 10px;
        background-color: rgb(216, 212, 212);
        font-size: 20px;
        outline: none;
        cursor: pointer;
        &:hover {
            background-color: rgb(201, 199, 199);
        }
    }
`;

export const search = css`
    box-sizing: border-box;
    width: 1000px;
    height: 300px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

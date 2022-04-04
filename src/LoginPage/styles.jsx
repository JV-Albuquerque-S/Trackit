import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    
    a {
        color: #52B6FF;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 13.976px;
        text-decoration: underline;
        margin-top: 25px;
    }
`;

export const Foto = styled.img`
    width: 180px;
    height: 180px;
    margin-top: 68px;
    margin-bottom: 32px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export const Input = styled.input`
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    margin-bottom: 6px;
    padding: 11px;

    ::placeholder {
        font-family: 'Lexend Deca', sans-serif;
    }
`;

export const Button = styled.button`
    width: 303px;
    height: 45px;

    border: none;
    background: #52B6FF;
    border-radius: 4.63636px;

    font-family: 'Lexend Deca';
    font-size: 20.976px;
    color: #FFFFFF;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
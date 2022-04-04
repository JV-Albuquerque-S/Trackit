import styled from "styled-components";

export const Container = styled.main`
    width: 100vw;
    height: 100vh;
    background-color: #E5E5E5;
    margin-top: 70px;
    margin-bottom: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;


    div {
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding-left: 20px;
        padding-right: 20px;
    }

    div > p {
        margin-top: 28px;
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 22.976px;
        color: #126BA5;
    }

    div > button {
        width: 40px;
        height: 35px;
        background: #52B6FF;
        color: white;
        font-size: 26.98px;
        border: none;
        border-radius: 4.63636px;
        margin-top: 22px;
        cursor: pointer;
    }
`

export const CriarHab = styled.article`
    width: 340px;
    height: 180px;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 15px;
`

export const Botao = styled.button`
    width: 30px;
    height: 30px;

    background: #FFFFFF;
    border: none;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    margin-right: 5px;

    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 19.976px;

    color: #DBDBDB;
`

export const Input = styled.input`
    width: 303px;
    height: 45px;

    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    margin-bottom: 8px;

    ::placeholder{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 19.976px;

        color: #DBDBDB;
    }
`

export const Botoes = styled.section`
    width: 180px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 36px;
    margin-left: 120px;
`

export const Cancelar = styled.button`
    width: 69px;
    height: 20px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;

    text-align: center;

    color: #52B6FF;
    border: none;
    background-color: white;
`

export const Salvar = styled.button`
    width: 84px;
    height: 35px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;

    color: white;
    background: #52B6FF;
    border-radius: 4.63636px;
    border: none;
`
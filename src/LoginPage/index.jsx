import axios from "axios";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

import { UserContext } from "../contexts/UserContext";
import { UserInfo } from "../contexts/UserInfo";

import logotipo from "./../assets/Logo.png";
import { Container, Foto, Form, Input, Button } from "./styles";

export default function LoginPage(){
    const [inputs, setInputs] = useState({email:"", password:""});
    const [select, setSelect] = useState(false);

    const navigate = useNavigate();

    const contexto = useContext(UserContext);
    const info = useContext(UserInfo)
    
    function login(event) {
        event.preventDefault();
        setSelect(true);
        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", {email: inputs.email, password: inputs.password});
        request.then(resposta => {
            console.log(resposta.data);
            contexto.setToken(resposta.data.token);
            info.setInfo({...info, imagem: resposta.data.image});
            navigate("/habitos")
        });
        request.catch(err => {
            console.log(err);
            err.response.status === 422 ? alert("Digite um email válido") : err.response.status === 401 ? 
            alert("Email ou senha incorretos, tente novamente") : 
            alert("Houve um erro, por favor tente novamente");
            setSelect(false);
        });
    }

    return(
        <Container>
            <Foto src={logotipo} />
            <Form>
                <Input disabled={select} type="email" placeholder="email" value={inputs.email} onChange={
                    (e) => setInputs({...inputs, email: e.target.value})} required/>
                <Input disabled={select} type="password" placeholder="senha" value={inputs.password} onChange={
                    (e) => setInputs({...inputs, password: e.target.value})} required/>
                <Button disabled={select} type="submit" onClick={login}>{select ? <ThreeDots color="#ffffff" /> : "Entrar"}</Button>
            </Form>
            <Link to={"/cadastro"}>Não tem uma conta? Cadastre-se!</Link>
        </Container>
    )
}
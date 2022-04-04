import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

import logotipo from "./../assets/Logo.png";
import { Container, Foto, Form, Input, Button } from "./styles";

export default function LoginPage({salvarToken}){
    const [inputs, setInputs] = useState({email:"", password:""});
    console.log(inputs.senhpassworda);
    console.log(inputs.email);
    
    function login(event) {
        event.preventDefault();
        console.log(inputs);
        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", {email: inputs.email, password: inputs.password});
        request.then(resposta => {
            console.log(resposta.data);
            salvarToken(resposta.data.token)
        });
        request.catch(err => {
            console.log(err);
            err.response.status === 422 ? alert("Digite um email válido") : err.response.status === 401 ? 
            alert("Email ou senha incorretos, tente novamente") : 
            alert("Houve um erro, por favor tente novamente")
        });
    }

    return(
        <Container>
            <Foto src={logotipo} />
            <Form>
                <Input type="email" placeholder="email" value={inputs.email} onChange={
                    (e) => setInputs({...inputs, email: e.target.value})} required/>
                <Input type="password" placeholder="senha" value={inputs.password} onChange={
                    (e) => setInputs({...inputs, password: e.target.value})} required/>
                <Button type="submit" onClick={login}>Entrar</Button>
            </Form>
            <Link to={"/cadastro"}>Não tem uma conta? Cadastre-se!</Link>
        </Container>
    )
}
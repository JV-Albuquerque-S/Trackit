import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import logotipo from "./../assets/Logo.png"
import { Container, Foto, Form, Input, Button } from "./styles";


export default function LoginPage(){
    const [inputs, setInputs] = useState({email:"", senha:"", nome:"", foto:""});

    const navigate = useNavigate();
    
    function registrar(){
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up';
        const request = axios.post(URL, {
            email: inputs.email,
            name: inputs.nome,
            image: inputs.foto,
            password:inputs.senha
        });
        request.then(resposta => console.log(resposta));
        request.catch(err => console.log(err.response));

        navigate("/");
    }

    return(
        <Container>
            <Foto src={logotipo} />
            <Form onSubmit={registrar} >
                <Input type="email" placeholder="email" value={inputs.email} onChange={
                    (e) => setInputs({...inputs, email: e.target.value})
                } required/>
                <Input type="password" placeholder="senha" value={inputs.senha} onChange={
                    (e) => setInputs({...inputs, senha: e.target.value})
                } required/>
                <Input type="text" placeholder="nome" value={inputs.nome} onChange={
                    (e) => setInputs({...inputs, nome: e.target.value})
                } required/>
                <Input type="url" placeholder="foto" value={inputs.foto} onChange={
                    (e) => setInputs({...inputs, foto: e.target.value})
                } required/>
                <Button type="submit">Entrar</Button>
            </Form>
            <Link to={"/"}>Já tem uma conta? Faça login!</Link>
        </Container>
    )
}
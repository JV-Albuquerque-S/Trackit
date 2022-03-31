import { useState } from "react";
import { Link } from "react-router-dom";

import logotipo from "./../assets/Logo.png"
import { Container, Foto, Form, Input, Button } from "./styles";

export default function LoginPage(){
    const [inputs, setInputs] = useState({email:"", senha:""})
    console.log(inputs.senha)
    console.log(inputs.email)
    return(
        <Container>
            <Foto src={logotipo} />
            <Form>
                <Input type="email" placeholder="email" value={inputs.email} onChange={
                    (e) => setInputs({...inputs, email: e.target.value})} required/>
                <Input type="password" placeholder="senha" value={inputs.senha} onChange={
                    (e) => setInputs({...inputs, senha: e.target.value})} required/>
                <Button type="submit">Entrar</Button>
            </Form>
            <Link to={"/cadastro"}>Não tem uma conta? Cadastre-se!</Link>
        </Container>
    )
}
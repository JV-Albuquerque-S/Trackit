import { useContext, useState, useEffect } from "react"
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

import { UserContext } from "../contexts/UserContext"
import TopBar from "../TopBar";
import Menu from "../Menu";
import { Container, CriarHab, Input, Cancelar, Botao, Botoes, Salvar } from "./styles";

export default function Habitos(){
    const toke = useContext(UserContext);
    const [criar, setCriar] = useState(false);
    const [nomeHab, setNomeHab] = useState("");
    const [dias, setDias] = useState([]);
    const [select, setSelect] = useState(false);
    const [habitos, setHabitos] = useState([]);
    function AbrirCriar(){
        setCriar(true);
    }
    function FecharCriar(){
        setCriar(false);
    }
    function AddDia(diaSem){
        dias.includes(diaSem) ? console.log(dias) : setDias([...dias, diaSem])
    }

    const config = {
        headers: {
            "Authorization": `Bearer ${toke.token}`
        }
    }

    const body = {
        name: nomeHab,
        days: dias
    }

    function PostarHabitos(event){
        event.preventDefault();
        setSelect(true);

        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config);
        request.then(resposta => {
            console.log(resposta);
            setSelect(false);
            setNomeHab("");
            setCriar(false);
        });
        request.catch(err => {
            console.log(err);
            setSelect(false);
        })
    }

    useEffect(() => {
        const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);
        requisicao.then(resposta => {
            console.log(resposta.data);
            setHabitos(resposta.data);
        });
    }, []);
    


    return(
    <>
        <TopBar />
        <Container>
            <div>
                <p>Meus hábitos</p>
                <button onClick={AbrirCriar}>+</button>
            </div>
            
            {criar ? (
                    <CriarHab>
                        <Input type="text" placeholder="nome do hábito" value={nomeHab} onChange={
                            (e) => setNomeHab(e.target.value)
                        } required/>
                        <Botao disabled={select} onClick={() => AddDia(0)}>D</Botao>
                        <Botao disabled={select} onClick={() => AddDia(1)}>S</Botao>
                        <Botao disabled={select} onClick={() => AddDia(2)}>T</Botao>
                        <Botao disabled={select} onClick={() => AddDia(3)}>Q</Botao>
                        <Botao disabled={select} onClick={() => AddDia(4)}>Q</Botao>
                        <Botao disabled={select} onClick={() => AddDia(5)}>S</Botao>
                        <Botao disabled={select} onClick={() => AddDia(6)}>S</Botao>

                        <Botoes>
                            <Cancelar disabled={select} onClick={FecharCriar}>Cancelar</Cancelar>
                            <Salvar disabled={select} type="submit" onClick={PostarHabitos}>{select ? <ThreeDots color="#ffffff" /> : "Salvar"}</Salvar>
                        </Botoes>
                    </CriarHab>
            ) : <></>}
            {habitos.length === 0 ? (
                <p>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
                    começar a trackear!
                </p>
            ) : (
                habitos.map(habito => {
                    return(
                        <div>
                            <p>{habito.name}</p>
                        </div>
                    )
                })
            )}
            
        </Container>
        <Menu />
    </>
    )
}
import { useContext } from "react";
import { UserInfo } from "../contexts/UserInfo";

import { Header, Foto, Perfil } from "./styles";
import logotipo from "./../assets/TrackIt1.svg"

export default function TopBar(){
    const infor = useContext(UserInfo);
    console.log(infor.info.imagem);
    return(
        <Header>
            <Foto src={logotipo} />
            <Perfil src={infor.info.imagem} />
        </Header>
    )
}
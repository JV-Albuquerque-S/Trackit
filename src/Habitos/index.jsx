import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"
import TopBar from "../TopBar";
import Menu from "../Menu";

export default function Habitos(){
    const toke = useContext(UserContext);
    return(
    <>
        <TopBar />
        <p>{toke.token}</p>
        <Menu />
    </>
    )
}
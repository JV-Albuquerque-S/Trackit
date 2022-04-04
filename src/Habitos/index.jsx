import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"
import TopBar from "../TopBar";

export default function Habitos(){
    const toke = useContext(UserContext);
    return(<>
        <TopBar />
        <p>{toke.token}</p>
        </>
    )
}
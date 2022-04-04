import { Route, Routes, BrowserRouter } from "react-router-dom"
import { useState } from "react"

import LoginPage from "./LoginPage"
import RegisterPage from "./RegisterPage"
import Habitos from "./Habitos"
import { UserContext } from "./contexts/UserContext"
import { UserInfo } from "./contexts/UserInfo"
import { Reset } from "./Global-styles/reset"
import { BodyStyle } from "./Global-styles/body"

export default function App(){
    const [token, setToken] = useState(null);
    const [info, setInfo] = useState({imagem:""})

    return(
        <UserContext.Provider value={{token, setToken}}>
        <UserInfo.Provider value={{info, setInfo}}>
            <BrowserRouter>
                <Reset />
                <BodyStyle />
                <Routes>
                    <Route path="/" element={<LoginPage/>} />
                    <Route path="/cadastro" element={<RegisterPage/>} />
                    <Route path="/habitos" element={<Habitos/>} />
                </Routes>
            </BrowserRouter>
        </UserInfo.Provider>
        </UserContext.Provider>
        
    )
}
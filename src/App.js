import { Route, Routes, BrowserRouter } from "react-router-dom"
import { useState } from "react"

import LoginPage from "./LoginPage"
import RegisterPage from "./RegisterPage"

export default function App(){
    const [token, setToken] = useState(null);
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage salvarToken={(token) => setToken(token)}/>} />
                <Route path="/cadastro" element={<RegisterPage/>} />
            </Routes>
        </BrowserRouter>
    )
}
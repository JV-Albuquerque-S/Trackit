import { Route, Routes, BrowserRouter } from "react-router-dom"

import LoginPage from "./LoginPage"
import RegisterPage from "./RegisterPage"

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="/cadastro" element={<RegisterPage/>} />
            </Routes>
        </BrowserRouter>
    )
}
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Absen from "./page/absensi/Index.jsx"
import Home from "./page/dasboard/Index.jsx";
import Tabel from "./page/info_karyawan/Index.jsx"
//tes 
import Rekap from "./page/rekaptulasi_absen/Index.jsx";
import LoginForm from "./components/login/index.jsx";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route element={<Home/>} path="home/" />
    <Route element={<Absen/>} path="absen/" />
    <Route element={<Tabel/>} path="tabel/" />
    <Route element={<Rekap/>} path="rekap/" />
    <Route element={<LoginForm/>} path="login/" />
    </Routes>
    </BrowserRouter>
  )
}

export default App

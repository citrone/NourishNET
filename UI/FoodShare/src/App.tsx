import './App.css'
import Admin from "./components/pages/Admin.tsx";
import {Route, Routes} from "react-router-dom";
import Donate from "./components/pages/Donate.tsx";
import Benefit from "./components/pages/Benefit.tsx";


function App() {
    return (
        <Routes>
            <Route path='/' element={<Admin />} />
            <Route path='/donate' element={<Donate />} />
            <Route path='/benefit' element={<Benefit/>} />
        </Routes>
    )
}

export default App

import { Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Diary from "./components/pages/Diary";
import New from "./components/pages/New";
import Edit from "./components/pages/Edit";
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/new" element={<New/>}/>
        <Route path="/edit" element={<Edit/>}/>
        <Route path="/diary/:id" element={<Diary/>}/>
      </Routes>
    </>
  )
}

export default App

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

import Layout from "@components/Layout";
import DiaryEditor from "@components/DiaryEditor";

import "./App.css";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<DiaryEditor />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;

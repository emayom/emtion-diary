import { Routes, Route } from "react-router-dom";

import Layout from "@components/Layout";
import Home from "@components/pages/Home";
import Edit from "@components/pages/Edit";
import Diary from "@components/pages/Diary";
import Summary from "@components/pages/Summary";

import DiaryEditor from "@components/DiaryEditor";

import "./App.css";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<DiaryEditor />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;

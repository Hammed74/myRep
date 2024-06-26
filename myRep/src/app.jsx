import Landing from "./views/Landing";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Leads";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState();

  return (
    <Routes>
      <Route path="/" element={<Landing name={name} setName={setName} />} />
      <Route path="/home" element={<Home name={name} />} />
    </Routes>
  );
}

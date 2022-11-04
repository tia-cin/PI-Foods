import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Home, Detail, Create } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/country/:id" element={<Detail />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

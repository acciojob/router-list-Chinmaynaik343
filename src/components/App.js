
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemList from "./ItemList.js";
import ItemDetail from "./ItemDetail.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/items/:id" element={<ItemDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

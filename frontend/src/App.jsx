import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import api from "./api/axiosConfig";

import Layout from "./components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/home/Home";
import Register from "@/components/Register.jsx";
function App() {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    try {
      const response = await api.get("/api/v1/items");
      console.log(response.data);
      setItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home items={items} />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;


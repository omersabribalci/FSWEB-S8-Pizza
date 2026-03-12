import "./App.css";
import OrderPage from "./pages/OrderPage";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Success from "./pages/Success";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}

export default App;

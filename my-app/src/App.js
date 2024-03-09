import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import List from "./pages/Home/list/List";
import Hotel from "./pages/Home/Hotel/Hotel";
import Login from "./pages/login/Login";
import List2 from "./pages/Home/list2/List2"
import Register from "./pages/register/Register";
import { userInputs } from "./formSource";
import RentCar from "./pages/RentCar/RentCar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List/>} />
        <Route path="/type" element={<List2 />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register inputs={userInputs}/>}/>
        <Route path="/rentcar" element={<RentCar/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import New from "./pages/new/New.jsx";
import List from "./pages/list/List.jsx";
import Single from "./pages/single/Single.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss"
import { useContext } from "react";
import { AuthContext } from "./context/authContext.js";


function App() {
  //truoc khi thuc hien in ra trang se xac minh xem nguoi dung da dang nhap hay chua
  const ProtectedRoute = ({children})=>{
    const {user} = useContext(AuthContext);

    if(!user){
      return <Navigate to="/login"/>
    }

    return children;
  }

  return (
    <div className="app dark">
      <BrowserRouter>
        <Routes>
          <Route path="/">
          <Route path="login" element={<Login />} />
            <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="users">
              <Route index element={<ProtectedRoute><List /></ProtectedRoute>} />
              <Route path=":userId" element={<ProtectedRoute><Single /></ProtectedRoute>} />
              <Route path="new" element={<ProtectedRoute><New inputs={userInputs} title="Add New User" /></ProtectedRoute>} />
            </Route>
            <Route path="products">
              <Route index element={<ProtectedRoute><List /></ProtectedRoute>} />
              <Route path=":productId" element={<ProtectedRoute><Single /></ProtectedRoute>} />
              <Route path="new" element={<ProtectedRoute><New inputs={productInputs} title="Add New Product"/></ProtectedRoute>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

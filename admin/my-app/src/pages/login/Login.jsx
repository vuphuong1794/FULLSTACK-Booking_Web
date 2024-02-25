import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.scss";
import { AuthContext } from "../../context/authContext.js";
import { useContext, useState } from "react";

const Login = () => {
  const { user, loading, error, dispatch } = useContext(AuthContext);

  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {

      const res = await axios.post(
        "http://localhost:8800/api/auth/login",
        credentials
      );
        
      //kiem tra tai khoan co phai la admin khong
      //neu phai thi se cho phep truy cap 
      if(res.data.isAdmin){
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
        navigate("/");
      }
      else{
        dispatch({ type: "LOGIN_FAILED", payload: {message: "You Are Not Admin!"} });
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILED", payload: err.response.data });
    }
  };

  console.log(user);
  return (
    <div className="login">
      <div className="loginContainer">
        <input
          type="text"
          className="loginInput"
          onChange={handleChange}
          placeholder="username"
          id="username"
        />
        <input
          type="text"
          className="loginInput"
          onChange={handleChange}
          placeholder="password"
          id="password"
        />
        <button disabled={loading} onClick={handleClick} className="loginBtn">
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;

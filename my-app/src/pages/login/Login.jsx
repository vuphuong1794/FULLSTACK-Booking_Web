import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { AuthContext } from "../../context/authContext";
import { useContext, useState } from "react";

const Login = () => {
  const { user, loading, error, dispatch } = useContext(AuthContext);

  const [credential, setCredential] = useState({
    username: undefined,
    password: undefined,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredential((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClicked = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("auth/login", credential);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILED", payload: err.respone.data });
    }
  };

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
        <button disabled={loading} onClick={handleClicked} className="lButton">
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;

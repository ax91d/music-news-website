import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import axios from "axios";
import "./login.css";
import {AnimatePresence, motion } from "framer-motion";


export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching} = useContext(Context)

  const handleSubmit = async (e)=>{
    e.preventDefault();
    dispatch({type:"LOGIN_START"})
    try{
      const res = await axios.post("/auth/login",{
        username:userRef.current.value,
        password:passwordRef.current.value,
      })
      dispatch({type:"LOGIN_SUCCESS", payload:res.data});
    } catch(e) {
      dispatch({type:"LOGIN_FAILURE"});
    }
  }

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password"
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
      </form>
      <button className="loginRegisterButton">
        <Link to="/register" className="link">REGISTER</Link>
      </button>
    </div>
    </motion.div>
  );
}

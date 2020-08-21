import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Router from "next/router";

import { ToastContainer, toast } from "react-toastify";
import { API } from "../config.js";
import Layout from "../components/Layout";
import LoginBack from "../components/backgrounds/LoginBack";
import classes from "./login.module.css";

const Login = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    error: "",
    success: "",
    buttonText: "Login",
  });

  const { email, password, error, success, buttonText } = formState;

  useEffect(() => {
    {
      success &&
        toast.success(`${success}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
    }
    {
      error &&
        toast.error(`${error}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
    }
  }, [success, error]);

  const handleFormInputChange = (name) => (e) => {
    setFormState({
      ...formState,
      [name]: e.target.value,
      error: "",
      success: "",
    });
  };

  const handleFormSubmit = async (e) => {
    setFormState({ ...formState, buttonText: "Logging in!" });
    e.preventDefault();
    try {
      const response = await axios.post(`${API}/login`, {
        email,
        password,
      });
      setFormState({
        ...formState,
        success: "You Are Logged In",
        buttonText: "Welcome!",
      });
      console.log(response);
    } catch (error) {
      console.log(error);
      setFormState({
        ...formState,
        buttonText: "Login",
        error: error.response.data.error,
      });
    }
  };

  return (
    <Layout>
      <LoginBack className={classes.loginBG} />
      <div className={classes.loginLayout}>
        <form onSubmit={handleFormSubmit} className={classes.loginForm}>
          <h2>Login Here</h2>
          <input
            value={email}
            onChange={handleFormInputChange("email")}
            type="email"
            className="form-control"
            name="email"
          />
          <input
            value={password}
            onChange={handleFormInputChange("password")}
            type="password"
            className="form-control"
            name="password"
          />
          <button className="btn mx-auto mt-4 btn-outline-warning">
            {buttonText}
          </button>
        </form>
      </div>
      <ToastContainer />
    </Layout>
  );
};

export default Login;

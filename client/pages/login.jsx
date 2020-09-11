import { useState, useEffect } from "react"
import axios from "axios"
import Router from "next/router"
import Message from "../components/hooks/Message"

import { ToastContainer, toast } from "react-toastify"
import { API } from "../config.js"
import Layout from "../components/Layout"
import classes from "./login.module.css"
import { authenticateUser, isUserAuthenticated } from "../utils/helpers"
import Link from "next/link"

const Login = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    error: "",
    success: "",
    buttonText: "Login",
  })

  const { email, password, error, success, buttonText } = formState

  useEffect(() => {
    isUserAuthenticated() && Router.push("/")
  }, [])

  const handleFormInputChange = name => e => {
    setFormState({
      ...formState,
      [name]: e.target.value,
      error: "",
      success: "",
    })
  }

  const handleFormSubmit = async e => {
    setFormState({ ...formState, buttonText: "Logging in!" })
    e.preventDefault()
    try {
      const response = await axios.post(`${API}/login`, {
        email,
        password,
      })
      authenticateUser(response, () => Router.push("/"))
      setFormState({
        ...formState,
        success: "You Are Logged In",
        buttonText: "Welcome!",
      })
    } catch (error) {
      console.log(error)
      setFormState({
        ...formState,
        buttonText: "Login",
        error: error.response.data.error,
      })
    }
  }

  const loginForm = () => {
    return (
      <form
        onSubmit={handleFormSubmit}
        className={`${classes.loginForm} col-md-6 col-lg-12 mt-5`}>
        <h2>Login Here</h2>
        <input
          value={email}
          onChange={handleFormInputChange("email")}
          type='email'
          className='form-control'
          name='email'
        />
        <input
          value={password}
          onChange={handleFormInputChange("password")}
          type='password'
          className='form-control'
          name='password'
        />
        <button className='btn mx-auto mt-4 btn-outline-warning'>
          {buttonText}
        </button>
      </form>
    )
  }

  return (
    <Layout>
      <div className={classes.loginLayout}>
        {loginForm()}
        <Link href='auth/password/forgot'>
          <a className='text-white bg-dark p-1 br-5 float-right mt-4 mr-2'>
            Forgot Password?
          </a>
        </Link>
      </div>
      <Message success={success} error={error} />
    </Layout>
  )
}

export default Login

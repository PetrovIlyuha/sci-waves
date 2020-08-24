import { useState, useEffect } from "react"
import axios from "axios"
import Layout from "../components/Layout"
import { ToastContainer, toast } from "react-toastify"
import { API } from "../config.js"
import { isUserAuthenticated } from "../utils/helpers"
import Router from "next/router"

const Register = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: "",
    buttonText: "Register",
  })

  const { name, email, password, error, success, buttonText } = formState

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
        })
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
        })
    }
  }, [success, error])

  useEffect(() => {
    isUserAuthenticated() && Router.push("/")
  }, [])

  const handleFormInputChange = (name) => (e) => {
    setFormState({
      ...formState,
      [name]: e.target.value,
      error: "",
      success: "",
      buttonText: "Register",
    })
  }

  const handleFormSubmit = async (e) => {
    setFormState({ ...formState, buttonText: "Sending!" })
    e.preventDefault()
    try {
      const response = await axios.post(`${API}/register`, {
        name,
        email,
        password,
      })
      setFormState({
        ...formState,
        name: "",
        email: "",
        password: "",
        buttonText: "Submitted",
        success: response.data.message,
      })
    } catch (error) {
      console.log(error)
      setFormState({ ...formState, error: error.response.data.error })
    }
  }
  const registerForm = () => (
    <form onSubmit={handleFormSubmit}>
      <h2>Register</h2>
      <div className='form-group'>
        <label htmlFor='name'>Username</label>
        <input
          onChange={handleFormInputChange("name")}
          type='text'
          value={name}
          id='name'
          className='form-control'
          placeholder='Ironman...'
        />
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input
          onChange={handleFormInputChange("email")}
          type='email'
          value={email}
          id='email'
          className='form-control'
          placeholder='warrior@galaxy.com'
        />
      </div>
      <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          value={password}
          id='password'
          className='form-control'
          onChange={handleFormInputChange("password")}
        />
      </div>
      <div className='form-group'>
        <button className='btn mx-auto'>{buttonText}</button>
      </div>
    </form>
  )

  return (
    <Layout>
      <div className='register-overlay col-md-6 col-lg-6 offset-lg-3 mt-5'>
        {registerForm()}
      </div>
      <ToastContainer />
    </Layout>
  )
}

export default Register

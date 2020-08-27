import { useState, useEffect } from "react"
import axios from "axios"
import Router from "next/router"

import { ToastContainer, toast } from "react-toastify"
import { API } from "../../../config.js"
import Layout from "../../../components/Layout"

const ForgotPassword = () => {
  const [userState, setUserState] = useState({
    email: "",
    buttonText: "Forgot Password",
    success: "",
    error: "",
  })
  const { email, buttonText, success, error } = userState

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

  const handleChange = e => {
    setUserState({ ...userState, email: e.target.value })
  }
  const handleSubmit = async e => {
    e.preventDefault()
    setUserState({ ...userState, buttonText: "Sending..." })
    try {
      const response = await axios.put(`${API}/forgot-password`, { email })
      setUserState({
        ...userState,
        email: "",
        buttonText: "Check Email",
        success: response.data.message,
      })
      console.log(response)
    } catch (err) {
      console.log(err)
      setUserState({
        ...userState,
        email: "",
        buttonText: "Try Again",
        error: err.response.data.error,
      })
    }
  }

  return (
    <Layout>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <h1 className='text-center' style={{ color: "blue" }}>
            Reset Your Password
          </h1>
          <br />
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label className='text-success' htmlFor='email'>
                Your email
              </label>
              <input
                type='email'
                name='email'
                className='form-control'
                placeholder='What email will be receiving reset password link?'
                onChange={handleChange}
                value={email}
                required
              />
            </div>
            <div>
              <button className='btn btn-outline-danger'>{buttonText}</button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </Layout>
  )
}

export default ForgotPassword

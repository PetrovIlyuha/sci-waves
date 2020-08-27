import { useState, useEffect } from "react"
import axios from "axios"
import Router, { withRouter } from "next/router"
import jwt from "jsonwebtoken"

import { ToastContainer, toast } from "react-toastify"
import { API } from "../../../../config.js"
import Layout from "../../../../components/Layout"

const ResetPassword = ({ router }) => {
  const [userState, setUserState] = useState({
    name: "",
    token: "",
    newPassword: "",
    buttonText: "Save Password",
    success: "",
    error: "",
  })
  const { name, token, newPassword, buttonText, success, error } = userState

  useEffect(() => {
    const decodedUserData = jwt.decode(router.query.token)
    if (decodedUserData) {
      setUserState({
        ...userState,
        name: decodedUserData.name,
        token: router.query.token,
      })
    }
  }, [])
  console.log(token)

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
    setUserState({ ...userState, newPassword: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setUserState({ ...userState, buttonText: "Sending..." })
    try {
      const response = await axios.put(`${API}/reset-password`, {
        resetPasswordLink: token,
        newPassword,
      })
      setUserState({
        ...userState,
        buttonText: "Password Saved",
        success: response.data.message,
      })
      console.log(response)
    } catch (err) {
      console.log(err)
      setUserState({
        ...userState,
        buttonText: "Go to Login",
        error: err.response.data.error,
      })
    }
  }

  return (
    <Layout>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <h2 className='text-center' style={{ color: "blue" }}>
            Hey, {name}, make it formidable!
          </h2>
          <br />
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label className='text-success' htmlFor='newPassword'>
                Your new password
              </label>
              <input
                type='password'
                name='newPassword'
                className='form-control'
                placeholder='Better be hard-to-predict numbers, letters and symbols combo'
                onChange={handleChange}
                value={newPassword}
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

export default withRouter(ResetPassword)

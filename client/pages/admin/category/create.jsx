import React, { useState, useEffect } from "react"
import Layout from "../../../components/Layout"
import { ToastContainer, toast } from "react-toastify"

import axios from "axios"
import { API } from "../../../config"
import withAdmin from "../../withAdmin"

const CreateCategory = ({ user, token }) => {
  const [state, setState] = useState({
    name: "",
    content: "",
    success: "",
    error: "",
    formData: process.browser && new FormData(),
    buttonText: "Create",
    imageUploadText: "Upload Image",
  })

  const {
    name,
    content,
    success,
    error,
    formData,
    buttonText,
    imageUploadText,
  } = state

  useEffect(() => {}, [])
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

  console.log("state", state)

  const handleFormInputChange = name => e => {
    const value = name === "image" ? e.target.files[0] : e.target.value
    const imageName = name === "image" ? e.target.files[0].name : "Upload Image"
    formData.set(name, value)
    setState({
      ...state,
      [name]: value,
      error: "",
      success: "",
      imageUploadText: imageName,
    })
  }

  const handleFormSubmit = async e => {
    setState({ ...state, buttonText: "Saving..." })
    e.preventDefault()
    console.log("formData", ...formData)
    try {
      const response = await axios.post(`${API}/category`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      console.log("Category create response", response)
      setState({
        ...state,
        name: "",
        success: "Category was created! 🎉",
        content: "",
        formData: new FormData(),
        buttonText: "Created",
        imageUploadText: "Upload Image",
      })
    } catch (error) {
      console.log("Category create err", err)
      setState({
        ...state,
        name: "",
        buttonText: "Create",
        error: error.response.data.err,
      })
    }
  }
  return (
    <Layout>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <h1>Create Category</h1>
          <br />
          <form onSubmit={handleFormSubmit}>
            <div className='form-group'>
              <label htmlFor='title' className='text-muted'>
                Category Name
              </label>
              <input
                type='text'
                name='title'
                className='form-control'
                value={name}
                onChange={handleFormInputChange("name")}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='content' className='text-muted'>
                Category Description
              </label>
              <textarea
                type='text'
                value={content}
                name='content'
                className='form-control'
                onChange={handleFormInputChange("content")}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='image' className='btn btn-outline-secondary'>
                {imageUploadText}
                <input
                  type='file'
                  name='image'
                  id='image'
                  accept='image/*'
                  onChange={handleFormInputChange("image")}
                  required
                  hidden
                />
              </label>
            </div>
            <div>
              <button className='btn btn-outline-primary'>{buttonText}</button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </Layout>
  )
}

export default withAdmin(CreateCategory)

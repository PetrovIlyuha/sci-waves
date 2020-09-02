import React, { useState, useEffect } from "react"
import Layout from "../../../components/Layout"
import RichText from "../../../components/functional/RichText"
import { ToastContainer, toast } from "react-toastify"

import axios from "axios"
import Resizer from "react-image-file-resizer"
import { API } from "../../../config"
import withAdmin from "../../withAdmin"

const CreateCategory = ({ user, token }) => {
  const [state, setState] = useState({
    name: "",
    success: "",
    error: "",
    buttonText: "Create",
    imageUploadText: "Upload Image",
    image: "",
  })
  const [content, setContent] = useState("")
  const { name, success, error, image, buttonText, imageUploadText } = state

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

  const handleContentChange = e => {
    setContent(e)
    setState({ ...state, success: "", error: "" })
  }

  const handleFormInputChange = name => e => {
    setState({
      ...state,
      [name]: e.target.value,
      error: "",
      success: "",
      // imageUploadText: imageName,
    })
  }

  const handleImage = event => {
    console.log(event.target.files[0])
    var fileInput = false
    if (event.target.files[0]) {
      fileInput = true
    }
    if (fileInput) {
      Resizer.imageFileResizer(
        event.target.files[0],
        300,
        300,
        "JPEG",
        100,
        0,
        uri => {
          setState({ ...state, image: uri })
        },
        "base64",
        200,
        200
      )
    }
  }

  const handleFormSubmit = async e => {
    setState({ ...state, buttonText: "Saving..." })
    e.preventDefault()
    try {
      const response = await axios.post(
        `${API}/category`,
        { name, content, image },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
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
              <RichText
                content={content}
                handleContentChange={handleContentChange}
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
                  onChange={handleImage}
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

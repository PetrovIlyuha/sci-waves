import React, { useState, useEffect } from "react"
import Layout from "../../../components/Layout"
import RichText from "../../../components/functional/RichText"
import { ToastContainer, toast } from "react-toastify"
import Message from "../../../components/hooks/Message"

import axios from "axios"
import Resizer from "react-image-file-resizer"
import { API } from "../../../config"
import withAdmin from "../../withAdmin"

const UpdateCategory = ({ oldCategory, token }) => {
  const {
    name: oldName,
    content: oldContent,
    image: { url },
    slug,
  } = oldCategory
  console.log(slug)
  const [state, setState] = useState({
    name: oldName,
    success: "",
    error: "",
    buttonText: "Update",
    imagePreview: url,
    imageUploadText: "Update Image",
    image: "",
  })
  const [content, setContent] = useState(oldContent)
  const {
    name,
    success,
    error,
    image,
    imagePreview,
    buttonText,
    imageUploadText,
  } = state

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
    console.log("Form submission")
    setState({ ...state, buttonText: "Updating..." })
    e.preventDefault()
    try {
      const response = await axios.put(
        `${API}/category/${slug}`,
        { name, content, image },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      console.log("Category update response", response)
      setState({
        ...state,
        success: "Category was updated! 🎉",
        buttonText: "Updated",
        imageUploadText: "Update Image",
        imagePreview: response.data.image.url,
      })
    } catch (error) {
      console.log("Category update err", error)
      setState({
        ...state,
        name: "",
        buttonText: "Create",
        error: "Something wrong with image update...",
      })
    }
  }

  return (
    <Layout>
      <div className='row mt-5'>
        <div className='col-md-6 offset-md-3'>
          <h1>Update Category</h1>
          <br />
          <form onSubmit={handleFormSubmit}>
            <div className='form-group'>
              <label htmlFor='title'>Category Name</label>
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
              <label htmlFor='content'>Category Description</label>
              <RichText
                content={content}
                handleContentChange={handleContentChange}
              />
            </div>
            <div className='form-group'>
              <span>
                <img
                  className='mb-4'
                  src={imagePreview}
                  alt='image preview box'
                  style={{
                    height: "100px",
                    borderRadius: "5px",
                    border: "3px solid blue",
                    boxShadow: "2px 2px 8px rgba(0,0,0,0.4)",
                  }}
                />
              </span>
              <label htmlFor='image' className='btn btn-outline-secondary ml-5'>
                {imageUploadText}
                <input
                  type='file'
                  name='image'
                  id='image'
                  accept='image/*'
                  onChange={handleImage}
                  hidden
                />
              </label>
            </div>
            <div>
              <button type='submit' className='btn btn-primary btn-block'>
                {buttonText}
              </button>
            </div>
          </form>
        </div>
        <Message success={success} error={error} />
      </div>
      <ToastContainer />
    </Layout>
  )
}

UpdateCategory.getInitialProps = async ({ req, query, token }) => {
  const response = await axios.post(`${API}/category/${query.slug}`)
  return { oldCategory: response.data.category, token }
}

export default withAdmin(UpdateCategory)

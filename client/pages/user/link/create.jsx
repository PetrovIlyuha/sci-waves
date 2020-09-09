import React, { useState, useEffect } from "react"
import Layout from "../../../components/Layout"
import axios from "axios"
import { API } from "../../../config"
import Message from "../../../components/hooks/Message"
import { getCookie, isUserAuthenticated } from "../../../utils/helpers"

const CreateLink = ({ token }) => {
  const [state, setState] = useState({
    title: "",
    url: "",
    categories: [],
    loadedCategories: [],
    type: "",
    format: "",
    success: "",
    error: "",
  })
  const {
    title,
    url,
    categories,
    loadedCategories,
    type,
    format,
    success,
    error,
  } = state
  useEffect(() => {
    loadCategories()
  }, [success])

  const loadCategories = async () => {
    const response = await axios.get(`${API}/categories`)
    setState({ ...state, loadedCategories: response.data })
  }

  const hangleNameChange = e => {
    setState({ ...state, title: e.target.value, error: "", success: "" })
  }
  const hangleURLChange = e => {
    setState({ ...state, url: e.target.value, error: "", success: "" })
  }

  const handleCreateResourceSubmit = async e => {
    e.preventDefault()
    console.table({ title, url, categories, type, format })
    try {
      const response = await axios.post(
        `${API}/link`,
        {
          title,
          url,
          categories,
          type,
          format,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      setState({
        ...state,
        title: "",
        url: "",
        success: "Resource Link was Created!",
        error: "",
        loadedCategories: [],
        categories: [],
        type: "",
        format: "",
      })
    } catch (err) {
      console.log(`Error from creation link page :  ${err}`)
      setState({ ...state, error: err.response.data.error })
    }
  }

  console.log(state)

  const handleCategoryToggle = categoryID => () => {
    const candidateCategory = categories.indexOf(categoryID)
    const allCategories = [...categories]
    if (candidateCategory === -1) {
      allCategories.push(categoryID)
    } else {
      allCategories.splice(candidateCategory, 1)
    }
    setState({ ...state, categories: allCategories })
  }

  const handleTypeCheck = e => {
    setState({ ...state, type: e.target.value, success: "", error: "" })
  }

  const handleFormatCheck = e => {
    setState({ ...state, format: e.target.value, success: "", error: "" })
  }

  return (
    <Layout>
      <Message success={success} error={error} />
      <div className='row' style={{ marginTop: 100 }}>
        <div className='col-md-12'>
          <h2 className=' text-center'>Create New Resource Link</h2>
          <br />
          <div className='row'>
            <div className='col-md-4 '>
              <h3>Categories</h3>
              <div className='form-group mr-3' style={{ overflowY: "hidden" }}>
                <ul
                  style={{
                    maxHeight: "120px",
                    overflowY: "scroll",
                    boxSizing: "content-box",
                  }}>
                  {loadedCategories &&
                    loadedCategories.map((category, index) => (
                      <li className='list-unstyled' key={index}>
                        <input
                          type='checkbox'
                          onChange={handleCategoryToggle(category._id)}
                          className='mr-2'
                          style={{ padding: 10 }}
                        />
                        <label className='form-check-label'>
                          {category.name}
                        </label>
                      </li>
                    ))}
                </ul>
              </div>
              <div className='form-group'>
                <h3>Type</h3>
                <div className='form-check ml-5'>
                  <label className='form-check-label'>
                    <input
                      type='radio'
                      onChange={handleTypeCheck}
                      checked={type === "free"}
                      value='free'
                      name='type'
                      className='form-check-input'
                    />
                    Free
                  </label>
                </div>
                <div className='form-check ml-5'>
                  <label className='form-check-label'>
                    <input
                      type='radio'
                      onChange={handleTypeCheck}
                      checked={type === "paid"}
                      value='paid'
                      name='type'
                      className='form-check-input'
                    />
                    Paid
                  </label>
                </div>
              </div>
              <div className='form-group'>
                <h3>Format</h3>
                <div className='form-check ml-5'>
                  <label className='form-check-label'>
                    <input
                      type='radio'
                      onChange={handleFormatCheck}
                      checked={format === "video"}
                      value='video'
                      name='format'
                      className='form-check-input'
                    />
                    Video
                  </label>
                </div>
                <div className='form-check ml-5'>
                  <label className='form-check-label'>
                    <input
                      type='radio'
                      onChange={handleFormatCheck}
                      checked={format === "audio"}
                      value='audio'
                      name='format'
                      className='form-check-input'
                    />
                    Audio
                  </label>
                </div>
                <div className='form-check ml-5'>
                  <label className='form-check-label'>
                    <input
                      type='radio'
                      onChange={handleFormatCheck}
                      checked={format === "book"}
                      value='book'
                      name='format'
                      className='form-check-input'
                    />
                    Book
                  </label>
                </div>
              </div>
            </div>
            <div className='col-md-8'>
              <h3 className=''>Resource Details</h3>
              <form onSubmit={handleCreateResourceSubmit}>
                <div className='form-group'>
                  <label className=''>Name</label>
                  <input
                    type='text'
                    className='form-control'
                    onChange={hangleNameChange}
                    value={title}
                  />
                </div>
                <div className='form-group'>
                  <label className=''>URL</label>
                  <input
                    type='url'
                    className='form-control'
                    onChange={hangleURLChange}
                    value={url}
                  />
                </div>
                <button
                  className='btn btn-primary mt-3'
                  style={{
                    cursor: "pointer",
                    width: "200px",
                    fontSize: "1.3rem",
                  }}
                  disabled={!token}>
                  {isUserAuthenticated() || token
                    ? "Submit"
                    : "Login to create"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

CreateLink.getInitialProps = ({ req }) => {
  const token = getCookie("token", req)
  return { token }
}

export default CreateLink

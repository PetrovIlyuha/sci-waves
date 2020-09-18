import { useState, useEffect } from "react"
import axios from "axios"
import Layout from "../components/Layout"
import Message from "../components/hooks/Message"
import { API } from "../config.js"
import { isUserAuthenticated } from "../utils/helpers"
import Router from "next/router"

const Register = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    loadedCategories: [],
    categories: [],
    success: "",
    buttonText: "Register",
  })

  const {
    name,
    email,
    password,
    error,
    loadedCategories,
    categories,
    success,
    buttonText,
  } = formState

  useEffect(() => {
    loadCategories()
  }, [])

  useEffect(() => {
    isUserAuthenticated() && Router.push("/")
  }, [success])

  const loadCategories = async () => {
    const response = await axios.get(`${API}/categories`)
    setFormState({ ...formState, loadedCategories: response.data })
  }

  const handleCategoryToggle = categoryID => () => {
    const candidateCategory = categories.indexOf(categoryID)
    console.log("Register -> candidateCategory", candidateCategory)
    const allCategories = [...categories]
    if (candidateCategory === -1) {
      allCategories.push(categoryID)
    } else {
      allCategories.splice(candidateCategory, 1)
    }
    setFormState({ ...formState, categories: allCategories })
  }

  const handleFormInputChange = name => e => {
    setFormState({
      ...formState,
      [name]: e.target.value,
      error: "",
      success: "",
      buttonText: "Register",
    })
  }

  const handleFormSubmit = async e => {
    setFormState({ ...formState, buttonText: "Sending!" })
    e.preventDefault()
    try {
      const response = await axios.post(`${API}/register`, {
        name,
        email,
        password,
        categories,
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
    <form
      autoComplete='off'
      onSubmit={handleFormSubmit}
      className='form-group shadow p-3 mb-5 bg-info rounded'
      style={{
        borderRadius: "10px",
        color: "lightyellow",
      }}>
      <h2>Register</h2>
      <div>
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
        <button className='btn mx-auto btn-primary'>{buttonText}</button>
      </div>
    </form>
  )

  return (
    <Layout>
      <div className='row'>
        <div className='col-md-6 col-lg-6 mt-2'>{registerForm()}</div>
        <div className='col-md-4 col-lg-4 offset-2 mt-5'>
          <h2>Choose categories to follow</h2>
          {loadedCategories &&
            loadedCategories.map((category, index) => (
              <li className='list-unstyled' key={index}>
                <input
                  type='checkbox'
                  onChange={handleCategoryToggle(category._id)}
                  className='mr-2'
                  style={{ padding: 10 }}
                />
                <label className='form-check-label'>{category.name}</label>
              </li>
            ))}
        </div>
      </div>

      <Message success={success} error={error} />
    </Layout>
  )
}

export default Register

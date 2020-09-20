import React from "react"
import Layout from "../../../components/Layout"

import { useState, useEffect } from "react"
import axios from "axios"
import { API } from "../../../config.js"
import Message from "../../../components/hooks/Message"
import withUser from "../../withUser"
import {
  isUserAuthenticated,
  updateUserInLocalStorage,
} from "../../../utils/helpers"
import Router from "next/router"

const UpdateProfile = ({ user, token }) => {
  const [formState, setFormState] = useState({
    name: user.name,
    error: "",
    loadedCategories: [],
    categories: user.categories,
    success: "",
    buttonText: "Update",
  })

  const {
    name,
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

  const loadCategories = async () => {
    const response = await axios.get(`${API}/categories`)
    setFormState({ ...formState, loadedCategories: response.data })
  }

  const handleCategoryToggle = categoryID => () => {
    const candidateCategory = categories.indexOf(categoryID)
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
      buttonText: "Update Profile",
    })
  }

  const handleFormSubmit = async e => {
    setFormState({ ...formState, buttonText: "Updating!" })
    e.preventDefault()
    try {
      const response = await axios.put(
        `${API}/user`,
        {
          name,
          password,
          categories,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      updateUserInLocalStorage(response.data, () => {
        setFormState({
          ...formState,
          name: "",
          password: "",
          buttonText: "Profile Updated",
          success: "Profile has been updated!",
        })
      })
    } catch (error) {
      console.log(error)
      setFormState({ ...formState, error: error.response.data.error })
    }
  }
  const updateForm = () => (
    <form
      autoComplete='off'
      onSubmit={handleFormSubmit}
      className='form-group shadow p-3 mb-5 bg-info rounded'
      style={{
        borderRadius: "10px",
        color: "lightyellow",
      }}>
      <h2>Update Profile</h2>
      <div>
        <label htmlFor='name'>Username</label>
        <input
          onChange={handleFormInputChange("name")}
          type='text'
          value={name}
          id='name'
          className='form-control'
          placeholder='Humble user...'
        />
      </div>
      <div className='form-group'>
        <label htmlFor='password'>New Password</label>
        <input
          type='password'
          defaultValue={password}
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
        <div className='col-md-6 col-lg-6 mt-2'>{updateForm()}</div>
        <div className='col-md-4 col-lg-4 offset-2 mt-5'>
          <h2>Update categories to follow</h2>
          {loadedCategories &&
            loadedCategories.map((category, index) => (
              <li className='list-unstyled' key={index}>
                <input
                  type='checkbox'
                  onChange={handleCategoryToggle(category._id)}
                  className='mr-2'
                  checked={categories.includes(category._id)}
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

export default withUser(UpdateProfile)

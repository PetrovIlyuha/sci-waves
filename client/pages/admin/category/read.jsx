import React, { useState, useEffect } from "react"
import Layout from "../../../components/Layout"
import { ToastContainer, toast } from "react-toastify"

import axios from "axios"
import { API } from "../../../config"
import withAdmin from "../../withAdmin"
import Link from "next/link"

const ReadCategory = ({ user, token }) => {
  const [state, setState] = useState({
    success: "",
    error: "",
    categories: [],
  })

  const { error, success, categories } = state
  useEffect(() => {
    loadCategories()
  }, [])

  const loadCategories = async () => {
    const response = await axios.get(`${API}/categories`)
    setState({ ...state, categories: response.data })
  }

  const confirmDeletion = slug => {
    console.log(slug)
  }
  return (
    <Layout>
      <div className='row'>
        <div className='col-12 text-center'>
          <h1>All categories</h1>
          <br />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12'>
          {categories &&
            categories.map(category => (
              <div
                className='bg-dark text-white p-3 col-sm-6 col-md-6 mx-1 my-3 rounded shadow-lg'
                key={category._id}>
                <div>
                  <div className='row'>
                    <div className='col-md-4'>
                      {" "}
                      <img
                        src={category.image.url}
                        alt={category.name}
                        className='img-fluid rounded mr-5'
                        style={{ width: 100, border: "2px solid white" }}
                      />
                    </div>
                    <div className='col-md-8'>{category.name}</div>
                  </div>
                  <div className='row offset-3 mt-3'>
                    <div className='col-md-6'>
                      <Link href={`/admin/category/${category.slug}`}>
                        <a className='btn btn-sm btn-secondary'>Update</a>
                      </Link>
                    </div>
                    <div className='col-md-6'>
                      <button
                        className='btn btn-sm btn-danger'
                        onClick={() => confirmDeletion(category.slug)}>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  )
}

export default withAdmin(ReadCategory)

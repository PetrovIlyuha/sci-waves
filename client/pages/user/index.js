import React from "react"
import axios from "axios"
import Layout from "../../components/Layout"
import { IoIosCreate } from "react-icons/io"
import { GrDocumentUpdate } from "react-icons/gr"
import Link from "next/link"
import formatDistanceToNow from "date-fns/formatDistanceToNow"
import Router from "next/router"

import { API } from "../../config"
import { getCookie } from "../../utils/helpers"
import withUser from "../withUser"

const UserPage = ({ user, userLinks, token }) => {
  console.log(userLinks)

  const confirmDeletion = (e, id, title) => {
    e.preventDefault()
    let requestOnDeletion = window.confirm(
      `Are you sure you want to delete ${title}?`
    )
    if (requestOnDeletion) {
      handleLinkRemoval(id)
    }
  }
  const handleLinkRemoval = async id => {
    console.log(`Delete link ${id}`)
    try {
      const response = await axios.delete(`${API}/link/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      console.log(`Link Deletion success`, response)
      Router.replace("/user")
    } catch (err) {
      console.error(`Link deletion failed with ${err}`)
    }
  }
  return (
    <Layout>
      <h1>{user.name}'s Dashboard</h1>
      <h3>
        <span className='text-danger'>Status: {user.role}</span>
      </h3>
      <hr />
      <div className='row'>
        <div className='col-md-4 col-sm-4 mt-5'>
          <ul className='nav flex-column'>
            <li className='nav-item d-flex justify-center align-center'>
              <Link href='/user/link/create'>
                <a className='nav-link'>
                  <IoIosCreate style={{ marginRight: "10px" }} /> Create
                  Resource
                </a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/user/profile/update'>
                <a className='nav-link'>
                  <GrDocumentUpdate style={{ marginRight: "10px" }} />
                  Update Your Profile
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className='col-md-8 col-sm-8'>
          <h5 className='text-center'>Resources you have created</h5>
          {userLinks.map((link, idx) => (
            <div
              key={idx}
              className='row alert alert-info p-2'
              style={{ boxShadow: "2px 2px 9px rgba(0,0,0,0.3)" }}>
              <div className='col-md-8 col-sm-8'>
                <a
                  href={link.url}
                  style={{ textDecoration: "none" }}
                  target='_blank'>
                  <h3 className='pt-3'>{link.title}</h3>
                  <h5
                    className='pt-2 text-danger'
                    style={{ fontSize: "0.9rem" }}>
                    {link.url}
                  </h5>
                </a>
              </div>
              <div className='col-md-4 col-sm-4 pt-2 mt-3'>
                <span className='pull-right'>
                  {formatDistanceToNow(new Date(link.createdAt), {
                    addSuffix: true,
                  })}
                </span>
              </div>
              <div className='row m-2'>
                <div className='col-md-8 col-sm-8'>
                  <span>
                    {link.type} / {link.format}
                  </span>
                  <div>
                    {link.categories.map((category, index) => (
                      <span key={index} className='badge badge-success'>
                        {category.name}
                      </span>
                    ))}
                    <span className='badge text-secondary ml-4'>
                      {link.likes} likes currently
                    </span>
                  </div>
                </div>
                <div
                  className='col-md-4 col-sm-4  mt-3'
                  style={{
                    width: "230px",
                    display: "flex",
                    marginLeft: "-20px",
                    justifyContent: "space-between",
                    height: 29,
                    cursor: "pointer",
                  }}>
                  <Link href={`/user/link/${link._id}`}>
                    <span className='badge bg-dark text-warning p-2'>
                      Update
                    </span>
                  </Link>
                  <span
                    onClick={e => confirmDeletion(e, link._id, link.title)}
                    className='badge bg-dark text-danger p-2 ml-2'>
                    Delete
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default withUser(UserPage)

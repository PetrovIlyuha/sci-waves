import React from "react"
import Layout from "../../components/Layout"
import withAdmin from "../withAdmin"
import { BsFolderPlus } from "react-icons/bs"
import { BsFillEyeFill, BsFolder } from "react-icons/bs"
import Link from "next/link"

const AdminPage = ({ user, adminLinks, token }) => {
  console.log(token)
  return (
    <Layout>
      <h1>Admin Dashboard</h1>
      <br />
      <div className='row'>
        <div className='col-md-4'>
          <ul className='nav flex-column'>
            <li className='nav-item'>
              <Link href='/admin/category/create'>
                <a
                  className='nav-link'
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    width: 300,
                    justiContent: "space-between",
                  }}>
                  <BsFolderPlus size={24} style={{ marginRight: 10 }} /> Create
                  Category
                </a>
              </Link>
            </li>
            <li className='nav-item d-flex'>
              <Link href='/admin/category/read'>
                <a
                  className='nav-link'
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    width: 300,
                    justiContent: "space-between",
                  }}>
                  <BsFolder size={24} style={{ marginRight: 10 }} />
                  All Categories
                </a>
              </Link>
            </li>
            <li className='nav-item d-flex'>
              <Link href='/admin/link/read'>
                <a
                  className='nav-link'
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    width: 300,
                    justiContent: "space-between",
                  }}>
                  <BsFillEyeFill
                    size={24}
                    style={{ marginRight: 10 }}
                    color='red'
                  />
                  Supervise Links
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className='col-md-8'>2</div>
      </div>
    </Layout>
  )
}

export default withAdmin(AdminPage)

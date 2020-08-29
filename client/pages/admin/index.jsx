import React from "react"
import Layout from "../../components/Layout"
import withAdmin from "../withAdmin"
import Link from "next/link"

const AdminPage = ({ user, token }) => {
  return (
    <Layout>
      <h1>Admin Dashboard</h1>
      <br />
      <div className='row'>
        <div className='col-md-4'>
          <ul className='nav flex-ite'>
            <li className='nav-item'>
              <Link href='/admin/category/create'>
                <a className='nav-link'>Create Category</a>
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
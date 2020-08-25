import React from "react"
import Layout from "../../components/Layout"
import withAdmin from "../withAdmin"

const AdminPage = ({ user, token }) => {
  return (
    <Layout>
      <h2>Admin Zone</h2>
      {JSON.stringify(user)}
      {JSON.stringify(token)}
    </Layout>
  )
}

export default withAdmin(AdminPage)

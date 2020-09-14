import React from "react"
import axios from "axios"
import Layout from "../../components/Layout"
import { API } from "../../config"
import { getCookie } from "../../utils/helpers"
import withUser from "../withUser"

const UserPage = ({ user, token }) => {
  console.log(user)
  return (
    <Layout>
      <h3>Customer Page</h3>
    </Layout>
  )
}

export default withUser(UserPage)

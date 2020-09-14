import React from "react"
import axios from "axios"
import Layout from "../../components/Layout"
import { API } from "../../config"
import { getCookie } from "../../utils/helpers"
import withUser from "../withUser"

const UserPage = ({ user, userLinks, token }) => {
  return (
    <Layout>
      <h3>Customer Links</h3>
      <p>{JSON.stringify(userLinks)}</p>
    </Layout>
  )
}

export default withUser(UserPage)

import axios from "axios"
import { API } from "../config"
import { getCookie } from "../utils/helpers"
import { Router } from "next/router"

const withUser = (Page) => {
  const WithAuthUser = (props) => <Page {...props} />
  WithAuthUser.getInitialProps = async (context) => {
    const token = await getCookie("token", context.req)
    let user = null
    if (token) {
      try {
        const response = await axios.get(`${API}/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
        user = response.data
      } catch (err) {
        if (err.response.status === 401) {
          user = null
        }
      }
    }
    if (user === null) {
      context.req.writeHead(302, {
        Location: "/",
      })
      context.res.end()
    } else {
      return {
        ...(Page.getInitialProps ? await Page.getInitialProps(context) : {}),
        user,
        token,
      }
    }
  }
  return WithAuthUser
}

export default withUser

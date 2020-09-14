import axios from "axios"
import { API } from "../config"
import { getCookie } from "../utils/helpers"

const withAdmin = Page => {
  const WithAdminUser = props => <Page {...props} />
  WithAdminUser.getInitialProps = async context => {
    const token = await getCookie("token", context.req)
    let user = null
    let adminLinks = []
    if (token) {
      try {
        const response = await axios.get(`${API}/admin`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
        user = response.data.user
        adminLinks = response.data.links
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
        adminLinks,
        token,
      }
    }
  }
  return WithAdminUser
}

export default withAdmin

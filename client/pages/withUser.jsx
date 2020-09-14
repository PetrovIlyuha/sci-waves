import axios from "axios"
import { API } from "../config"
import { getCookie } from "../utils/helpers"

const withUser = Page => {
  const WithAuthUser = props => <Page {...props} />
  WithAuthUser.getInitialProps = async context => {
    const token = await getCookie("token", context.req)
    let user = null
    let userLinks = []
    if (token) {
      try {
        const response = await axios.get(`${API}/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
            contentType: "application/json",
          },
        })
        user = response.data.user
        userLinks = response.data.links
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
        userLinks,
        token,
      }
    }
  }
  return WithAuthUser
}

export default withUser

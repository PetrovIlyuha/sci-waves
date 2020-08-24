import React, { useEffect } from "react"
import Router from "next/router"
import { logOutUser } from "../utils/helpers"

const logout = () => {
  useEffect(() => {
    logOutUser()
    Router.push("/login")
  }, [])
  return <div>Logging Out... Redirecting to login...</div>
}

export default logout

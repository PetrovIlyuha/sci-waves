import Layout from "../components/Layout"
import { ToastContainer, toast } from "react-toastify"
import { useEffect, useState } from "react"
import { isUserAuthenticated } from "../utils/helpers"

const Home = () => {
  const [isFirstVisit, setIsFirstVisit] = useState(true)
  useEffect(() => {
    if (isFirstVisit) {
      isUserAuthenticated() &&
        toast.success(`Take a look around & have a nice search!`, {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
    }
    setIsFirstVisit(false)
  }, [isFirstVisit])
  return (
    <Layout>
      <h3>Home Page</h3>
      <ToastContainer />
    </Layout>
  )
}

export default Home

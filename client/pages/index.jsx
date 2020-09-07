import Layout from "../components/Layout"
import { ToastContainer, toast } from "react-toastify"
import { useEffect, useState } from "react"
import { isUserAuthenticated } from "../utils/helpers"
import { API } from "../config"
import axios from "axios"
import classes from "./index.module.css"
import Link from "next/link"

const Home = ({ categories }) => {
  const [isFirstVisit, setIsFirstVisit] = useState(true)
  useEffect(() => {
    if (isFirstVisit) {
      isUserAuthenticated() &&
        toast.success(`Take a look around & have a nice search!`, {
          position: "top-left",
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
      <div className='row' style={{ marginTop: 100 }}>
        <div className='col-md-12'>
          <div className='font-weight-bold text-center'>
            <h2>What ignites your curiosity the most?</h2>
          </div>
        </div>
      </div>
      <hr />
      <div className='row offset-md-2'>
        {categories.map(category => (
          <Link href={`/links/${category.slug}`} key={category._id}>
            <a
              className='bg-dark text-white p-3 col-sm-12 col-md-3 mx-1 my-2 rounded shadow-sm'
              style={{ textDecoration: "none" }}>
              <div>
                <div className='row'>
                  <div className='col-md-4'>
                    {" "}
                    <img
                      src={category.image.url}
                      alt={category.name}
                      className='img-fluid rounded mr-5'
                      style={{ width: 80 }}
                    />
                  </div>
                  <div className='col-md-8'>{category.name}</div>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
      <ToastContainer />
    </Layout>
  )
}

Home.getInitialProps = async context => {
  const response = await axios.get(`${API}/categories`)
  return {
    categories: response.data,
  }
}

export default Home

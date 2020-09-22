import { useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import axios from "axios"
import formatDistanceToNow from "date-fns/formatDistanceToNow"
import Link from "next/link"

import Layout from "../components/Layout"

import { isUserAuthenticated } from "../utils/helpers"
import { API } from "../config"

const Home = ({ categories }) => {
  const [topLinks, setTopLinks] = useState([])

  useEffect(() => {
    loadTopLInks()
  }, [])

  const loadTopLInks = async () => {
    const topLinks = await axios.get(`${API}/links/top`)
    setTopLinks(topLinks.data)
  }

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

  const handleLike = async linkID => {
    const response = await axios.put(`${API}/click-count`, { linkID })
    loadTopLInks()
  }
  return (
    <Layout>
      <div className='row' style={{ marginTop: 100 }}>
        <div className='col-md-12'>
          <div className='font-weight-bold text-center'>
            <h2 className='font-weight-bold'>
              What ignites your curiosity the most?
            </h2>
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
      <div className='row mt-4'>
        <div className='col-md-12 col-sm-12'>
          <h2 className='font-weight-bold pb-3 text-center'>
            Popular Resources
          </h2>
          {topLinks &&
            topLinks.map(link => (
              <div
                key={link._id}
                onClick={() => handleLike(link._id)}
                className='col-md-8 offset-2 col-sm-8 alert p-2 bg-dark rounded shadow'>
                <a
                  href={link.url}
                  target='_blank'
                  className='text-white'
                  style={{ textDecoration: "none" }}>
                  <div className='col-md-12 mt-3 col-sm-12 d-flex justify-between'>
                    <h5 className='col-md-9'>
                      <p>{link.title}</p>
                      <p style={{ color: "orange" }}>
                        {link.type} / {link.format}
                      </p>
                    </h5>
                    <div className='col-md-3'>
                      <span
                        className='pull-right'
                        style={{ color: "lightgreen" }}>
                        {formatDistanceToNow(new Date(link.createdAt), {
                          addSuffix: true,
                        })}{" "}
                        by{" "}
                        <p style={{ color: "lightblue" }}>
                          {link.postedBy.name}
                        </p>
                      </span>
                    </div>
                  </div>
                  <h6
                    className='col-md-10 offset-1 col-sm-10 p-2'
                    style={{
                      background: "darkblue",
                      borderRadius: "10px",
                      textAlign: "center",
                      color: "lightgreen !important",
                    }}>
                    {link.url}
                  </h6>
                </a>
                <div className='col-md-12 d-flex'>
                  <div className='col-md-8'>
                    <h4 style={{ color: "lightgreen" }}>Categories</h4>
                    {link.categories.map((categoryId, index) => (
                      <span key={index} style={{ color: "orange" }}>
                        {categories.find(cat => cat._id === categoryId).name}
                      </span>
                    ))}
                  </div>
                  <div className='col-md-4 mt-3'>
                    <h4 style={{ color: "yellow" }}>
                      {link.likes}{" "}
                      <span role='image' aria-label='like icon'>
                        💖
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
        </div>
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

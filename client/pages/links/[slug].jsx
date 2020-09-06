import React, { useState } from "react"
import axios from "axios"
import Layout from "../../components/Layout"
import { API } from "../../config"
import renderHTML from "react-render-html"
import Link from "next/link"
import formatDistanceToNow from "date-fns/formatDistanceToNow"

const LinksForCategory = ({
  query,
  category,
  links,
  totalLinks,
  linksLimit,
  linkSkip,
}) => {
  const [viewedLinks, setViewedLinks] = useState(links)
  const [limit, setLimit] = useState(linksLimit)
  const [skip, setSkip] = useState(linkSkip)
  const [size, setSize] = useState(totalLinks)

  const handleLinkUpvote = linkID => {}

  const linksList = () =>
    viewedLinks.map((link, index) => (
      <div
        key={index}
        className='row p-3 ml-1 mr-3 bg-dark'
        style={{
          border: "2px solid lightyellow",
          borderRadius: "4px",
          marginTop: "20px",
          boxShadow: "2px 8px 16px rgba(230,100,230,0.4)",
        }}>
        <div
          className='col-md-8 col-sm-8'
          onClick={() => handleLinkUpvote(link._id)}>
          <a href={link.url} style={{ color: "whitesmoke" }} target='_blank'>
            <h5 className='pt-2'>{link.title}</h5>
            <h6
              className='pt-2 text-danger'
              style={{
                background: "rgba(0,0,0,0.4)",
                padding: "3px 5px",
                borderRadius: "4px",
              }}>
              {link.url}
            </h6>
          </a>
        </div>
        <div className='col-md-4 col-sm-4 pt-2'>
          <span className='pull-right'>
            <span style={{ color: "yellow" }}>
              {formatDistanceToNow(new Date(link.createdAt), {
                addSuffix: true,
              })}{" "}
            </span>
            by {link.postedBy.name}
          </span>
        </div>
        <div className='col-md-12 col-sm-12'>
          <span className='badge text-white'>
            {link.type} / {link.format}
          </span>
          {link.categories.map((category, idx) => (
            <span
              key={idx}
              style={{ color: "lightgreen", background: "darkgreen" }}
              className='badge'>
              {category.name}
            </span>
          ))}
          <div className='badge pull-right ml-5' style={{ color: "yellow" }}>
            {link.likes} <span style={{ color: "white" }}>Upvotes</span>
          </div>
        </div>
      </div>
    ))
  const categoryDescription = () => (
    <div className='col-md-8 col-sm-8'>
      <h3 className='display-8 font-weight-bold'>
        {category.name} /{" "}
        <span style={{ fontSize: "1.2rem", color: "lightyellow" }}>
          Active Links
        </span>
      </h3>

      <div
        className='lead alert alert-secondary bg-dark pt-4 mr-3'
        style={{
          boxShadow: "3px 10px 20px -3px rgba(230,230,230,0.4)",
          color: "yellow",
        }}>
        {renderHTML(category.content)}
      </div>
      <div
        style={{
          width: "96%",
          height: "1px",
          background: "white",
          borderRadius: "3px",
          margin: "20px 0px 15px 10px",
        }}></div>
    </div>
  )
  const categoryImage = () => (
    <div className='col-md-4 col-sm-4'>
      <img
        src={category.image.url}
        style={{
          width: "230px",
          border: "2px solid white",
          borderRadius: "4px",
          boxShadow: "3px 10px 20px -3px rgba(230,230,230,0.4)",
        }}
        alt='Category image'
      />
    </div>
  )

  const uploadMoreLinksFromDB = async () => {
    let toSkip = skip + limit
    const response = await axios.post(`${API}/category/${query.slug}`, {
      skip: toSkip,
      limit,
    })
    setViewedLinks([...viewedLinks, ...response.data.links])
    setSize(response.data.links.length)
    setSkip(toSkip)
  }

  const loadMoreLinksBtn = () => {
    return (
      size > 0 &&
      size >= limit && (
        <button
          onClick={uploadMoreLinksFromDB}
          className='btn btn-primary btn-lg'>
          Load More
        </button>
      )
    )
  }
  return (
    <Layout>
      <div className='row text-white mt-5'>
        {categoryDescription()}
        {categoryImage()}
      </div>
      <div className='row text-white mt-3'>
        <div className='col-md-8 col-sm-8'>{linksList()}</div>
        <div className='col-md-4 col-sm-4'>
          <h2 className='lead'>Top in category</h2>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6 offset-md-1 mt-5'>{loadMoreLinksBtn()}</div>
      </div>
    </Layout>
  )
}

LinksForCategory.getInitialProps = async ({ query, req }) => {
  let skip = 0
  let limit = 2
  const response = await axios.post(`${API}/category/${query.slug}`, {
    skip,
    limit,
  })
  return {
    query,
    category: response.data.category,
    links: response.data.links,
    totalLinks: response.data.links.length,
    linksLimit: limit,
    linkSkip: skip,
  }
}

export default LinksForCategory

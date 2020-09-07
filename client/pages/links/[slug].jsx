import React, { useState } from "react"
import axios from "axios"
import InfiniteScroll from "react-infinite-scroller"
import renderHTML from "react-render-html"
import RingLoader from "react-spinners/RingLoader"

import Layout from "../../components/Layout"
import { API } from "../../config"
import LinksList from "../../components/links/LinksList"
import CategoryDescription from "../../components/category/CategoryDescription"
import CategoryImage from "../../components/category/CategoryImage"

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
  const [loading, setLoading] = useState(false)

  const handleLinkUpvote = async linkId => {
    const response = await axios.put(`${API}/click-count`, { linkId })
    console.log(size)
    loadUpdatedResources()
  }

  const loadUpdatedResources = async () => {
    const response = await axios.post(`${API}/category/${query.slug}`)
    setViewedLinks(response.data.links)
  }

  const uploadMoreLinksFromDB = async () => {
    let toSkip = skip + limit
    setLoading(true)
    const response = await axios.post(`${API}/category/${query.slug}`, {
      skip: toSkip,
      limit,
    })
    setViewedLinks([...viewedLinks, ...response.data.links])
    setLoading(false)
    setSize(response.data.links.length)
    setSkip(toSkip)
  }

  return (
    <Layout background='#FFE1C6'>
      <div className='row mt-5'>
        <CategoryDescription category={category} />
        <CategoryImage category={category} />
      </div>
      <div className='row'>
        <div className='col-md-8 col-sm-8'>
          <InfiniteScroll
            pageStart={0}
            loadMore={uploadMoreLinksFromDB}
            hasMore={size > 0 && size >= limit}
            loader={
              <div style={{ marginLeft: "40%", marginTop: "30px" }}>
                <RingLoader size={60} color={"#123abc"} loading={loading} />
              </div>
            }>
            {
              <LinksList
                links={viewedLinks}
                handleLinkUpvote={handleLinkUpvote}
              />
            }
          </InfiniteScroll>
        </div>
        <div className='col-md-4 col-sm-4'>
          <h2 className='lead'>Top in category</h2>
        </div>
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

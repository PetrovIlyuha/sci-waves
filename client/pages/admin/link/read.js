import React, { useState } from "react"
import axios from "axios"
import InfiniteScroll from "react-infinite-scroller"
import RingLoader from "react-spinners/RingLoader"

import { API } from "../../../config"
import LinksList from "../../../components/links/LinksList"

import Layout from "../../../components/Layout"
import withAdmin from "../../withAdmin"
import { getCookie } from "../../../utils/helpers"

const SupervisedLinks = ({
  token,
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

  const uploadMoreLinksFromDB = async () => {
    let toSkip = skip + limit
    setLoading(true)
    const response = await axios.post(
      `${API}/links`,
      {
        skip: toSkip,
        limit,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    setViewedLinks([...viewedLinks, ...response.data])
    setLoading(false)
    setSize(response.data.length)
    setSkip(toSkip)
  }

  const handleLinkUpvote = async (linkId, token) => {
    await axios.put(`${API}/click-count`, { linkId })
    loadUpdatedResources(token)
  }

  const loadUpdatedResources = async ({ token }) => {
    const response = await axios.post(`${API}/links`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    setViewedLinks(response.data)
  }
  return (
    <Layout background='#FFE1C6'>
      <div className='row mt-5'></div>
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
                token={token}
                handleLinkUpvote={handleLinkUpvote}
              />
            }
          </InfiniteScroll>
        </div>
      </div>
    </Layout>
  )
}

SupervisedLinks.getInitialProps = async ({ req }) => {
  let skip = 0
  let limit = 5
  const token = getCookie("token", req)
  const response = await axios.post(
    `${API}/links`,
    {
      skip,
      limit,
    },
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjNlNjI1MGQ5MGMyYzcwYmE3YWY2Y2UiLCJpYXQiOjE2MDAyNTA3MjksImV4cCI6MTYwMDg1NTUyOX0.35EetkWf1fPduVnlHo4qSAoU1xNn1Uu0t2Pj6Ur9h1I",
      },
    }
  )
  return {
    token,
    links: response.data,
    totalLinks: response.data.length,
    linksLimit: limit,
    linkSkip: skip,
  }
}

export default withAdmin(SupervisedLinks)

import React from "react"
import formatDistanceToNow from "date-fns/formatDistanceToNow"
import Link from "next/link"

const LinksList = ({ token, links, handleLinkUpvote, confirmDeletion }) => {
  return links.map((link, index) => (
    <div
      key={Math.random() * 1000000}
      className='row p-3 ml-1 mr-3 bg-dark'
      style={{
        border: "2px solid lightyellow",
        borderRadius: "4px",
        marginTop: "20px",
        boxShadow: "2px 8px 16px rgba(230,100,230,0.4)",
      }}>
      <div
        className='col-md-8 col-sm-8'
        onClick={() => handleLinkUpvote(link._id, token)}>
        <a
          href={link.url}
          style={{ color: "whitesmoke", textDecoration: "none" }}
          target='_blank'>
          <h5 className='pt-2'>{link.title}</h5>
          <h6
            className='pt-2 '
            style={{
              background: "#38147B",
              padding: "3px 5px",
              borderRadius: "4px",
              color: "#C0AB0C",
            }}>
            {link.url}
          </h6>
        </a>
      </div>
      <div className='col-md-4 col-sm-4 pt-2 text-white'>
        <span className='pull-right'>
          <span style={{ color: "yellow" }}>
            {formatDistanceToNow(new Date(link.createdAt), {
              addSuffix: true,
            })}{" "}
          </span>
          by {link.postedBy.name}
        </span>
        <div
          className='badge pull-right ml-5 mt-4'
          style={{ color: "yellow", fontSize: "1.2rem" }}>
          {link.likes} <span style={{ color: "white" }}>Upvotes</span>
        </div>
      </div>
      <div className='col-md-12 col-sm-12 d-flex'>
        <div className='col-md-6 col-sm-6'>
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
        </div>
        <div className='col-md-6 col-sm-6 d-flex'>
          <Link href={`/user/link/${link._id}`}>
            <a className='btn btn-secondary'>Update</a>
          </Link>
          <button
            onClick={e => confirmDeletion(e, link._id)}
            className='btn btn-danger ml-2'>
            Delete
          </button>
        </div>
      </div>
    </div>
  ))
}

export default LinksList

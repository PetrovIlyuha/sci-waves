import React from "react"
import formatDistanceToNow from "date-fns/formatDistanceToNow"

const LinksList = ({ links, handleLinkUpvote }) => {
  return links.map((link, index) => (
    <div
      key={link._id}
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
      </div>
      <div className='col-md-12 col-sm-12'>
        <span className='badge '>
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
}

export default LinksList

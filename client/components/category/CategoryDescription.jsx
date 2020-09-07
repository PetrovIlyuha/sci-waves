import React from "react"
import renderHTML from "react-render-html"

const CategoryDescription = ({ category }) => {
  return (
    <div className='col-md-8 col-sm-8'>
      <h3 className='display-8 font-weight-bold'>
        {category.name} /{" "}
        <span style={{ fontSize: "1.2rem", color: "red" }}>Active Links</span>
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
}

export default CategoryDescription

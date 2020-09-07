import React from "react"

const CategoryImage = ({ category }) => {
  return (
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
}

export default CategoryImage

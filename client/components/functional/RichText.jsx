import dynamic from "next/dynamic"
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false })

const RichText = ({ handleContentChange, content }) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  }
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ]
  return (
    <ReactQuill
      value={content}
      onChange={handleContentChange}
      modules={modules}
      formats={formats}
      placeholder='Describe new category...'
      theme='snow'
      className='pb-5 mb-3'
      style={{ border: "2px solid grey" }}
    />
  )
}

export default RichText

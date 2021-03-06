const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema

const linkSchema = mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      max: 300,
    },
    url: {
      type: String,
      trim: true,
      required: true,
      max: 256,
    },
    slug: {
      type: String,
      lowercase: true,
      index: true,
    },
    postedBy: {
      type: ObjectId,
      ref: "User",
    },
    categories: [
      {
        type: ObjectId,
        ref: "Category",
        required: true,
      },
    ],
    type: {
      type: String,
      default: "Free",
    },
    format: {
      type: String,
      default: "video course",
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model("Link", linkSchema)

const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cors = require("cors")
const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config()

const port = process.env.PORT

const app = express()

app.use(cors({ origin: process.env.CLIENT_URL }))
app.use(morgan("dev"))
app.use(bodyParser.json({ extended: true }))

mongoose.connect(
  process.env.MONGO_ACCESS,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  },
  (err, data) => {
    if (err) {
      throw new Error(`DB Access errored with: ${err}`)
    }
    console.log(`DB connection established`)
  }
)

const authRoutes = require("./routes/auth")
const userRoutes = require("./routes/userRouter")
const categoryRoutes = require("./routes/categoryRoutes")

app.use("/api", authRoutes)
app.use("/api", userRoutes)
app.use("/api", categoryRoutes)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})

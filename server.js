import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import noteRoutes from './routes/notes.js'
import {connectDB} from './config/db.js'

dotenv.config({
  path:"./config/config.env"
})

const app = express()
connectDB()

app.use(morgan("dev"))
app.use(express.json())

app.use("/api/v1/notes",noteRoutes)

app.listen(3000,() => {
  console.log("your ara in port 3000")
}
)

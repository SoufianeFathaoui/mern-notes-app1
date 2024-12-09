import express from 'express'
import dotenv from 'dotenv'

dotenv.config({
  path:"./config/config.env"
})

const app = express()

app.use(express.json())

app.get("/",(req,res) => {
  res.send("hello fathaoui soufiane")
}
)

app.listen(3000,() => {
  console.log("your ara in port 3000")
}
)

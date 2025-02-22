import express from "express"
import morgan from "morgan"
import apiRouter from "./routes/apiRoute.js"
import cors from "cors"
const app = express()

app.use(morgan())

app.use("/", apiRouter)
app.use(cors())
const PORT = process.env.PORT ?? 3000

app.listen(PORT, "0.0.0.0",()=>console.log("Server is running at port " + PORT))
import express from "express"
import { userApi } from "../Route/api.js"
import { errorMiddleware } from "../middleware/errorMiddleware.js"
import cors from "cors"


export const web = express()
web.use(cors())

web.use(express.json())
web.use(userApi)
web.use(errorMiddleware)
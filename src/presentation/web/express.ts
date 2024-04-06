import express, { Request, Response } from "express"
import cors from "cors"
import { router } from "../router/router"
import helmet from "helmet"
import { limiter } from "../middlewares/rate-limit"
import dotenv from "dotenv"
const app = express()
dotenv.config()

app.set('trust proxy', 1)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet())
app.use(cors({ origin: "*" }))
app.use(router)

const port: any = process.env.PORT || 3000

app.get("/", (req: Request, res: Response) => res.json("Servidor funcionando normalmente") )

app.listen(port, "0.0.0.0", () => {
    console.log(`Server running in port ${port}`)
});
import express, { type Express, type Request, type Response } from 'express'
import 'dotenv/config'
import path from 'path'

const app: Express = express()
const dirname = path.resolve()
const port: string = (process.env.PORT === null || process.env.PORT === undefined) ? '8000' : process.env.PORT
app.use(express.static(path.join(dirname, '/public/dist')))

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(dirname, '/public/dist/index.html'))
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})

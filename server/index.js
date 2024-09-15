import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
import 'express-async-errors'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import fileUpload from 'express-fileupload'
import { connectDB } from './db/connect.js'
import authRouter from './routes/authRoutes.js'
import movieRouter from './routes/movieRoutes.js'
import tvRouter from './routes/tvRoutes.js'
import searchRouter from './routes/searchRoutes.js'
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'

app.use(express.json())
app.use(fileUpload({ useTempFiles: true }))
app.use(cookieParser(process.env.JWT_SECRET))
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/movie', movieRouter)
app.use('/api/v1/tv', tvRouter)
app.use('/api/v1/search', searchRouter)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/dist')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
  })
}

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  connectDB()
  console.log(`Server Running on port ${PORT}...`)
})

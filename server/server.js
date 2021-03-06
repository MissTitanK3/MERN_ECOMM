import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'

import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

// Initial Configure
dotenv.config()
connectDB()
const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is alive.')
})
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use(notFound)
app.use(errorHandler)


app.listen(PORT, console.log(`Server Running in ${process.env.NODE_ENV} mode on PORT:${PORT}`.yellow.bold))
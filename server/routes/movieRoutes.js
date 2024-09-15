import express from 'express'
import {
  getMovieDetails,
  getMoviesByCategory,
  getMovieTrailers,
  getSimilarMovies,
  getTrendingMovie,
} from '../controller/movieController.js'
import authenticateUser from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/trending', authenticateUser, getTrendingMovie)
router.get('/trailers/:id', authenticateUser, getMovieTrailers)
router.get('/details/:id', authenticateUser, getMovieDetails)
router.get('/similar/:id', authenticateUser, getSimilarMovies)
router.get('/:category', authenticateUser, getMoviesByCategory)

export default router

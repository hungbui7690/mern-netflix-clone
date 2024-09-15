import express from 'express'
import {
  getMovieDetails,
  getMoviesByCategory,
  getMovieTrailers,
  getSimilarMovies,
  getTrendingMovie,
} from '../controller/movieController.js'

const router = express.Router()

router.get('/trending', getTrendingMovie)
router.get('/trailers/:id', getMovieTrailers)
router.get('/details/:id', getMovieDetails)
router.get('/similar/:id', getSimilarMovies)
router.get('/:category', getMoviesByCategory)

export default router

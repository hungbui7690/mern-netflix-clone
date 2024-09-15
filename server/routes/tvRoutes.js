import express from 'express'
import {
  getSimilarTvs,
  getTrendingTv,
  getTvDetails,
  getTvsByCategory,
  getTvTrailers,
} from '../controller/tvController.js'

const router = express.Router()

router.get('/trending', getTrendingTv)
router.get('/trailers/:id', getTvTrailers)
router.get('/details/:id', getTvDetails)
router.get('/similar/:id', getSimilarTvs)
router.get('/:category', getTvsByCategory)

export default router

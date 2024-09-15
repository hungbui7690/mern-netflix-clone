import express from 'express'
import {
  getSimilarTvs,
  getTrendingTv,
  getTvDetails,
  getTvsByCategory,
  getTvTrailers,
} from '../controller/tvController.js'
import authenticateUser from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/trending', authenticateUser, getTrendingTv)
router.get('/trailers/:id', authenticateUser, getTvTrailers)
router.get('/details/:id', authenticateUser, getTvDetails)
router.get('/similar/:id', authenticateUser, getSimilarTvs)
router.get('/:category', authenticateUser, getTvsByCategory)

export default router

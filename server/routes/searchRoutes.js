import express from 'express'
import {
  getSearchHistory,
  removeItemFromSearchHistory,
  searchMovie,
  searchPerson,
  searchTv,
} from '../controller/searchController.js'
import authenticateUser from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/person/:query', authenticateUser, searchPerson)
router.get('/movie/:query', authenticateUser, searchMovie)
router.get('/tv/:query', authenticateUser, searchTv)

router.get('/history', authenticateUser, getSearchHistory)
router.delete('/history/:id', authenticateUser, removeItemFromSearchHistory)

export default router

import express from 'express'
import {
  login,
  signUp,
  logout,
  getCurrentUser,
} from '../controller/authController.js'
import authenticateUser from '../middleware/authMiddleware.js'
const router = express.Router()

router.post('/signup', signUp)
router.post('/login', login)
router.post('/logout', logout)
router.get('/me', authenticateUser, getCurrentUser)

export default router

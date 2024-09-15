import { User } from '../model/User.js'
import bcryptjs from 'bcryptjs'
import { generateTokenAndSetCookie } from '../utils/generateToken.js'
import BadRequestError from '../errors/bad-request.js'
import { StatusCodes } from 'http-status-codes'

export async function signUp(req, res) {
  const { email, password, username } = req.body

  if (!email || !password || !username)
    throw new BadRequestError('Please provide all fields')

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) throw new BadRequestError('Invalid email')

  if (password.length < 6)
    throw new BadRequestError('Password must be at least 6 characters')

  const emailExists = await User.findOne({ email: email })
  if (emailExists) throw new BadRequestError('Email already exists')

  const usernameExists = await User.findOne({ username: username })
  if (usernameExists) throw new BadRequestError('Username already exists')

  const salt = await bcryptjs.genSalt(10)
  const hashedPassword = await bcryptjs.hash(password, salt)

  const PROFILE_PICS = ['/avatar1.png', '/avatar2.png', '/avatar3.png']

  const image = PROFILE_PICS[Math.floor(Math.random() * PROFILE_PICS.length)]

  const newUser = new User({
    email,
    password: hashedPassword,
    username,
    image,
  })

  generateTokenAndSetCookie(newUser._id, res)
  await newUser.save()

  newUser.password = ''

  res.status(StatusCodes.CREATED).json({
    success: true,
    user: newUser,
  })
}

export async function login(req, res) {
  const { username, password } = req.body

  if (!username || !password)
    throw new BadRequestError('Please provide all fields')

  const user = await User.findOne({ username })
  if (!user) throw new BadRequestError('Invalid credentials')

  const isPasswordCorrect = await bcryptjs.compare(password, user.password)
  if (!isPasswordCorrect) throw new BadRequestError('Invalid credentials')

  generateTokenAndSetCookie(user._id, res)

  res.status(StatusCodes.OK).json({
    success: true,
    user: {
      ...user._doc,
      password: '',
    },
  })
}

export async function logout(req, res) {
  res.clearCookie('token')
  res.status(200).json({ success: true, message: 'Logged out successfully' })
}

export async function getCurrentUser(req, res) {
  // console.log('req.user:', req.user)
  res.status(200).json({ success: true, user: req.user })
}

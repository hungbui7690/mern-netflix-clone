import jwt from 'jsonwebtoken'

export const generateTokenAndSetCookie = (userId, res) => {
  const netflixToken = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '15d',
  })

  const oneDay = 1000 * 60 * 60 * 24
  res.cookie('netflixToken', netflixToken, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === 'production',
    signed: true,
  })
}

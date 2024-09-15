import { StatusCodes } from 'http-status-codes'
import { fetchTMDB } from '../services/tmdbServices.js'

export async function getTrendingTv(req, res) {
  const data = await fetchTMDB('/trending/tv/day')
  const randomMovie =
    data.results[Math.floor(Math.random() * data.results?.length)]
  res.status(StatusCodes.OK).json({ success: true, content: randomMovie })
}

export async function getTvTrailers(req, res) {
  const { id } = req.params
  const data = await fetchTMDB(`/tv/${id}/videos`)
  res.status(StatusCodes.OK).json({ success: true, trailers: data.results })
}

export async function getTvDetails(req, res) {
  const { id } = req.params

  const data = await fetchTMDB(`/tv/${id}`)
  res.status(StatusCodes.OK).json({ success: true, content: data })
}

export async function getSimilarTvs(req, res) {
  const { id } = req.params

  const data = await fetchTMDB(`/tv/${id}/similar`, 1)
  res.status(StatusCodes.OK).json({ success: true, similar: data.results })
}

export async function getTvsByCategory(req, res) {
  console.log('abc')
  const { category } = req.params

  // tv category can be: [popular, top_rated, on_the_air, airing_today]
  const data = await fetchTMDB(`/tv/${category}`, 1)
  res.status(StatusCodes.OK).json({ success: true, content: data.results })
}

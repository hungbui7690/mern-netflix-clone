import { StatusCodes } from 'http-status-codes'
import { fetchTMDB } from '../services/tmdbServices.js'

export async function getTrendingMovie(req, res) {
  console.log('getTrendingMovie')

  // this will return a list of trending movies
  const data = await fetchTMDB('/trending/movie/day')

  // get a random movie from the list
  const randomMovie =
    data.results[Math.floor(Math.random() * data.results?.length)]

  res.status(StatusCodes.OK).json({ success: true, content: randomMovie })
}

export async function getMovieTrailers(req, res) {
  const { id } = req.params

  // https://api.themoviedb.org/3/movie/{movie_id}/videos
  const data = await fetchTMDB(`/movie/${id}/videos`)
  res.status(StatusCodes.OK).json({ success: true, trailers: data.results })
}

export async function getMovieDetails(req, res) {
  const { id } = req.params

  // https://api.themoviedb.org/3/movie/{movie_id}
  const data = await fetchTMDB(`/movie/${id}`)
  res.status(StatusCodes.OK).json({ success: true, content: data })
}

export async function getSimilarMovies(req, res) {
  const { id } = req.params

  // https://api.themoviedb.org/3/movie/{movie_id}/similar
  const data = await fetchTMDB(`/movie/${id}/similar`, 1)
  console.log(data.results)
  res.status(StatusCodes.OK).json({ success: true, similar: data.results })
}

export async function getMoviesByCategory(req, res) {
  const { category } = req.params

  // category can be: [popular, top_rated, upcoming, now_playing]
  const data = await fetchTMDB(`/movie/${category}`, 1)
  res.status(StatusCodes.OK).json({ success: true, content: data.results })
}

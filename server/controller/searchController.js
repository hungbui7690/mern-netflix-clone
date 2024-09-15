import { StatusCodes } from 'http-status-codes'
import { User } from '../model/User.js'
import { fetchTMDB } from '../services/tmdbServices.js'

export async function searchPerson(req, res) {
  const { query } = req.params

  const response = await fetchTMDB(`/search/person?query=${query}`, 1, true)

  if (response.results.length === 0) throw new NotFoundError('No results found')

  // update the user's search history
  await User.findByIdAndUpdate(req.user._id, {
    $push: {
      searchHistory: {
        id: response.results[0].id,
        image: response.results[0].profile_path,
        title: response.results[0].name,
        searchType: 'person',
        createdAt: new Date(),
      },
    },
  })

  res.status(StatusCodes.OK).json({ success: true, content: response.results })
}

export async function searchMovie(req, res) {
  const { query } = req.params

  const response = await fetchTMDB(`/search/movie?query=${query}`, 1, true)

  if (response.results.length === 0) {
    return res.status(404).send(null)
  }

  // update the user's search history
  await User.findByIdAndUpdate(req.user._id, {
    $push: {
      searchHistory: {
        id: response.results[0].id,
        image: response.results[0].poster_path,
        title: response.results[0].title,
        searchType: 'movie',
        createdAt: new Date(),
      },
    },
  })
  res.status(StatusCodes.OK).json({ success: true, content: response.results })
}

export async function searchTv(req, res) {
  const { query } = req.params

  const response = await fetchTMDB(`/search/tv?query=${query}`, 1, true)

  if (response.results.length === 0) {
    return res.status(404).send(null)
  }

  // update the user's search history
  await User.findByIdAndUpdate(req.user._id, {
    $push: {
      searchHistory: {
        id: response.results[0].id,
        image: response.results[0].poster_path,
        title: response.results[0].name,
        searchType: 'tv',
        createdAt: new Date(),
      },
    },
  })
  res.status(StatusCodes.OK).json({ success: true, content: response.results })
}

export async function getSearchHistory(req, res) {
  // in authMiddleware, we attach the user to the req object, so we can access it here
  // user contains the searchHistory array
  // everytime we search, we push an object to the searchHistory array
  res.status(StatusCodes.OK).json({
    success: true,
    length: req.user.searchHistory.length,
    content: req.user.searchHistory,
  })
}

export async function removeItemFromSearchHistory(req, res) {
  let { id } = req.params
  id = parseInt(id)

  // remove the item from the searchHistory array
  await User.findByIdAndUpdate(req.user._id, {
    $pull: {
      searchHistory: { id: id },
    },
  })

  res
    .status(StatusCodes.OK)
    .json({ success: true, message: 'Item removed from search history' })
}

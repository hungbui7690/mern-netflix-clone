import axios from 'axios'

export const fetchTMDB = async (url, page = '') => {
  const options = {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.TMDB_API_READ_ACCESS_TOKEN,
    },
  }

  if (page) {
    console.log(page)
    page = `&page=${page}`
  }

  const baseURL = `https://api.themoviedb.org/3${url}?language=en-US${page}`
  console.log(baseURL)

  const response = await axios.get(baseURL, options)
  return response.data
}

import axios from 'axios'

export const fetchTMDB = async (url, page = 0, search = false) => {
  const options = {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.TMDB_API_READ_ACCESS_TOKEN,
    },
  }

  let lang = '?language=en-US'

  if (page) {
    console.log(page)
    page = `&page=${page}`
  }

  if (search) {
    lang = '&language=en-US'
    search = '&include_adult=false'
  }

  // /search/person?query=Mike+Nelson?language=en-US&page=1&include_adult=false&api_key=b240ff648bcde8e4e80d32edf567abfc
  // /search/person&query=Mike+Nelson&language=en-US&include_adult=false&page=1?api_key=b240ff648bcde8e4e80d32edf567abfc
  // https://api.themoviedb.org/3/search/person?query=Mike+Nelson&language=en-US&page=1&include_adult=false&api_key=b240ff648bcde8e4e80d32edf567abfc
  const baseURL = `https://api.themoviedb.org/3${url}${lang}${page}${search}`
  console.log(baseURL)

  const response = await axios.get(baseURL, options)
  return response.data
}

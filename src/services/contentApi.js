const cache = {
  movies: null,
  foods: null,
  news: new Map(),
}

const pendingRequests = {}

async function fetchJson(url, key) {
  if (cache[key]) {
    return cache[key]
  }

  if (pendingRequests[key]) {
    return pendingRequests[key]
  }

  pendingRequests[key] = fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`)
      }
      return response.json()
    })
    .then((data) => {
      cache[key] = data
      return data
    })
    .finally(() => {
      delete pendingRequests[key]
    })

  return pendingRequests[key]
}

export async function getMovies() {
  return fetchJson('/movies.json', 'movies')
}

export async function getMoviesBySection(section) {
  const movies = await getMovies()
  return movies.filter((movie) => movie.section === section)
}

export async function getMovieById(id) {
  const movies = await getMovies()
  return movies.find((movie) => String(movie.id) === String(id)) || null
}

export async function getFoods() {
  return fetchJson('/alimentos.json', 'foods')
}

export async function getNews(limit = 5) {
  if (cache.news.has(limit)) {
    return cache.news.get(limit)
  }

  const data = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`)
      }
      return response.json()
    }
  )

  cache.news.set(limit, data)
  return data
}

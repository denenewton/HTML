export const dataMovies = async () => {
  try {
    const response = await fetch(
      'https://62f58457ac59075124d272a8.mockapi.io/api/v1/movie'
    )
    const data = response.json()
    return data
  } catch (e) {
    console.error(e)
  }
}

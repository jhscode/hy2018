import axios from 'axios'

// GET api.giphy.com/v1/gifs?api_key=...&q=cats
const giphyClient = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
  params: {
    api_key: 'al6hW8enSGMDZsMRW83CUYjyhCDhFiPG'
  }
})

const unwrap = payload => payload.data

giphyClient.search = async function(query) {
  try {
    const res = await this.get('/search', {
      params: {
        q: query
      }
    })
    return unwrap(res)
  } catch(e) {
    throw e
  }
}

export default giphyClient;
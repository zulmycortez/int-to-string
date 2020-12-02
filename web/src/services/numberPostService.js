import axios from 'axios'

const numberPostService = (n) => {
  axios.post(`http://localhost:3001/api/numbers/${n}`)
}

export default numberPostService


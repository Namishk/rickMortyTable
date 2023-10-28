import axios from "axios"

const client = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character/",
  headers: {},
})

export default client

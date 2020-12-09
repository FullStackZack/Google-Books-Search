import axios from 'axios'

export default {
  saveBook: function (book) {
    return axios.post("/api/books", book)
  },
  getBooks: function (search) {
    return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search)
  },
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id)
  },
  getAllBooks: function () {
    return axios.get("/api/books")
  }
}
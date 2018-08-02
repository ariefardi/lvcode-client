import Vue from 'vue'
import Vuex from 'vuex'
import swal from 'sweetalert'
import axios from 'axios'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    password: '',
    email: '' ,
    loginStatus: false,
    articles: [],
    pageArticle : '',
    queryAuthor : '',
    articlesByTag: [],
    articlesByAuthor: []
  },
  mutations: {
    setUsername (state, payload) {
      state.username = payload
    },
    setPassword (state, payload) {
      state.password = payload
    },
    setEmail (state, payload) {
      state.email = payload
    },
    setLoginStatus (state, payload) {
      state.loginStatus = payload
    },
    setArticles (state, payload) {
      state.articles = payload
    },
    setPageArticle (state, payload) {
      state.pageArticle = payload
    },
    deleteArticle (state, payload) {
      state.articles.splice(payload, 1)
    },
    setQueryAuthor (state, payload) {
      state.queryAuthor = payload
    },
    setArticlesByTag (state, payload) {
      state.articlesByTag = payload
    },
    setArticlesByAuthor (state, payload) {
      state.articlesByAuthor = payload
      console.log(state.articlesByAuthor, ' ini dari stat')
    },
  },
  actions: {
    login ({commit}) {
      console.log(' login ', this.state.username, this.state.password)
      axios.post('http://localhost:3000/users/login', {
          username: this.state.username,
          password: this.state.password
      })
      .then(({data})=> {
          swal('Succesfully Login')
          // console.log(data.token)
          let token = data.token
          localStorage.setItem('token', token)
          localStorage.setItem('userId', data.found._id)
          localStorage.setItem('username', data.found.username)
          commit('setLoginStatus', true)
          router.push('/')
      })
      .catch(err=> {
          swal('Username/Password salah')
          console.log(err)
      })
    },
    logout ({commit}) {
      localStorage.clear()
      commit('setLoginStatus', false)
    },
    register ({commit}) {
      axios.post('http://localhost:3000/users/register', {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      })
      .then(({data})=> {
        console.log(data)
        router.push('/login')
        swal('berhasil register')
      })
      .catch(err=> {
        console.log(err)
        swal(err.message)
      })
    },
    getArticles ({commit}) {
      axios.get('http://localhost:3000/articles')
      .then(({data})=> {
        let result = data.articles
        commit('setArticles', result)
        console.log(result)
      })
      .catch(err=> {
        console.log(err.message)
      })
    },
    getPageArticle ({commit}, query) {
      // console.log('get one article', query)
      let id = query
      axios.get('http://localhost:3000/articles/'+id)
      .then(({data})=>{
        console.log(data.article)
        commit('setPageArticle', data.article)
      })
    },
    deleteArticle ({commit}, index) {
      let id = this.state.articles[index]._id
      console.log(id)
      commit('deleteArticle', index)
      axios.delete('http://localhost:3000/articles/delete/'+id)
      .then(()=> {
        swal('Berhasil delete')
      })
      .catch(err=> {
        swal('Gagal delete patrick')
      })
    } ,
    searchAuthor ({commit}) {
      let query = this.state.queryAuthor
      router.push('/search/'+query)
    },
    getByAuthor ({commit}, query) {
      console.log(query)
      
      axios.get('http://localhost:3000/articles/author/'+query)
      .then(({data})=> {
        console.log(data, ' ini thor')
        commit('setArticlesByAuthor', data.article)
      })
    },
    getByCategory ({commit}, query) {

      axios.get('http://localhost:3000/articles/category/'+query)
      .then(({data})=> {
        console.log(data,' ini data')
        commit('setArticlesByTag', data.article)
      })
    }
  }
})

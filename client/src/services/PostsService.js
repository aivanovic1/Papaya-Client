import Api from '@/services/Api'

export default {
  fetchPosts () {
    return Api().get('instruments')
  },

  addPost (params) {
    return Api().post('add_post', params)
  },

  updatePost (params) {
    console.log('update post: ', params)
    return Api().put('instruments/' + params.id, params)
  },

  getPost (params) {
    return Api().get('instruments/' + params.id)
  },

  deletePost (id) {
    return Api().delete('instruments/' + id)
  },

  filterPosts (tag) {
    return Api().get('instruments/tag/' + tag)
  },

  searchPosts (query) {
    return Api().get('instruments/search/' + query)
  },
  fetchTags () {
    return Api().get('tags')
  }
}

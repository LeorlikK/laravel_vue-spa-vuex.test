import axios from "axios"
import router from "../../router"

const state = {
    posts: null,
    post: {
        'category': null,
        'id': null,
        'text': null,
        'title': null,
    },
    categories: null
}

const getters = {
    posts: state => {
        return state.posts
    },
    post: state => {
        return state.post
    },
    categories: state => {
        return state.categories
    },
    disabledButton: state => {
        if(state.post.category && state.post.title && state.post.text) return false
        else return true
    }
}

const mutations = {
    setPosts(state, posts){
        state.posts = posts
    },
    setPost(state, post){
        state.post = post
    },
    setCategories(state, categories){
        state.categories = categories
    }
}

const actions = {
    showPost({state,commit,dispatch }, id){
        axios.get(`http://127.0.0.1:8000/api/post/${id}`)
        .then(data => {
            console.log(data)
            commit('setPost', data.data.data)
        })
        .catch(console.error())
    },
    getPosts({commit}){
        axios.get('http://127.0.0.1:8000/api/posts')
        .then(data => {
            console.log(data.data.data)
            commit('setPosts', data.data.data)
        }).catch(error => {
            console.log(error)
        })
    },
    getCategories({commit}){
        axios.get('http://127.0.0.1:8000/api/categories')
        .then(data => {
            commit('setCategories', data.data.data)
            console.log(data.data.data)
        }).catch(error => {
            console.log(error)
        })
    },
    createPost({}, post){
        axios.post('http://127.0.0.1:8000/api/post', 
        {category_id: post.post.category, title: post.post.title, text: post.post.text})
        .then(data => {
            console.log(data.status)
            if(data.status == 201) router.push({name: 'show.post', params: {id: data.data.data.id}})
        }).catch(error => {
            console.log('error')
        })
    },
    editPost({}, post){
        axios.post(`http://127.0.0.1:8000/api/post/${post.post.id}/edit`, 
        {category_id: post.post.category.id, title: post.post.title, text: post.post.text})
        .then(data => {
            console.log(data)
            router.push({name:'posts'})
        })
        .catch(error => {
            console.log(error)
        })
    },
    deletePost({dispatch},id){
        axios.delete(`http://127.0.0.1:8000/api/post/${id}/delete`)
        .then(data => {
            console.log(data)
            dispatch('getPosts')
        })
    }
}

export default {
    state, mutations, getters, actions
}
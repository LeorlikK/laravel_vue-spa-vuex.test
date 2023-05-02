<template>
    <div class="w-25" v-if="categories">
        <label for="exampleFormControlSelect" class="form-label">Category</label>
        <select id="exampleFormControlSelect" class="form-select" aria-label="Default select example" v-model="post.category">
            <option 
            v-for="(category) in categories"
            :key="category.id"
            :value="category.id"
            >{{ category.name }}</option>
        </select>
        
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Title</label>
            <input v-model="post.title" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Title">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
            <textarea v-model="post.text" class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Text"></textarea>
        </div>
        <div class="mb-3">
            <button :disabled="disabledButton" type="submit" class="btn btn-success"
            @click.prevent="$store.dispatch('createPost',
            {post: post}
            )">Add</button>
        </div>
    </div>
    <p>{{post}}</p>
</template>

<script>
import { mapGetters } from 'vuex' 
export default {
    computed: {
        ...mapGetters({
            post: 'post',
            categories: 'categories',
            disabledButton: 'disabledButton',
        })
        // post(){
        //     return this.$store.getters.post
        // },
        // categories(){
        //     return this.$store.getters.categories
        // },
        // disabledButton(){
        //     return this.$store.getters.disabledButton
        // }
    },
    mounted(){
        this.$store.commit('setPost', {id: null, title: null, text: null})
        this.$store.dispatch('getCategories')
    },
}
</script>
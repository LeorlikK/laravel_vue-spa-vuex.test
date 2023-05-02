<template>
<table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col">Category</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <template v-if="posts" v-for="post, key in posts" :key="key">
        <tr>
            <th scope="row">{{ post.id }}</th>
            <td><RouterLink :to="{ name:'show.post', params: {id:post.id }}">{{ post.title }}</RouterLink></td>
            <td>{{ post.category.name }}</td>
            <td><button class="btn btn-success" @click.prevent="updatePost(post.id)">Update</button></td>
            <!-- <td><button class="btn btn-danger" @click.prevent="$store.dispatch('deletePost', post.id)">Delete</button></td> -->
            <td><button class="btn btn-danger" @click.prevent="$store.dispatch('deletePost', post.id)">Delete</button></td>
        </tr>
    </template>
  </tbody>
</table>
</template>

<script>
import router from '../../router'
export default {
    methods:{

        updatePost(id){
            router.push({name: 'edit.post', params:{id: id}})
        },
    },
    computed:{
        posts(){
            return this.$store.getters.posts
        }
    },
    mounted(){
        this.$store.dispatch('getPosts')
    },
}
</script>
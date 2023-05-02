<template>
    <div class="w-25" v-if="post.id">
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Category</label>
            <input type="text" class="form-control" readonly id="exampleFormControlInput1" :placeholder="post.category.name">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Title</label>
            <input type="text" class="form-control disabled" readonly id="exampleFormControlInput1" :placeholder="post.title">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
            <textarea class="form-control disabled" readonly id="exampleFormControlTextarea1" rows="3" :placeholder="post.text"></textarea>
        </div>
    </div>
</template>
<script>

export default {
    mounted(){
        this.$store.dispatch('showPost', this.$route.params.id)
    },
    computed: {
        post(){
            return this.$store.getters.post
        }
    }
}
</script>
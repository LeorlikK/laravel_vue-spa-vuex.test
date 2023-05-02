<template>
    <div class="">
        <RouterLink :to="{ name:'main' }">Main</RouterLink>
        <RouterLink :to="{name:'posts'}">Posts</RouterLink>
        <RouterLink :to="{name:'create.posts'}">Create Posts</RouterLink>
    </div>
    <div>
        <router-view></router-view>
    </div>
</template>
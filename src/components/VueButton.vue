<template>
    <router-link class="button" v-if="type=='int'" :to="link"><slot></slot></router-link>
    <a v-else class="button" :href="link" target="_blank"><slot></slot></a>
</template>

<script>
export default {
    props:{
        link: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
    }
}
</script>

<style>
a.button{
    padding-block: 0.5rem;
    padding-inline: 1rem;
    background-color: lightblue;
    border-radius: 10px;
    color: black;
    margin-inline: 0.5rem;
    font-weight: bold;

    border-style: solid;
    border-width: 3px;
    box-shadow: inset #3a74ec  0px 0px 1px 3px;
}
</style>
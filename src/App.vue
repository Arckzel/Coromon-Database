<script setup>
import MenuVue from "./components/Menu.vue";
import Title from "./components/Title.vue";
</script>

<template>
    <div>
      <Title></Title>
      <MenuVue></MenuVue>
      <router-view :key="$route.fullPath"></router-view>
    </div>
</template>


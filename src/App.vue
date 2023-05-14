<script setup>
import MenuVue from "./components/MainMenu.vue";
import Title from "./components/MainTitle.vue";
</script>

<template>
    <div>
      <Title></Title>
      <MenuVue></MenuVue>
      <router-view :key="$route.fullPath"></router-view>
    </div>
</template>


<script setup>
import MenuVue from "./components/Menu.vue";

</script>

<template>
    <div>
      <div id="title">
        <h1>Coromon Database</h1>
      </div>
      <MenuVue></MenuVue>
      <router-view></router-view>
    </div>
</template>


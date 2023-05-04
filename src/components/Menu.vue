<template>
  <div id="menu">
    <VueButton :link="'/'" :type="'int'">Home</VueButton>
    <VueButton :link="'https://coromon.wiki.gg/wiki/Coromon_Wiki'" :type="'ext'">Official Wiki</VueButton>
    <VueButton :link="'https://www.coromon.com'" :type="'ext'">Official Site</VueButton>
  </div>
</template>

<script>

import VueButton from './VueButton.vue';

export default {

  components: {
    VueButton
  }

}
</script>

<style>

#menu {
    text-align: center;
    margin-block: 1rem;
}

</style>
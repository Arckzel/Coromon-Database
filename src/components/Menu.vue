<template>

  <div id="burguer">
    <a class="button" v-on:click="changeActive()">Menu</a>
  </div>

  <div id="menu" :class="'active-'+(this.active)" >      

    
    <div id="buttons">
      <VueButton :link="'/'" :type="'int'">Home</VueButton>
      <VueButton :link="'https://coromon.wiki.gg/wiki/Coromon_Wiki'" :type="'ext'">Official Wiki</VueButton>
      <VueButton :link="'https://www.coromon.com'" :type="'ext'">Official Site</VueButton>
    </div> 

    <div id="close">
      <a class="button" v-on:click="changeActive()">Close</a>
    </div>

  </div>
</template>

<script>

import VueButton from './VueButton.vue';

export default {

  data(){
    return {
      active: false
    }
  },

  components: {
    VueButton
  },

  methods: {
    changeActive(){
      this.active = !this.active
    }
  }

}
</script>

<style>

#menu{
  text-align: center;
  position: fixed;
  left: 0;
  top: 10%;
  z-index: 1;
  background-color: #0f0560;
  border-style: solid;
  width: 90%;
  height: 80%;
  margin: 5%;
  padding-block: 30%;
  padding-inline: 10%;
  border-radius: 10px;
  box-shadow: inset #3a74ec 0px 0px 0px 6px;
  overflow: scroll;
}

#menu #buttons{
  display: grid;
  overflow: auto;
}

#menu #buttons a.button{
  height: fit-content;
  margin-block: 10px;
}

#burguer{
  width: fit-content;
  margin: auto;
  margin-block: 20px;
}

#close{
  position: fixed;
  top: 17%;
  right: 16%;
}

.active-true{
  display: block;
}

.active-false{
  display: none;
}


@media (min-width: 550px) {
  
  #burguer{
    display: none;
  }

  #menu #buttons{
    display: flex;
  }

  #menu #buttons a.button{
  height: fit-content;
  margin-block: 0px;
}

#close{
  display: none;
}
  
#menu {
  text-align: center;
  margin-block: 1rem;
  display: flex;
  justify-content: center;
  
  position: relative;
  left: 0;
  top: 0;
  z-index: 1;
  background-color: unset;
  width: auto;
  height: auto;
  margin: 2%;
  padding: 0;
  box-shadow: none;
  border-style: none;
}

}
</style>
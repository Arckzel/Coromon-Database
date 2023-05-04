<template>
  <div id="menu">
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>

#menu {
    text-align: center;
    margin-block: 1rem;
}

#menu a{
    padding-block: 0.5rem;
    padding-inline: 1rem;
    background-color: lightblue;
    border-radius: 10px;
    color: black;
    margin-inline: 0.5rem;

    border-style: solid;
    border-width: 3px;
    box-shadow: inset #3a74ec  0px 0px 1px 3px;
}

</style>
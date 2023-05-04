<template>
    <p class="name">{{ coromon.name }}</p>
    <ul class="types">
        <li :class="'type-'+coromon.type">{{ coromon.type }}</li>
    </ul>
    <div class="block-content">
        <div class="info">
        <h3>Base Stats LV</h3>
        <ul class="stats">
            <li><p><span>HP:</span> {{ coromon.base_atk }}</p></li>
            <li><p><span>ATK:</span> {{ coromon.base_atk }}</p></li>
            <li><p><span>DEF:</span> {{ coromon.base_atk }}</p></li>
            <li><p><span>SPE:</span> {{ coromon.base_atk }}</p></li>
        </ul>
        </div>
        <div class="imagem">
            <img :src="'src/files/images/coromon/'+coromon.Image" alt="" srcset="">
        </div>
    </div>
    <router-link class="see" :to="'/coromon/'+coromon.id">See More</router-link>
</template>

<script>
export default {

    props:{
        coromon: {
            type: Object,
            required: true
        }
    }

}
</script>

<style>

/* Nome do Coromon */
#grid ul li .name{
  font-weight: bolder;
  text-transform: uppercase;
  margin-block: 5px;
}

/* Lista de tipos */
#grid ul.types{
  display: grid;
  grid-template-columns: 1fr 1fr;
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Tipos da lista */
#grid ul.types li{
  list-style: none;
  padding-block: 0;
  padding-inline: 1rem;
  margin: 0;
  width: fit-content;
  height: fit-content;
  border-radius: 10px;
  font-weight: 500;
}

/* div da imagem */
div.imagem{
  align-self: center;
}

/* Informações Básicas */
ul.stats{
  margin-block: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

ul.stats span{
  font-weight: 600;
}

.info h3{
  font-weight: bolder;
}

a.see{
  background-color: #ffffff9e;
  color: black;
  padding: 0.3rem;
  margin-block: 1rem;
  
  border-radius: 10px;
  border-style: solid;
  border-width: 3px;
}

a.see:hover{
  background-color: white;
}

@media (min-width: 780px) {
  /* Bloco de conteúdo */
  .block-content{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

}
</style>
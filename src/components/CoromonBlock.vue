<template>
    <p class="name">{{ coromon.name }}</p>
    <ul class="types">
        <li :class="'type-'+coromon.type">{{ coromon.type }}</li>
    </ul>
    <h3>Base Stats</h3>
    <div class="block-content">
        <div class="info">
        <ul class="stats">
            <li><span>HP:</span> <p> {{ coromon.base_hp  }}</p></li>
            <li><span>ATK:</span><p> {{ coromon.base_atk }}</p></li>
            <li><span>DEF:</span><p> {{ coromon.base_def }}</p></li>
            <li><span>SPE:</span><p> {{ coromon.base_spe }}</p></li>
        </ul>
        </div>
        <div class="imagem">
            <!-- <img :src="'src/files/images/coromon/'+coromon.Image" alt="" srcset=""> -->
            <img :src="'src/files/images/coromon/'+coromon.id+'_'+coromon.name+'_A_front.webp'" :alt="coromon.name+' image'" srcset="">
        </div>
    </div>
    <ToCoromonVue :id="coromon.id"></ToCoromonVue>
</template>

<script>
import ToCoromonVue from './ToCoromon.vue'

export default {
  components:{
    ToCoromonVue
  },

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
  font-size: 17px;
}

/* Lista de tipos */
.block ul.types{
  display: grid;
  grid-template-columns: 1fr;
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: left;
}

/* Tipos da lista */
ul.types li{
  list-style: none;
  padding-block: 0;
  padding-inline: 1rem;
  margin: 0;
  width: fit-content;
  height: fit-content;
  border-radius: 10px;
  font-weight: 500;
  border-style: solid;
  border-width: 1px;
  color: white;
  border-color: black;
}

/* div da imagem */
div.imagem{
  display: flex;
  align-self: center;
  height: 150px;
  align-items: flex-end;
}

div.imagem img{
  max-height: 150px;
}

/* Informações Básicas */

.block-content .info{
    display: block;
    overflow: auto;
  }

ul.stats{
  display: flex;
  place-content: space-between;
}

ul.stats li{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: -webkit-fill-available;
  background-color: #6767673b;
  margin: 3px;
  border-radius: 5px;
  padding-inline: 5px;
  border-width: 1px;
  border-style: solid;
  background-color: white;
}

ul.stats span{
  font-weight: 600;
}

h3{
  font-weight: bolder;
}

@media (min-width: 400px) {
  .block-content .info{
    display: none;
  }
}

@media (min-width: 550px){

  .block-content .info{
    display: block;
    overflow: auto;
  }

}

@media (min-width: 780px) {
  /* Bloco de conteúdo */
  .block-content{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  
  /* div da imagem */
  div.imagem{
    align-self: center;  
    position: static;

    position: absolute;
    bottom: -40px;
    left: 80px
  }

  div.imagem img{
    max-height: 200px;
    max-width: 250px;
  }

  ul.stats{
    display: block;
  }

  ul.stats li{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

}
</style>
<template>
  <div id="content">
    <div>
      <div id="grid">
        <ul class="datas">
          <li v-for="coromon in coromons" :key="coromon.id" :class="'block '+coromon.type">
            <CoromonBlock :coromon="coromon"></CoromonBlock>
          </li>
        </ul>

      </div>
    </div>
  </div>
</template>



<style>

ul{
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Titulo da aplicação */
#title {
  text-align: center;
  margin-bottom: 30px;
}

/* Grade de colunas */
#grid ul.datas{
  display: grid;
  grid-template-columns: 1fr 1fr;
}

/* Bloco de conteúdo */
.block-content{
  display: flex;
  flex-direction: column-reverse;
}

/* Bloco de Coromon */
#grid ul.datas li.block{
  padding: 1rem;
  width: 95%;
  margin: auto;
  margin-block: 0.5rem;
  border-radius: 10px;
}



@media (min-width: 780px) {
  /* Grade de colunas */
  #grid ul.datas{
    grid-template-columns: 1fr 1fr 1fr;
  }

  /* Bloco de conteúdo */
  .block-content{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1020px) {
  /* Grade de colunas */
  #grid ul.datas{
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

}

</style>

<script>
import CoromonBlock from '../components/CoromonBlock.vue';

export default{

  components: {
    CoromonBlock
  },

  data() {
        return {
            coromons: null,
            types: null,
            titans: null
        }
    },

    methods: {        
        getCoromons(){
            fetch("./src/files/data/coromon.json")
            .then((response) => response.json())
            .then((json) => this.coromons = json);            
        },
        
        getTypes(){
            fetch("./src/files/data/type.json")
            .then((response) => response.json())
            .then((json) => this.types = json); 
        },
        
        getTitans(){
            fetch("./src/files/data/titan.json")
            .then((response) => response.json())
            .then((json) => this.titans = json); 
        }
    },

    mounted(){
        this.getCoromons()
        this.getTypes()
        this.getTitans()
    }

}


</script>
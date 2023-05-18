<template>
  <div id="content">
    <div id="body">
      <div id="top-bar">
        <div id="search-bar">
          <input type="text" name="" id="search" v-model="term" v-on:keyup="search(this.term)" placeholder="Search a Coromon">
          <!-- <a class="button" v-on:click="search(this.term)">Search</a> -->
        </div>

        <div id="pagination-1" class="pagination" >
            <a id="paginate-left" class="button" v-if="this.page > 0" v-on:click="paginate(this.page-1)">{{ this.page }}</a>
            <a v-else class="button disabled"> 0 </a>
            <h3>Page {{ this.page+1 }} of {{ this.pages }}</h3>
            <a id="paginate-right" class="button" v-if="this.page < this.pages-1" v-on:click="paginate(this.page+1)" >{{ this.page+2 }}</a>
            <a v-else class="button disabled"> {{ this.pages+1 }} </a>
          </div>

        <div id="filters">
          <select name="" id="select-quantity" v-on:change="paginate(0)" v-model="this.quantity">
            <option :value="4">Show 4</option>
            <option :value="8">Show 8</option>
            <option selected :value="12">Show 12</option>
            <option :value="25">Show 25</option>
            <option :value="50">Show 50</option>
          </select>
  
          <select name="" id="select-type" v-on:change="filterByType(this.type)" v-model="this.type">
            <option selected value="All" class="Normal"> 
              <div>
                <img src="/favicon.ico" alt="">
                <p>All</p>
              </div> 
            </option>
            <option v-for="coromonType in types" :key="coromonType.id" :value="coromonType.name" :class="coromonType.name">{{ coromonType.name }}</option>
          </select>
        </div>

        <div id="pagination-2" class="pagination" >
          <a id="paginate-left" class="button" v-if="this.page > 0" v-on:click="paginate(this.page-1)">{{ this.page }}</a>
          <a v-else class="button disabled"> 0 </a>
          <h3>Page {{ this.page+1 }} of {{ this.pages }}</h3>
          <a id="paginate-right" class="button" v-if="this.page < this.pages-1" v-on:click="paginate(this.page+1)" >{{ this.page+2 }}</a>
          <a v-else class="button disabled"> {{ this.pages+1 }} </a>
        </div>

      </div>
      <div id="grid">
        <ul v-if="this.coromons.length > 0" class="datas">
          <li v-for="coromon in coromons" :key="coromon.id" :class="'block '+coromon.type">
            <CoromonBlock :coromon="coromon"></CoromonBlock>
          </li>
        </ul>
        <div id="noFound" v-else>
          <h1>No Coromon found!</h1>
          <a class="button" v-on:click="this.reload()">Reload</a>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import VueButton from '../components/VueButton.vue';
import CoromonBlock from '../components/CoromonBlock.vue';

export default{

  components: {
    CoromonBlock,
    VueButton
  },

  data() {
        return {
            term: "",
            coromons: [],
            allCoromons: [],

            pages: 0,
            page: 0,

            quantity: 12,
            filter: [],

            type: "All",
            types: [],
            titans: null
        }
    },

    methods: {        
        getCoromons(){
            fetch("./data/coromon.json")
            .then((response) => response.json())
            .then((json) => {
              this.allCoromons = json,
              this.filter = json,
              this.paginate(0),
              this.pages = Math.ceil(this.filter.length/this.quantity)
            }) 
        },

        getTypes(){
            fetch("./data/type.json")
            .then((response) => response.json())
            .then((json) => {
              this.types = json
            }) 
        },

        filterByName(name){
            // Ordenar por ordem alfabetica

            // for(var c = 0; c < this.allCoromons.length; c++){

            //   var coromon = this.allCoromons[c]

            //   if(coromon.name.includes(name)){
            //     this.coromons.push(coromon)
            //   }

            // }
          
        },

        filterByType(type){
          if(type != "All"){
            this.term = ""
            this.filter = []
            for(var c = 0; c < this.allCoromons.length; c++){  
              var coromon = this.allCoromons[c]
              
              if(coromon.type == type){
                this.filter.push(coromon)
              }
              
            }

            // var newFilter = []
            // for(var c = 0; c < this.filter.length; c++){  
            //   var coromon = this.filter[c]
              
            //   if(coromon.type == type){
            //     newFilter.push(coromon)
            //   }
              
            // }
            // this.filter = newFilter

            this.paginate(0)
            
          }else{
            this.reload()
          }
            
        },

        paginate(page){
          // const quantityPages = Math.ceil(this.allCoromons/quantity)
          this.coromons = []
          for(var c = 0; c < this.quantity; c++){
              var index = c+(this.quantity*page)
              var coromon = this.filter[index]
              if(index<this.filter.length && coromon != null){
                this.coromons.push(coromon)
              }
          }
          this.pages = Math.ceil(this.filter.length/this.quantity)
          this.page = page          
        },


        search(term){ 
          if(term == ""){
            this.reload()
          }else if(isNaN(term)){  
            if(term.length > 2){
              this.filter = this.searchByName(term)
            }
          }else{
            if(term >= 0 && term < this.allCoromons.length){
              this.filter = this.searchById(term)
            }          
          }
          this.paginate(0)
        },

        searchByName(term){
          var newCoromons = []           
          for(var c = 0; c < this.allCoromons.length; c++){
            var coromon = this.allCoromons[c]
            if(coromon.name.toLowerCase().includes(term.toLowerCase())){
              newCoromons.push(this.allCoromons[c])
            }
          }
          return newCoromons
        },

        searchById(term){
          var newCoromons = []
          for(var c = 0; c < this.allCoromons.length; c++){
            var coromon = this.allCoromons[c]
            if(coromon.id == term){
              newCoromons.push(this.allCoromons[c])
            }
          }
          return newCoromons
        },

        reload(){
          this.term = ""
          this.filter = this.allCoromons
          this.paginate(0)
        }

    },

    mounted(){
        this.getCoromons();
        this.getTypes()
    }

}


</script>


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
  grid-template-columns: 1fr;
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
  overflow: hidden;
  position: relative;
}


#search-bar{
  display: grid;
  align-items: center;
}

#search-bar input{
  width: 100%;
  height: 40px;
  padding-inline: 10px;
  text-align: center;

  border-style: solid;
  border-radius: 10px;
  border-color: black;
  box-shadow: inset #3a74ec 0px 0px 1px 3px;

  font-weight: 900;
  text-transform: uppercase;
}

#search-bar a{
  margin-block: 10px;
  margin-inline: auto;
  width: fit-content;  
}

.pagination{
  display: flex;
  text-align: center;
  margin-block: 10px;
  justify-content: space-evenly;
  align-items: center;
  max-width: fit-content;
  margin-inline: auto;
  grid-column-start: 1;
  grid-column-end: 3;
}

#filters{
  margin-block: 10px;
  display: flex;
  justify-content: center;
}

#filters select{
  border-style: solid;
  border-radius: 10px;
  border-color: black;
  box-shadow: inset #3a74ec 0px 0px 1px 3px;
  padding: 12px;
  background-color: lightblue;
  font-weight: 900;
  margin-inline: 5px;
}

#filters select option{
  font-weight: 900;
}

.pagination a.button.disabled{
  background-color: gray;
  box-shadow: inset #14316f 0px 0px 1px 3px;
}

.pagination h3{
  background-color: #b889eb00;
  padding-inline: 20px;
  padding-block: 5px;
  border-radius: 10px;
  border-style: solid;
  box-shadow: inset #ffffff 0px 0px 1px 3px;
  border-color: black;
  color: white;
  text-shadow: 0px 0px 9px white;
}

#pagination-1{
  display: none;
}

#noFound{
  text-align: center;
}

#noFound h1{
  margin-block: 30px;
}

@media (min-width: 400px) {
  #grid ul.datas{
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 550px) {

  #top-bar{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 5px;
    max-width: fit-content;
    margin-inline: auto;
  }

  #top-bar select{
    margin-inline: 5px;
  }

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

@media (min-width: 780px){

  #top-bar{
    display: grid;
    justify-content: flex-start;
    column-gap: 5px;
    max-width: fit-content;
    margin-inline: auto;
    align-content: center;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .pagination{
    display: flex;
    text-align: center;
    margin-block: 10px;
    justify-content: space-evenly;
    align-items: center;
    max-width: fit-content;
    margin-inline: auto;
    grid-column-start: 2;
  }

  #pagination-1{
    display: flex;
  }

  #pagination-2{
    display: none;
  }

}

@media (min-width: 1020px) {
  /* Grade de colunas */
  #grid ul.datas{
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

}

</style>
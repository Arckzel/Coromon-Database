
<template>
    <div>
        <a href="#" @click="getCoromons">Carregar Coromons</a>
    </div>
</template>

<script>
export default {

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



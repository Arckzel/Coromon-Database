<template>
    <div v-if="coromon != null">

        <div id="page">

            <div id="coromon-name">
                <h1>{{ coromon.name }}</h1>
            </div>

            <div class="coromon-data">
                <CoromonGallery :coromon="coromon" @new_rarity="(newRarity) => current_rarity = newRarity"></CoromonGallery>
                <CoromonInfo :coromon="coromon" :rarity="current_rarity"></CoromonInfo>
            </div>
        </div>

    </div>

    <div id="not-found" v-else>
        <h1>Sorry! </h1>
        <h2>Coromon not found. :{{"("}}</h2>
    </div>

</template>

<script>
import CoromonGallery from '../components/CoromonGallery.vue';
import CoromonInfo from '../components/CoromonInfo.vue'

export default{
    
    components: { 
        CoromonGallery,
        CoromonInfo
    },

    data(){
        return {
            coromon: null,
            current_rarity: "Normal",
            isEnabledDetails: false
        }
    },

    methods:{
        getCoromonById(){
            fetch("../src/files/data/coromon.json")
            .then((response) => response.json())
            .then((json) => this.coromon = json[this.$route.params.id-1]);
        },
    },
    mounted(){
        this.getCoromonById()
    }

}

</script>

<style>

#not-found {
    text-align: center;
    margin-block: 50px;
}

#not-found h1{
    text-transform: uppercase;
    font-weight: bolder;
    font-size: 30px;
}

#not-found h2{
    font-size: 25px;
}

#page #coromon-name{
    text-align: center;
    margin-block: 2rem;
}

#page #coromon-name h1{
    font-weight: bolder;
    text-transform: uppercase;
}


@media (min-width: 780px){
    
    #page .coromon-data{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

}

</style>
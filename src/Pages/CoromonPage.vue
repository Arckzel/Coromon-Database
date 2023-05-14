<template>

    <div class="message" v-if="current == ''">
        <h1>Loading...</h1>
        <h2>Petting Coromon, please wait!</h2>
    </div>

    <div v-else-if="current != null">

        <div id="page">

            <div id="coromon-navigation">
                <div id="previous" class="arrow">
                    <h4><router-link class="see" :to="'/coromon/'+previous.id"> {{ "<" }} {{ previous.name }}</router-link></h4>
                </div>
                <div id="coromon-name">
                    <h1>{{ current.name }}</h1>
                </div>
                <div id="next" class="arrow">
                    <h4><router-link class="see" :to="'/coromon/'+next.id"> {{ next.name }} {{ ">" }} </router-link></h4>
                </div>
            </div>

            <div class="coromon-data">
                <CoromonGallery :coromon="current" @new_rarity="(newRarity) => current_rarity = newRarity"></CoromonGallery>
                <CoromonInfo :coromon="current" :rarity="current_rarity"></CoromonInfo>
            </div>
        </div>

    </div>

    <div class="message" v-else>
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
            current: '',
            current_rarity: "Normal",
            previous: null,
            next: null,
            last: null,
        }
    },

    methods:{

        getCurrent(){            
            fetch("../src/files/data/coromon.json")
            .then((response) => response.json())
            .then((json) => {
                    this.current = json[this.$route.params.id-1]

                    if(this.current.id == 1){
                        this.previous = json[json.length-1]
                    }else{
                        this.previous = json[parseInt(this.current.id) - 2]
                    }

                    if(this.current.id == json.length){
                        this.next = json[0]
                    }else{
                        this.next = json[parseInt(this.current.id)]
                    }

                }
            )
        },

    },
    mounted(){
        this.getCurrent()        
    }

}

</script>

<style>

.message {
    text-align: center;
    margin-block: 50px;
}

.message h1{
    text-transform: uppercase;
    font-weight: bolder;
    font-size: 30px;
}

.message h2{
    font-size: 25px;
}

#page #coromon-navigation{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

#page #coromon-navigation .arrow{
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    font-size: 15px;
}

#page #coromon-navigation .arrow h4{
    font-weight: bold;
}

#page #coromon-navigation #previous{
    justify-content: start;
}

#page #coromon-navigation #next{
    justify-content: end;
}

#page #coromon-navigation #coromon-name{
    text-align: center;
    margin-block: 2rem;
}

#page #coromon-navigation #coromon-name h1{
    font-weight: bolder;
    text-transform: uppercase;
    font-size: 15px;
}

@media (min-width: 550px){

    #page #coromon-navigation .arrow{
        font-size: 20px;
    }

    #page #coromon-navigation #coromon-name h1{
        font-size: 25px;
    }
}

@media (min-width: 780px){
    
    #page .coromon-data{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

}

</style>
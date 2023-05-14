<template>
    <div id="gallery">

        <div id="content">            
            <div id="navigation">
                <a v-if="current_rarity == 'Potent' || current_rarity == 'Perfect'" class="arrow" @click.prevent="changeRarity('<')" >{{ "<" }}</a>
                <p v-else ></p>
                <h3 class="rarity">{{ current_rarity }}</h3>
                <a v-if="current_rarity == 'Normal' || current_rarity == 'Potent'" class="arrow" @click.prevent="changeRarity('>')" >{{ ">" }}</a>
                <p v-else ></p>
            </div>
            
            <div class="image-div">
                <img :src="'../images/coromon/'+coromon.id+'_'+coromon.name+'_'+rarity_letter+'_front.webp'" :alt="coromon.name+' image '+current_rarity">                
            </div>            
        </div>

        <ul class="types">
            <li :class="'type-'+coromon.type">{{ coromon.type }}</li>
        </ul>
        
    </div>
</template>


<script>
import VueButtonVue from './VueButton.vue'

export default{

    data(){
        return{
            current_rarity: "Normal",
            rarity_letter: "A"
        }
    },

    components: {
        VueButtonVue
    },

    props: {
        coromon: {
            type: Object,
            required: true
        }
    },

    methods: {
        changeRarity(side){
            if(side == '<'){
                this.current_rarity = this.current_rarity == 'Potent' ? "Normal" : "Potent"
                this.rarity_letter = this.current_rarity == 'Potent' ? "B" : "A"
            }else{
                this.current_rarity = this.current_rarity == 'Normal' ? "Potent" : "Perfect"
                this.rarity_letter = this.current_rarity == 'Potent' ? "B" : "C"
            }
            this.$emit('new_rarity',this.current_rarity)
        }
    }

}

</script>


<style>

#gallery div#content{
    text-align: center;
    background-image: url('../images/database/background.webp');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding-top: 1rem;
    border-style: solid;
    border-radius: 10px;
    border-width: 3px;
    margin: auto;
    min-height: 360px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

#navigation {
    display: grid;
    grid-template-columns: 100px 1fr 100px;
    color: #ffc98e;
    text-shadow: 0 0 10px white;
}

#navigation a{
    cursor: pointer;
}

.arrow{
    font-weight: bolder;
    font-size: 20px;
}

.rarity {
    text-transform: uppercase;
    align-self: center;
}

.image-div{
    margin-top: 5rem;
    position: relative;
}

#gallery ul.types{
    margin-block: 20px;
    display: flex;
    justify-content: center;
}

#gallery ul.types li{
    /* margin-top: 20px; */
    margin-right: 10px; 
}

</style>
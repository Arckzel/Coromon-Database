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
                <img :src="'../src/files/images/coromon/'+coromon.id+'_'+coromon.name+'_'+rarity_letter+'_front.webp'" :alt="coromon.name+' image normal'">                
                <div id="shadow"></div>
            </div>

            <ul class="types">
                <li :class="'type-'+coromon.type">{{ coromon.type }}</li>
            </ul>

            <div id="buttons">
                <VueButtonVue :link="'https://coromon.wiki.gg/wiki/'+coromon.name.toLowerCase()" :type="'ext'">Wiki</VueButtonVue>
            </div>

        </div>
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
    background: radial-gradient(#ffffff1f, #c3c4c8);
    padding-top: 1rem;
    padding-bottom: 3rem;
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
}

#navigation a{
    cursor: pointer;
}

.arrow{
    color: black;
    font-weight: bolder;
    font-size: 20px;
}

.rarity {
    text-transform: uppercase;
}

.image-div{
    margin-top: 2rem;
    position: relative;
}

div#shadow{
    width: 40%;
    height: 0px;
    border-radius: 50px;
    margin: auto;
    box-shadow: #656464 0px 0px 20px 8px;
    background-color: #656464;
}

#gallery ul.types li{
    margin-top: 20px;
    margin-inline: auto;
}

#gallery #buttons{
    margin-top: 20px;
}

</style>
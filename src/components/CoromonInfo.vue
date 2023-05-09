<template>
  <div id="coromon-info">
    <div id="info-content">
        <div id="base">
            <div id="head">
                <h3>Base Stats</h3>
            </div>
            <div id="body">
                <ul>
                    <li>
                        <h4>HP: </h4>
                        <p>{{ coromon.base_hp }}</p>
                    </li>
                    <li>
                        <h4>SPE: </h4>
                        <p>{{ coromon.base_spe }}</p>
                    </li>
                    <li>
                        <h4>ATK: </h4>
                        <p>{{ coromon.base_atk }}</p>
                    </li>
                    <li>
                        <h4>DEF: </h4>
                        <p>{{ coromon.base_def }}</p>
                    </li>
                    <li>
                        <h4>SP.A</h4>
                        <p>{{ coromon.base_sp_a }}</p>
                    </li>
                    <li>
                        <h4>SP.D</h4>
                        <p>{{ coromon.base_sp_a }}</p>
                    </li>
                    <li>
                        <h4>SP</h4>
                        <p>{{ coromon.base_sp }}</p>
                    </li>
                </ul>
            </div>
        </div>
        <div id="max">
            <div id="head">
                <h3>Max Stats</h3>
            </div>
            <div id="body">
                <ul>
                    <li>
                        <h4>HP: </h4>
                        <p>{{ coromon.max_hp }}</p>
                    </li>
                    <li>
                        <h4>SPE: </h4>
                        <p>{{ coromon.max_spe }}</p>
                    </li>
                    <li>
                        <h4>ATK: </h4>
                        <p>{{ coromon.max_atk }}</p>
                    </li>
                    <li>
                        <h4>DEF: </h4>
                        <p>{{ coromon.max_def }}</p>
                    </li>
                    <li>
                        <h4>SP.A</h4>
                        <p>{{ coromon.max_sp_a }}</p>
                    </li>
                    <li>
                        <h4>SP.D</h4>
                        <p>{{ coromon.max_sp_a }}</p>
                    </li>
                    <li>
                        <h4>SP</h4>
                        <p>{{ coromon.max_sp }}</p>
                    </li>
                </ul>
            </div>
        </div>


    </div>

  </div>
</template>

<script>
export default {

    props: {
        coromon: {
            type: Object,
            required: true
        },

        rarity: {
            type: String,
            required: true
        },

    }

}
</script>

<style>

    #coromon-info{
        margin-block: 2rem;
    }
    
    #coromon-info #info-content{
        display: grid;
        padding: 20px;
        background-color: #ffffffad;
        border-style: solid;
        border-width: 3px;
        border-radius: 10px;
    }

    #coromon-info #info-content #base{
        margin-bottom: 1rem;
    }

    #coromon-info #info-content div#head h3{
        text-align: center;
        margin-bottom: 1rem;
    }

    #coromon-info #info-content #body li h4{
        font-weight: bolder;
    }

    #coromon-info #info-content ul{

        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;

    }

    #coromon-info #info-content ul li{
        display: flex;

    }

    @media (min-width: 780px){
        #coromon-info{
            margin-block: 0px;
            margin-inline: 20px;
        }

        #coromon-info #info-content ul{

            grid-template-columns: 1fr 1fr 1fr;

        }
        
    }

</style>
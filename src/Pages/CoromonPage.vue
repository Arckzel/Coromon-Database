<template>
    <div>
        <p>{{ coromon.name }}</p>
    </div>
</template>

<script>

export default{

    data(){
        return {
            coromon: {}
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
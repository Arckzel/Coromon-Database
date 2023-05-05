<template>
    <div class="see-div">
        <router-link class="see" :to="'/coromon/'+id">See More</router-link>
    </div>
</template>

<script>

export default{

    props: {
        id: {
            type: String,
            required: true
        }
    }

}

</script>

<style>

.see-div{
  text-align: center;
  margin-top: 30px;
  margin-bottom: 10px;
}

a.see{
  background-color: #ffffff9e;
  box-shadow: inset #bebebe 0px 0px 0px 3px;
  color: black;
  padding: 0.3rem;
  font-weight: 700;
  
  border-radius: 10px;
  border-style: solid;
  border-width: 3px;
}

a.see:hover{
  background-color: white;
}

@media (min-width: 780px){
    .see-div{
    text-align: left;
  }
}


</style>
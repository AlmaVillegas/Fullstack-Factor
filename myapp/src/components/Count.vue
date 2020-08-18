<template>
<div>
 <v-row justify="center">
      <h4 class="display-2 font-weight-bold mb-3">
          Exercise 1
      </h4>
    </v-row>
      <v-row justify="center">
       <h3>
         Este ejercicio se ve desde la consola del navegador   
       </h3>
    </v-row>
</div>
</template>
<script>
export default {
    data(){
        return{
        }
    },
    methods:{
        count(){
          this.data = console.count()
        }
    },
    mounted: function (){
     this.count()
     this.count()
     this.count()
    }
    
}
</script>
<style scoped>

</style>
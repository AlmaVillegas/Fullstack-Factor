<template>
<div>
     <v-row justify="center">
      <h2 class="display-2 font-weight-bold mb-3">
          Exercise 2
      </h2>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="6">
       <v-text-field
          v-model="text"
          label="Palindromo?"
          outlined
          shaped
       ></v-text-field>
      </v-col>
      </v-row>
    <v-row justify="center">
       <v-btn color="primary" @click="Palindromo()">Verify</v-btn>
    </v-row>
    <v-row justify="center">
       <div class="mt-4 text-center">
          {{ result }}
     </div>
    </v-row>
</div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            text:'',
            result:''
        }
    },
    methods:{
        Palindromo(){
              axios.post("http://localhost:3000/palindromo", {
               text: this.text
              }).then(response => {             
              this.result = response.data
          });
        }
    }
    
}
</script>
<style scoped>

</style>


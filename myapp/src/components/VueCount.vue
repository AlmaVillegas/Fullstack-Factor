<template>
  <div> 
  <v-container>
    <v-row justify="center">
      <h1 class="display-2 font-weight-bold mb-3">
          Exercise 3
      </h1>
    </v-row>
    <v-row justify="center">
      <v-btn v-on:click="count++">Count</v-btn>
    </v-row>
    <v-row justify="center"> 
      <h2 class="display-2 font-weight-bold mb-3">
        {{ this.count }}
      </h2>
    </v-row>
  </v-container>
  </div>
</template>
<script>
export default {
 data(){
    return{
      count: 0
    }
 },
}
</script>
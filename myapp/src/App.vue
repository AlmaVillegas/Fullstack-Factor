<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
         <span class="mr-2">Factor Conecta</span>
      </div>
    </v-app-bar>

    <v-main>
      <Count/>
      <v-spacer></v-spacer>
      <Palindromo/>
      <v-spacer></v-spacer>
      <VueCount/>
    </v-main>
  </v-app>
</template>

<script>
import Count from './components/Count'
import Palindromo from './components/Palindromo'
import VueCount from './components/VueCount'

export default {
  name: 'App',

  components: {
    Count,
    Palindromo,
    VueCount
  },

  data: () => ({
    //
  }),
};
</script>

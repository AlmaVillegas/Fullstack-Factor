<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
         <span class="mr-2">Ejercicios</span>
      </div>
    </v-app-bar>

    <v-main>
      <VueCount/>
    </v-main>
  </v-app>
</template>

<script>
import VueCount from './components/VueCount'

export default {
  name: 'App',

  components: {
    VueCount
  },

  data: () => ({
    //
  }),
};
</script>

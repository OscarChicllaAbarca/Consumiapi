<template>
  <div>
    <Navbar v-if="!isLoginPage" /> <!-- Muestra el Navbar solo si no estamos en la vista de Login -->

    <router-view v-if="isLoginPage" /> <!-- Muestra el LoginView -->
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'; // Asegúrate de que la ruta sea correcta
import { computed } from 'vue';
import { useRoute } from 'vue-router'; // Importa useRoute

export default {
  components: {
    Navbar
  },
  setup() {
    const route = useRoute(); // Acceder a la ruta actual
    const isLoginPage = computed(() => {
      return route.name === 'Login'; // Verifica si la ruta es la de Login
    });

    return {
      isLoginPage,
    };
  }
}
</script>

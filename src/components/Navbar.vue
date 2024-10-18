<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-success">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Toma</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/listar_toma" class="nav-link" href="#">Lista</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Toma" class="nav-link" href="#">Carga</router-link>
          </li>
          <li class="nav-item">
            <button class="btn btn-danger ml-auto" @click="logout">Cerrar sesión</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    <div class="container-fluid mt-3">
      <router-view/>
    </div>
  </template>

<script>
export default {
  methods: {
    logout() {
      // Aquí puedes agregar la lógica para cerrar sesión, como eliminar el token o la información del usuario
      // Luego redirige a la página de inicio de sesión
      localStorage.removeItem('token'); // Elimina el token de local storage
      this.$router.push('/'); // Redirige a la vista de login
    }
  }
}
</script>
  
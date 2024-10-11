
<template>
    <div class="row">
      <div class="col-lg-8 offset-lg-2">
        <div class="table-responsive">
          <table class="table table-bordered table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>NOMBRE</th>
                <th>DESCRIPCIÓN</th>
                <th>PRECIO</th>
                <th>ACCIONES</th>
              </tr>
            </thead>
            <tbody class="table-group-divider" id="contenido">
              <tr v-for="(prod, i) in productos" :key="prod.id">
                <td>{{ i + 1 }}</td>
                <td>{{ prod.name }}</td>
                <td>{{ prod.description }}</td>
                <td>${{ new Intl.NumberFormat('es-mx').format(prod.price) }}</td>
                <td>
                  <router-link :to="{ path: 'edit/' + prod.id }" class="btn btn-warning">
                    <i class="fa-solid fa-edit"></i>
                  </router-link> &nbsp;
                  <button class="btn btn-danger">
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        productos: [
          // Aquí deberías incluir tu lista de productos
          { id: 1, name: 'Producto 1', description: 'Descripción 1', price: 100 },
          { id: 2, name: 'Producto 2', description: 'Descripción 2', price: 200 },
          // etc.
        ],
      };
    },
  };
  </script>
  
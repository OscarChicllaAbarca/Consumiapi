<template>
  <div class="container" >
    <!-- Formulario o tabla a la izquierda -->
    <div class="main-content">
      <h2>Listado de Productos</h2>
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Producto</th>
            <th>Descripción de Producto</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index" @click="selectRow(item)" :class="{ selected: selectedItem === item }">
            <td>{{ index + 1 }}</td>
            <td>{{ item.producto }}</td>
            <td>{{ item.descripcionProducto }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Detalles seleccionados al lado derecho -->
    <div class="details-panel" v-if="selectedItem" ref="detailsPanel" @click.self.stop>
      <h2>Detalles del Producto</h2> <button class="close-btn" @click="closePanel">Cerrar</button>
      
      <!-- Botón para cerrar el panel -->
      

      <form @submit.prevent="submitForm" class="details-form">
        <!-- Campos principales -->
        <label for="fecha_toma">Fecha Toma:</label>
        <input type="date" v-model="selectedItem.fechaToma" required disabled>

        <label for="ubicacion">Ubicación:</label>
        <input type="text" v-model="selectedItem.ubicacion" required placeholder="00-00-000-000" disabled>

        <label for="producto">Producto:</label>
        <input type="text" v-model="selectedItem.producto" @input="buscarProducto" required readonly>

        <label for="descripcionProducto">Descripción de Producto:</label>
        <input type="text" v-model="selectedItem.descripcionProducto" required readonly>

        <!-- Botón para mostrar más campos -->
        <button @click="toggleFields" type="button" class="btn btn-primary">
          <i class="fa" :class="showFields ? 'fa-minus' : 'fa-plus'"></i>
        </button>

        <!-- Campos adicionales -->
        <div v-if="showFields" class="form-fields mt-3">
          <label for="cantidad">Cantidad (Q):</label>
          <input type="number" v-model="selectedItem.cantidad" required disabled>

          <label for="centro">Centro:</label>
          <select v-model="selectedItem.centro" required class="form-select" disabled>
            <option value="">Seleccione un centro</option>
            <option value="C080">C080</option>
            <option value="C152">C152</option>
            <option value="C154">C154</option>
            <option value="C200">C200</option>
            <option value="C201">C201</option>
          </select>

          <label for="lote">Lote:</label>
          <select v-model="selectedItem.lote" class="form-select" disabled>
            <option value="">Seleccione un lote</option>
            <option value="Reparado">Reparado</option>
            <option value="Nuevo">Nuevo</option>
            <option value="Garantia">Garantía</option>
            <option value="Observado">Observado</option>
          </select>

          <label for="unidad_medida_base">Unidad de Medida Base:</label>
          <input type="text" v-model="selectedItem.unidadMedidaBase" required readonly>

          <label for="codigo_invent">Código de Inventario:</label>
          <input type="text" v-model="selectedItem.codigoInventario" required disabled>

          <!-- Campos adicionales que se muestran solo al desplegar -->
          <label for="observacion">Observación:</label>
          <input type="text" v-model="selectedItem.observacion" id="observacion" class="form-control" disabled>

          <label for="medida">Medida:</label>
          <input type="text" v-model="selectedItem.medida" id="medida" class="form-control" disabled>

          <label for="fecha_venc">Fecha de Vencimiento:</label>
          <input type="date" v-model="selectedItem.fechaVencimiento" id="fecha_venc" class="form-control" disabled>
        </div>

        <!-- Botones Editar y Eliminar -->
        <div class="button-group mt-3">
          <button class="btn edit-btn" @click="editItem" type="button">Editar</button>
          <button class="btn delete-btn" @click="deleteItem" type="button">Eliminar</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      items: [
        {
          producto: 'Producto 1',
          descripcionProducto: 'Descripción del producto 1',
          fechaToma: '2024-10-10',
          ubicacion: '00-00-001-001',
          cantidad: 10,
          centro: 'C080',
          lote: 'Nuevo',
          unidadMedidaBase: 'KG',
          codigoInventario: 'INV001',
          observacion: 'Ninguna',
          medida: 'M',
          fechaVencimiento: '2025-12-01',
        },
        {
          producto: 'Producto 2',
          descripcionProducto: 'Descripción del producto 2',
          fechaToma: '2024-10-11',
          ubicacion: '00-00-002-002',
          cantidad: 20,
          centro: 'C152',
          lote: 'Reparado',
          unidadMedidaBase: 'LT',
          codigoInventario: 'INV002',
          observacion: 'Reparado',
          medida: 'L',
          fechaVencimiento: '2026-06-15',
        }
      ],
      selectedItem: null,
      showFields: false  // Para controlar la visualización de los campos adicionales
    };
  },
  methods: {
    selectRow(item) {
      this.selectedItem = item;
    },
    toggleFields() {
      this.showFields = !this.showFields;
    },
    submitForm() {
      // Aquí va la lógica de envío si fuera necesaria
    },
    buscarProducto() {
      // Simulación de búsqueda de producto
      alert("Buscando producto...");
    },
    editItem() {
      alert("Editando el producto: " + this.selectedItem.producto);
    },
    deleteItem() {
      alert("Eliminando el producto: " + this.selectedItem.producto);
    },
    closePanel() {
      this.selectedItem = null; 
    },
    closePanelOutside(event) {
      // Cerrar el panel si se hace clic fuera del panel de detalles
      if (!this.$refs.detailsPanel || !this.$refs.detailsPanel.contains(event.target)) {
        this.selectedItem = null;
      }
    }
  }
};
</script>



<style scoped>
.close-btn {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 15px;
  float: right;
}

.close-btn:hover {
  background-color: #c82333;
}
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  background-color: #f9f9f9;
}

/* Contenedor principal */
.main-content {
  flex: 1;
  min-width: 300px;
}

/* Estilo para la tabla */
.table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.table th, .table td {
  padding: 12px;
  border: 1px solid #ddd;
  text-align: left;
}

.table tr:hover {
  background-color: #f0f0f0;
  cursor: pointer;
}

.table tr.selected {
  background-color: #d1ecf1;
}

/* Panel de detalles a la derecha */
.details-panel {
  flex: 1;
  min-width: 300px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.details-panel h3 {
  color: #17a2b8;
}

.details-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.details-form label {
  font-weight: bold;
}

.details-form input,
.details-form textarea,
.details-form select {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
}

/* Grupo de botones */
.button-group {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.btn {
  padding: 10px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  flex: 1;
}

.edit-btn {
  background-color: #28a745;
}

.delete-btn {
  background-color: #dc3545;
}

.edit-btn:hover {
  background-color: #218838;
}

.delete-btn:hover {
  background-color: #c82333;
}

/* Responsividad */
@media (max-width: 768px) {
.container {
  flex-direction: column;
}
}
</style>
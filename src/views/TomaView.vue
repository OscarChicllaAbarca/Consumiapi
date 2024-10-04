<template>
    <div class="form-container">
      <h2>Carga de Productos</h2>
      <form @submit.prevent="submitForm">
        <label for="fecha_toma">Fecha Toma:</label>
        <input type="date" v-model="productData.Fecha_Toma" required>
  
        <label for="ubicacion">Ubicación:</label>
        <input type="text" v-model="productData.Ubicacion" required>
  
        <label for="producto">Producto:</label>
        <input type="text" v-model="productData.Producto" required>
  
        <label for="descripcion">Descripción de Producto:</label>
        <input type="text" v-model="productData.Descripcion_Producto" required>
  
        <label for="q">Cantidad (Q):</label>
        <input type="number" v-model="productData.Q" required>
  
        <label for="centro">Centro:</label>
        <input type="text" v-model="productData.Centro" required>
  
        <label for="lote">Lote:</label>
        <input type="text" v-model="productData.Lote">
  
        <label for="unidad_medida">Unidad de Medida Base:</label>
        <input type="text" v-model="productData.Unidad_Medida_Base" required>
  
        <label for="codigo_invent">Código de Inventario:</label>
        <input type="text" v-model="productData.Codigo_Invent" required>
  
        <label for="observacion">Observación:</label>
        <input type="text" v-model="productData.Observacion">
  
        <label for="medida">Medida:</label>
        <input type="text" v-model="productData.Medida">
  
        <label for="fecha_venc">Fecha de Vencimiento:</label>
        <input type="date" v-model="productData.Fecha_Venc">
  
        <button type="submit">Cargar Producto</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        productData: {
          Fecha_Toma: '',
          Ubicacion: '',
          Producto: '',
          Descripcion_Producto: '',
          Q: 0,
          Centro: '',
          Lote: '',
          Unidad_Medida_Base: '',
          Codigo_Invent: '',
          Observacion: '',
          Medida: '',
          Fecha_Venc: ''
        }
      };
    },
    methods: {
      async submitForm() {
        try {
          const response = await fetch('http://localhost:8080/api/toma', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.productData)
          });
          if (response.ok) {
            alert('Producto cargado exitosamente');
          } else {
            alert('Error al cargar el producto');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      }
    }
  };
  </script>
  
  <style>
  .form-container {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f7f7f7;
    border-radius: 10px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  label {
    margin-top: 10px;
  }
  input {
    padding: 8px;
    margin-bottom: 10px;
  }
  button {
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  </style>
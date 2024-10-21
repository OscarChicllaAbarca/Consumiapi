<template>
    <div class="container">
        <!-- Estructura responsiva usando Bootstrap -->
        <div class="row">
            <!-- Tabla de productos -->
            <div class="col-lg-8 col-md-12">
                <h2>Listado de Productos</h2>
                <div class="table-responsive">
                    <table class="table table-bordered table-hover">
                        <thead class="thead-light">
                            <tr>
                                <th>#</th>
                                <th>Producto</th>
                                <th>Descripción de Producto</th>
                                <th>Ubicación</th>
                                <th>Fecha Toma</th>
                                <th>Centro</th>
                                <th>Lote</th>
                                <th>Cantidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in tomas" :key="index" @click="selectRow(item)" :class="{ 'table-active': selectedItem === item }">
                                <td>{{ index + 1 }}</td>
                                <td>{{ item.producto }}</td>
                                <td>{{ item.descripcionProducto }}</td>
                                <td>{{ item.ubicacion }}</td>
                                <td>{{ formatDate(item.fechaToma) }}</td>
                                <td>{{ item.centro }}</td>
                                <td>{{ item.lote }}</td>
                                <td>{{ item.cantidad }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    
            <!-- Panel de detalles -->
            <div class="col-lg-4 col-md-12" v-if="selectedItem">
                <div class="details-panel card">
                    <div class="card-body">
                        <h5 class="card-title">Detalles del Producto</h5>
                        <button class="close" @click="closePanel">&times;</button>
    
                        <form @submit.prevent="submitForm" class="details-form">
                            <div class="form-group">
                                <label for="unidad_medida_base">Unidad de Medida Base:</label>
                                <input type="text" class="form-control" v-model="selectedItem.unidadMedidaBase" disabled>
                            </div>
    
                            <div class="form-group">
                                <label for="codigo_invent">Código de Inventario:</label>
                                <input type="text" class="form-control" v-model="selectedItem.codigoInventario" disabled>
                            </div>
    
                            <div class="form-group">
                                <label for="observacion">Observación:</label>
                                <input type="text" class="form-control" v-model="selectedItem.observacion" disabled>
                            </div>
    
                            <div class="form-group">
                                <label for="medida">Medida:</label>
                                <input type="text" class="form-control" v-model="selectedItem.medida" disabled>
                            </div>
    
                            <div class="form-group">
                                <label for="fecha_venc">Fecha de Vencimiento:</label>
                                <input type="date" class="form-control" v-model="selectedItem.fechaVencimiento" disabled>
                            </div>
    
                            <!-- Botones Editar y Eliminar -->
                            <div class="button-group mt-3">
                               <!-- <button class="btn btn-primary" @click="editItem" type="button">Editar</button>-->
                                <button class="btn btn-danger" @click="deleteItem(selectedItem.id)" type="button">Eliminar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </template>
    

<script>
import axios from 'axios';
import config from '@/config.js';

export default {
    data() {
        return {
            tomas: [], // Aquí almacenaremos los datos obtenidos de la API
            selectedItem: null // Para almacenar el elemento seleccionado
        };
    },
    mounted() {
        this.obtenerTomas(); // Llamar a la API cuando el componente se monte
    },
    methods: {
        async obtenerTomas() {
            try {
                // Recuperar el nombre de usuario y la contraseña de localStorage
                const username = localStorage.getItem('username'); // Obtener el nombre de usuario
                const password = localStorage.getItem('password'); // Obtener la contraseña
                const credentials = btoa(`${username}:${password}`); // Codificar en Base64

                const response = await axios.get(`${config.apiBaseUrl}/api/tomas`, {
                    headers: {
                        'Authorization': `Basic ${credentials}` // Agregar el encabezado de autorización
                    }
                });

                this.tomas = response.data; // Guardar los datos de la API en la variable 'tomas'
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        },
        selectRow(item) {
            this.selectedItem = item;
        },
        editItem() {
            alert("Editando el producto: " + this.selectedItem.producto);
        },
        async deleteItem(id) {
            if (confirm("¿Estás seguro de que deseas eliminar este producto?")) {
                try {
                    // Recuperar el nombre de usuario y la contraseña de localStorage
                    const username = localStorage.getItem('username'); // Obtener el nombre de usuario
                    const password = localStorage.getItem('password'); // Obtener la contraseña
                    const credentials = btoa(`${username}:${password}`); // Codificar en Base64

                    // Hacer la solicitud DELETE a la API con autenticación
                    await axios.delete(`${config.apiBaseUrl}/api/tomas/${id}`, {
                        headers: {
                            'Authorization': `Basic ${credentials}` // Agregar el encabezado de autorización
                        }
                    });

                    // Filtrar el elemento eliminado de la lista
                    this.tomas = this.tomas.filter(item => item.id !== id);
                    // Limpiar la selección actual
                    this.selectedItem = null;
                    alert("Producto eliminado con éxito.");
                } catch (error) {
                    console.error("Error al eliminar el producto:", error);
                    alert("Hubo un problema al eliminar el producto.");
                }
            }
        },
        closePanel() {
            this.selectedItem = null;
        },
        formatDate(date) {
            if (date) {
                return new Date(date).toLocaleDateString(); // Formatear la fecha en un formato legible
            }
            return '';
        }
    }
};
</script>

<style scoped>
/* Estilos adicionales para mejorar la visualización */

.table-hover tbody tr:hover {
    background-color: #f0f0f0;
}

.table-active {
    background-color: #f8f9fa;
}

.details-panel {
    border: 1px solid #ccc;
    padding: 20px;
    margin-top: 20px;
}

.close {
    float: right;
    font-size: 1.5rem;
    cursor: pointer;
}

.card {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

button {
    margin-right: 10px;
}
</style>

<template>
<div class="form-container">
    <h2>Carga de Productos</h2>
    <form @submit.prevent="submitForm">

        <label for="fecha_toma">Fecha Toma:</label>
        <input type="date" v-model="productData.fechaToma" required disabled>

        <label for="id_producto">Ubicación:</label>
            <input 
                type="text" 
                v-model="productData.ubicacion" 
                required 
                placeholder="01-00-000-000" 
                autofocus> <!-- Evento para PDA -->

        <label for="producto">Producto:</label>
        <input 
        type="text" 
        v-model="productData.producto" 
        @input="buscarProducto" 
        required :class="{'is-invalid': productData.producto === ''}"
        >


        <label for="descripcion">Descripción de Producto:</label>
        <input type="text" v-model="productData.descripcionProducto" required readonly>

        <label for="q">Cantidad (Q):</label>
        <input type="number" v-model="productData.cantidad" required min="1" :class="{'is-invalid': productData.cantidad <= 0}">
        <span v-if="productData.cantidad <= 0" class="error">La cantidad debe ser mayor que 0.</span>

        <label for="centro">Centro:</label>
        <select v-model="productData.centro" class="form-select" required>
            <option value="">Seleccione un centro</option>
            <option value="C080">C080</option>
            <option value="C152">C152</option>
            <option value="C154">C154</option>
            <option value="C200">C200</option>
            <option value="C201">C201</option>
        </select>

        <label for="lote">Lote:</label>
        <select v-model="productData.lote" class="form-select" required>
            <option value="">Seleccione un lote</option>
            <option value="Reparado">Reparado</option>
            <option value="Nuevo">Nuevo</option>
            <option value="Garantia">Garantía</option>
            <option value="Observado">Observado</option>
        </select>

        <label for="unidad_medida">Unidad de Medida Base:</label>
        <input type="text" v-model="productData.unidadMedidaBase" required readonly>

        <label for="codigo_invent">Código de Inventario:</label>
        <input type="text" v-model="productData.codigoInventario" required :class="{'is-invalid': productData.codigoInventario === ''}">

        <br>
        <button @click="toggleFields" type="button" class="btn btn-primary">
            <i class="fa" :class="showFields ? 'fa-minus' : 'fa-plus'"></i>
        </button>

        <!-- Campos adicionales -->
        <div v-if="showFields" class="form-fields mt-3">
            <div class="mb-3">
                <label for="observacion" class="form-label">Observación:</label>
                <input type="text" v-model="productData.observacion" id="observacion" class="form-control">
            </div>

            <div class="mb-3">
                <label for="medida" class="form-label">Medida:</label>
                <input type="text" v-model="productData.medida" id="medida" class="form-control">
            </div>

            <div class="mb-3">
                <label for="fecha_venc" class="form-label">Fecha de Vencimiento:</label>
                <input type="date" v-model="productData.fechaVencimiento" id="fecha_venc" class="form-control" :class="{'is-invalid': !validarFechaVencimiento}">
                <span v-if="!validarFechaVencimiento" class="error">La fecha de vencimiento no puede ser anterior a la fecha actual.</span>
            </div>
        </div>

        <br>
        <button type="submit" :disabled="!formValido">Cargar Producto</button>
    </form>
</div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            showFields: false,
            productData: {
                fechaToma: new Date().toISOString().substr(0, 10),
                ubicacion: '',
                producto: '',
                descripcionProducto: '',
                cantidad: 0,
                centro: '',
                lote: '',
                unidadMedidaBase: '',
                codigoInventario: '',
                observacion: '',
                medida: '',
                fechaVencimiento: ''
            } ,scannedCode: ''
        };
    },
    computed: {
        validarFechaVencimiento() {
            // Verifica que la fecha de vencimiento no sea anterior a la fecha actual
            const hoy = new Date().toISOString().split('T')[0];
            return this.productData.fechaVencimiento === '' || this.productData.fechaVencimiento >= hoy;
        },
        formValido() {
            return (
                this.productData.producto !== '' &&
                this.productData.cantidad > 0 &&
                this.productData.centro !== '' &&
                this.productData.codigoInventario !== '' &&
                this.validarFechaVencimiento
            );
        }

    },
    methods: {
        
        async buscarProducto() {
        if (this.productData.producto && this.productData.producto.trim() !== '') {
            try {
                const codigoProducto = this.productData.producto;
                const codigoProductoFinal = codigoProducto.replace(/\\/g, '');

                const credentials = this.getCredentials();

                const response = await axios.get(`https://d19c-181-176-109-201.ngrok-free.app/api/products/b_name/${codigoProductoFinal}`, {
                    headers: {
                        'ngrok-skip-browser-warning': 'true',
                        'Authorization': `Basic ${credentials}`
                    },
         });

            if (response.status === 200) {
                const data = response.data;
                console.log('Datos recibidos:', data); // Imprimir los datos en la consola
                if (Array.isArray(data) && data.length > 0) {
                    const producto = data[0];
                    this.productData.descripcionProducto = producto.descriptionProduct;
                    this.productData.unidadMedidaBase = producto.unitMeasurement;
                } else {
                    console.error('No se encontraron productos para el código proporcionado.');
                    this.productData.descripcionProducto = '';
                    this.productData.unidadMedidaBase = '';
                }
            } else {
                console.error('Error al obtener los datos del producto:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error al realizar la solicitud:', error.response ? error.response.data : error.message);
            alert('Error: ' + (error.response ? error.response.status + ' - ' + error.response.statusText : error.message));
        }
    } else {
        alert('Por favor, ingresa un código de producto válido.');
    }
},
        getCredentials() {
            const username = localStorage.getItem('username');
            const password = localStorage.getItem('password');
            return btoa(`${username}:${password}`);
        },
        async submitForm() {
            try {
                const username = localStorage.getItem('username');
                const password = localStorage.getItem('password');

                const credentials = btoa(`${username}:${password}`);

                const response = await fetch('https://d19c-181-176-109-201.ngrok-free.app/api/tomas', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Basic ${credentials}` // Agregar el encabezado de autorización
                    },
                    body: JSON.stringify(this.productData)
                });

                if (response.ok) {
                    alert('Producto cargado exitosamente');
                    // Opcional: Reiniciar el formulario o limpiar los campos
                    this.resetForm();
                } else {
                    alert('Error al cargar el producto');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        },
        getCurrentDate() {
            const today = new Date();
            const year = today.getFullYear();
            const month = (today.getMonth() + 1).toString().padStart(2, '0');
            const day = today.getDate().toString().padStart(2, '0');
            return `${year}-${month}-${day}`;
        },
        toggleFields() {
            this.showFields = !this.showFields;
        },
        resetForm() {
            this.productData = {
                fechaToma: this.getCurrentDate(),
                ubicacion: '',
                producto: '',
                descripcionProducto: '',
                cantidad: 0,
                centro: '',
                lote: '',
                unidadMedidaBase: '',
                codigoInventario: '',
                observacion: '',
                medida: '',
                fechaVencimiento: ''
            };
            this.showFields = false;
        },
    },
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
    display: block;
    /* Hace que las etiquetas ocupen su propia línea */
    margin-bottom: 5px;
    /* Espacio entre la etiqueta y el campo de entrada */
}

input {
    padding: 8px;
    margin-bottom: 10px;
    width: 100%;
    /* Hace que los campos de entrada ocupen todo el ancho disponible */
    padding: 8px;
    /* Espaciado interno para los campos de entrada */
    border: 1px solid #ccc;
    /* Estilo de borde */
    border-radius: 4px;
    /* Bordes redondeados */
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

.form-fields {
    margin-top: 10px;
    /* Espacio entre el botón y los campos */
}

.form-group {
    margin-bottom: 10px;

}

.error {
    color: red;
    font-size: 0.9em;
}

.is-invalid {
    border-color: red;
}
</style>

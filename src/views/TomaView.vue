<template>
<div class="form-container">
    <h2>Carga de Productos</h2>
    <form @submit.prevent="submitForm">

        <label for="fecha_toma">Fecha Toma:</label>
        <input type="date" v-model="productData.fechaToma" required disabled>

        <label for="id_producto">Ubicacion:</label>
        <input type="text" v-model="productData.ubicacion" @input="fetchHannaData" required placeholder="Ingrese el ID del producto">

        <label for="producto">Producto:</label>
        <input type="text" v-model="productData.producto" required readonly>

        <label for="descripcion">Descripción de Producto:</label>
        <input type="text" v-model="productData.descripcionProducto" required readonly>

        <label for="q">Cantidad (Q):</label>
        <input type="number" v-model="productData.cantidad" required>

        <label for="centro">Centro:</label>
        <select v-model="productData.centro" required class="form-select">
            <option value="">Seleccione un centro</option>
            <option value="C080">C080</option>
            <option value="C152">C152</option>
            <option value="C154">C154</option>
            <option value="C200">C200</option>
            <option value="C201">C201</option>
        </select>

        <label for="lote">Lote:</label>
        <select v-model="productData.lote" class="form-select">
            <option value="">Seleccione un lote</option>
            <option value="Reparado">Reparado</option>
            <option value="Nuevo">Nuevo</option>
            <option value="Lote C">Lote C</option>
        </select>

        <label for="unidad_medida">Unidad de Medida Base:</label>
        <input type="text" v-model="productData.unidadMedidaBase" required readonly>

        <label for="codigo_invent">Código de Inventario:</label>
        <input type="text" v-model="productData.codigoInventario" required>

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
                <input type="date" v-model="productData.fechaVencimiento" id="fecha_venc" class="form-control">
            </div>
        </div>

        <br>
        <button type="submit">Cargar Producto</button>
    </form>
</div>
</template>

    
    
<script>
export default {
    data() {
        return {
            showFields: false,
            productData: {
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
            }
        };
    },
    methods: {
        async fetchHannaData() {
            if (this.productData.producto !== '') {
                try {
                    const response = await fetch(`http://localhost:9090/api/products/${this.productData.producto}`);
                    if (response.ok) {
                        const data = await response.json();
                        this.productData.descripcionProducto = data.descriptionProduct; 
                        this.productData.unidadMedidaBase = data.unitMeasurement; 
                    } else {
                        console.error('Error al obtener los datos de Hanna');
                    }
                } catch (error) {
                    console.error('Error al realizar la solicitud:', error);
                }
            }
        },
        async submitForm() {
            try {
                const response = await fetch('http://localhost:9090/api/tomas', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
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
</style>

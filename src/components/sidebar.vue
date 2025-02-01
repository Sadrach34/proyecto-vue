<template>
    <div class="sidebar">
        <h2>Bienvenido</h2>
        <h3>nombre: {{ registrarStore.nombre }}</h3>
        <h3>Email: {{ registrarStore.email }}</h3>
        <ul>
            <li><RouterLink to="/contador">contador</RouterLink></li>
            <li><RouterLink to="/Lista-de-Tareas">Lista-de-Tareas</RouterLink></li>
            <li><RouterLink to="/registrar">registrar</RouterLink></li>
        </ul>
    </div>
</template>

<script setup>  
    import { useRegistrarStore } from '@/modules/registro/stores/registrarStore'; 
    // import { ref, watch } from 'vue';

    const registrarStore = useRegistrarStore();
    // const nombre = ref(registrarStore.nombre.value);
    // const email = ref(registrarStore.email.value);

    // watch (() => registrarStore.nombre, (newValue) => {
    //     nombre.value = newValue;
    // });
    // watch (() => registrarStore.email, (newValue) => {
    //     email.value = newValue;
    // });

</script>

<style scoped>
    .sidebar {
        width: 200px;
        background-color: #f0f0f0;
        padding: 20px;
    }
</style>
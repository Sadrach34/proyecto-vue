<template>
    <div>
        <h2>Lista de tareas</h2>
        <input type="text" v-model="agregarTarea" @keyup.enter="addTarea" />
        <button @click="BorrarTarea">Eliminar tarea</button>
        <ul>
            <li v-for="(tarea, index) in tareas" :key="index">
                {{ tarea }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import {ref} from 'vue';
const tareas = ref([]);
const agregarTarea = ref('');
const addTarea = () => {
    tareas.value.push(agregarTarea.value);
    agregarTarea.value = '';
};

const BorrarTarea = (index) => {
    tareas.value.splice(index, 1);
};

</script>

<style scoped>
</style>
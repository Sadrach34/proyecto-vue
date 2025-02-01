<template>
    <div class="sidebar">
        <h2>Barra lateral</h2>
        <ul>
            <li><RouterLink to="/contador">contador</RouterLink></li>
            <li><RouterLink to="/Lista-de-Tareas">Lista-de-Tareas</RouterLink></li>
        </ul>
    </div>
</template>

<script setup>
</script>

<style scoped>
    .sidebar {
        width: 200px;
        background-color: #f0f0f0;
        padding: 20px;
    }
</style>
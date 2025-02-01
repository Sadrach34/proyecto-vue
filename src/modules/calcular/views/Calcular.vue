<template>
    <h3>Propiedades Computadas</h3>
    <input type="text" v-model="valor" />
    {{ valor }}
</template>

<script setup>
    import { ref, computed } from 'vue';

    const valor = ref(0);

</script>

<style scoped>
</style>
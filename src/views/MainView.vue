<template>
    <Header :mensaje="Texto"/>
    <div class="Container">
        <sidebar />
        <div class="content">
            <input type="text" v-model="Texto" />
            {{ Texto }}
            <Router-View />
        </div>
    </div>
</template>

<script setup>
    import sidebar from '../components/sidebar.vue';
    import Header from '@/components/Header.vue';
    import { ref } from 'vue';

    const Texto = ref('');
</script>

<style scoped>
    .Container {
        display: flex;
    }
    .content {
        flex: 1;
        padding: 20px;
    }
</style>
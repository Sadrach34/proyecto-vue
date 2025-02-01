<template>
    <div class="Container">
        <sidebar />
        <div class="content">
            <Router-View />
        </div>
    </div>
</template>

<script setup>
    import sidebar from '../components/sidebar.vue';
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
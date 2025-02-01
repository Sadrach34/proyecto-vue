<template>
    <div>
        <h2>Formulario de registro</h2>
        <Form :validation-schema="schema" @submit="onSubmit">
            <div class="from">
                <label for="nombre">Nombre: </label>
                <Field type="text" name="nombre" id="nombre" placeholder="Ingrese su Nombre" />
                <ErrorMessage name="nombre" />
            </div>
            <div class="from">
                <label for="email">email: </label>
                <Field type="text" name="email" id="email" placeholder="Ingrese su email" />
                <ErrorMessage name="email" />
            </div>
            <div class="from">
                <button type="submit">Registrar</button>
            </div>
        </Form>
    </div>
</template>

<script setup>
    import {Form, Field, ErrorMessage} from 'vee-validate';
    import { schema } from '../schemas/Validationschema';

    const onSubmit = () => {
        console.log('Se envio el formulario');
    }
</script>

<style scoped>
    .from{
        margin-bottom: 10px;
    }

</style>
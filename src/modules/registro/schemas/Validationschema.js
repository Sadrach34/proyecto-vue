import * as Yup from 'yup';

export const schema = Yup.object().shape({
    nombre: Yup.string().required('El nombre es requerido'),
    email: Yup.string().email().required('El email es requerido'),
});
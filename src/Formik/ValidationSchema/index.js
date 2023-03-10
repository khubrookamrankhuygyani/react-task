import * as yup from 'yup'

export const loginSchema = yup.object().shape({
    email: yup
    .string()
    .email("Invalid Email")
    .required('Required'),
    password:yup.string().required('Required')
})


export const signUpSchema = yup.object().shape({
    email: yup.string()
    .email('Invalid email')
    .required('Required'),
  confirmEmail: yup.string()
    .oneOf([yup.ref('email'), null], 'Emails must match')
    .email('Invalid email')
    .required('Required'),
    password:yup.string().required('Required'),
    terms:  yup.array().of(yup.string())
    .min(1, '(Esse campo é obrigatório)'),
})
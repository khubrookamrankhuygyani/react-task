import { Form, Formik } from 'formik/dist';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormikInput from '../../Formik/FormikInput';
import { loginSchema } from '../../Formik/ValidationSchema';

function Login() {
  // ** Submit 

  const handleSubmit = (values,action) => {
    console.log("Form Submitted with values:",values)
    action.resetForm()
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen" >
      <div className=' sm:mx-auto sm:w-full sm:max-w-md'>
      <img className='mx-auto h-12 w-auto' src="https://i.imgur.com/vE04ui0.png" alt="Login" />
      <p className='mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900'>Entrar na sua conta</p>
      <p className="mt-2 text-center text-base leading-5 text-gray-600">
        Ou <Link  to="/signup"className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">fazer cadastro</Link>
      </p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <Formik
            initialValues={{email:"",password:""}}
            onSubmit={handleSubmit}
            validationSchema={loginSchema}
          >
            {(props) => (
              <Form className= "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 flex flex-col gap-4" >
              <FormikInput className="mt-1"  name="email" label="E-mail"  type="text"/>
              <div  className="mt-1">
              <FormikInput  name="password" label="Senha"  type="password"/>
              </div>
              <div class=" flex items-center justify-end custom-margin"><div class="text-sm leading-5"><a href="/ResetPassword" class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
              Esqueceu a senha?
            </a></div></div>
              <button
            className="w-full flex mt-1  justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            type="submit"
            disabled={props.isSubmitting}>Entrar</button>
            </Form>)}
          </Formik>
      </div>
      
     
    </div>
  );
}

export default Login;

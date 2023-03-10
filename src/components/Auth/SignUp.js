import { Form, Formik } from 'formik/dist';
import React from 'react';
import { Link } from 'react-router-dom';
import FormikCheckbox from '../../Formik/FormikCheckbox';
import FormikInput from '../../Formik/FormikInput';
import { signUpSchema } from '../../Formik/ValidationSchema';

function SignUp() {




    // ** Submit 

    const handleSubmit = (values,action) => {
      console.log("Form Submitted with values:",values)
      action.resetForm()
    }

    


    // ** Root Code
  return (
    
        <div className="flex flex-col items-center justify-center h-screen" >
          <div className=' sm:mx-auto sm:w-full sm:max-w-md'>
          <img className='mx-auto h-12 w-auto' src="https://i.imgur.com/vE04ui0.png" alt="Login" />
          <p className='mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900'>Criar nova conta</p>
          <p className="mt-2 text-center text-base leading-5 text-gray-600">
            Ou <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">entrar na sua conta existente</Link>
          </p>
          </div>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">








          <Formik
            initialValues={{email:"",confirmEmail:"",terms:[],password:""}}
            onSubmit={handleSubmit}
            validationSchema={signUpSchema}
          >
            {(props) => (
              <Form className= "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 flex flex-col gap-4" >
              <FormikInput  name="email" label="E-mail"  type="text"/>
              <div  className="mt-2">
              <FormikInput  name="confirmEmail" label=" Repetir   e-mail "  type="text"/>
              </div>
              <div  className="mt-2">

              <FormikInput  name="password" label="Senha"  type="password"/>
              </div>
              <FormikCheckbox name="terms" value="terms" label={<div className=' ml-2 text-sm leading-5' style={{ width: '325px' }} ><span className=" font-medium text-gray-700">Eu li e aceito os <a href="https://kiwify.com.br/termos-de-uso" target="_blank" className="underline"> termos de uso</a>, <a href="https://kiwify.com.br/licenca-de-uso-software" target="_blank" className="underline"> termos de licença de uso de software</a>, <a href="https://kiwify.com.br/politica-de-conteudo" target="_blank" className="underline"> política de conteúdo</a> da Kiwify </span> </div>} />
              <button
            className="w-full mt-1 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            type="submit"
            disabled={props.isSubmitting}
          >
             Criar conta
          </button>
              </Form>
            )}
          </Formik>

          </div>
          
         
        </div>
      );
  
}

export default SignUp;
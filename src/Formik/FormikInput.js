import { useField } from 'formik/dist'
import { useEffect } from 'react'

const FormikInput = ({ label, ...props }) => {
    
  const [field, meta] = useField(props)

  return (
    <div className="flex flex-col">
      <label className="block text-sm font-medium leading-5 text-gray-700">{label}</label>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error?"form-input mt-1 block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 border-red-500 w-full":"form-input mt-1 block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full" }
      />
      {meta.touched && meta.error && (
        <div className="text-xs text-red-500">{meta.error}</div>
      )}
    </div>
  )
}
export default FormikInput

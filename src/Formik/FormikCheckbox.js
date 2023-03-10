import { useField } from "formik/dist";

const FormikCheckbox = ({ label, value, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox', value });

    return (
        <div className="mt-2" >
            <label  style={{ display: 'flex'}}
            className='relative flex items-start ' >
                <input
                
                    type="checkbox"
                    {...field}
                    {...props}
                    className={meta.touched && meta.error?"border-red-800 form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer ":"form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer"}
                    checked={meta.value.includes(value)}
                    style={{ marginTop: '2px'}}
                />
                <span></span>
                {label}
            </label>
            {meta.touched && meta.error && <div className="text-xs ml-6 border-b-0  text-red-500" style={{ fontSize: '14px'}}>{meta.error}</div>}
        </div>
    );
};

export default FormikCheckbox;
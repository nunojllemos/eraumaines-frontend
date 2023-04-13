const FormInput = ({ type = 'text', name, placeholder, required = false, errorMessage = 'Este campo é de preenchimento obrigatório' }) => {
    return (
        <div className='default-text relative w-full pt-8'>
            <input
                required={required}
                className='peer w-full bg-transparent border-b outline-none py-2 px-4'
                type={type}
                id={name}
                placeholder=' '
                name={name}
            />
            <label
                className='transition-all left-4 absolute pointer-events-none text-12 peer-placeholder-shown:top-10 top-2 peer-placeholder-shown:text-20 768:peer-placeholder-shown:text-22 1280:peer-placeholder-shown:text-26'
                htmlFor={name}
            >
                {placeholder}
                {required && <sup>*</sup>}
            </label>
            {required && (
                <span className='transition-all opacity-0 text-10 -translate-y-3 block mt-3 peer-invalid:opacity-100 peer-invalid:translate-y-0 text-[red]/70'>
                    {errorMessage}
                </span>
            )}
        </div>
    )
}
export default FormInput

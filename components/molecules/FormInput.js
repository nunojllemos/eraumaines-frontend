const FormInput = ({ type = 'text', name, placeholder, required = false }) => {
    return (
        <div className='default-text relative w-full pt-8'>
            <input
                required={required}
                className='peer w-full bg-transparent border-b outline-black/80 py-2 px-4'
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
        </div>
    )
}
export default FormInput

const FormInput = ({ type = 'text', name, placeholder, required = false, text }) => {
    return (
        <div className='default-text relative w-full mt-12'>
            <span className='text-22'>&#8226; {text}</span>
            <input
                required={required}
                className='peer w-full bg-transparent transition-colors border-b focus:border-b-[var(--title-color)] !outline-none py-2 px-4 mt-4 text-18'
                type={type}
                id={name}
                placeholder={placeholder}
                name={name}
            />
        </div>
    )
}
export default FormInput

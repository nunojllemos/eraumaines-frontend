import { useState } from 'react'
import useTranslation from '@/hooks/useTranslation'

const FormTextarea = ({ name, placeholder, required = false, maxLength = 650 }) => {
    const t = useTranslation()
    const [messageLength, setMessageLength] = useState(0)

    const handleChange = e => {
        const message = e.target.value.length
        setMessageLength(message)
    }

    return (
        <div className='default-text relative w-full pt-8'>
            <textarea
                onChange={handleChange}
                placeholder=' '
                maxLength={maxLength}
                name={name}
                id={name}
                className='peer py-2 px-4 border w-full h-[8em] resize-none outline-black/80 leading-snug'
            ></textarea>
            <label
                className='transition-all left-4 absolute pointer-events-none text-12 peer-placeholder-shown:top-12 top-2 peer-placeholder-shown:text-20 768:peer-placeholder-shown:text-22 1280:peer-placeholder-shown:text-26'
                htmlFor={name}
            >
                {placeholder}
                {required && <sup>*</sup>}
            </label>
            <div className={`flex justify-between text-12 ${messageLength === maxLength ? 'text-[red]/80' : 'text-black'}`}>
                <span className={`transition-all ${messageLength === maxLength ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'}`}>
                    {t.contacts.form.maximumMessage}
                </span>
                <span className='transition-colors'>
                    {messageLength} / {maxLength}
                </span>
            </div>
        </div>
    )
}
export default FormTextarea

import React from 'react'
import useTranslation from '@/hooks/useTranslation'
import FormInput from './FormInput'

const Form = ({ form }) => {
    const t = useTranslation()
    const questions = form?.[0]?.attributes?.questions

    return (
        <>
            {questions &&
                questions.length &&
                questions?.map(question => {
                    return (
                        <FormInput
                            key={question.input_name}
                            text={question.question}
                            name={question.input_name}
                            placeholder={question.placeholder}
                            required={true}
                        />
                    )
                })}
        </>
    )
}

export default Form

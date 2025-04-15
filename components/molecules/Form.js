import React from 'react'
import useTranslation from '@/hooks/useTranslation'
import FormInput from './FormInput'

const Form = ({ form }) => {
    const t = useTranslation()
    const questions = form?.[0]?.attributes?.questions

    return (
        <div key={form.id}>
            {questions &&
                questions.length &&
                questions?.map((question, index) => {
                    return (
                        <FormInput
                            key={`${form?.[0]?.attributes?.title}-${question.input_name}-${index}`}
                            text={question.question}
                            name={question.input_name}
                            placeholder={question.placeholder}
                            required={true}
                        />
                    )
                })}
        </div>
    )
}

export default Form

import { useRef, useState } from 'react'
import { FaqArrow } from '@/components/atoms/Icons'
import ImageContainer from '@/components/atoms/ImageContainer'
import AnimatedTitle from '@/components/molecules/AnimatedTitle'
import FormInput from '@/components/molecules/FormInput'
import Col from '@/components/styled-components/layout/Col'
import Container from '@/components/styled-components/layout/Container'
import Grid from '@/components/styled-components/layout/Grid'
import emailjs from '@emailjs/browser'
import Form from '@/components/molecules/Form'
import useTranslation from '@/hooks/useTranslation'

const Email = ({ value }) => (
    <span>
        E:{' '}
        <a className='underline underline-offset-2 tracking-wider' href={`mailto:${value}`}>
            {value}
        </a>
    </span>
)

const Phone = ({ value }) => <div className='tracking-wide'>T: {value}</div>

const Alo = props => {
    const form = useRef()
    const [contactType, setContactType] = useState('')
    const [formStatus, setFormStatus] = useState(0)
    const [isSending, setIsSending] = useState(false)
    const t = useTranslation()
    const title = props?.data?.title
    const image = props?.data?.image?.data?.attributes?.url
    const contacts = props?.data?.contacts

    const sendEmail = e => {
        e.preventDefault()
        setIsSending(true)

        emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_PUBLIC_KEY).then(
            result => {
                setFormStatus(result.status)
                setIsSending(false)
                form.current.reset()

                setTimeout(() => setFormStatus(0), 5000)
            },
            error => setIsSending(false)
        )
    }

    return (
        <main className='pb-16'>
            <AnimatedTitle>{`${title} . ${title} . ${title} . ${title} . ${title} . ${title} . ${title} . ${title} . ${title} .`}</AnimatedTitle>
            <Container>
                <Grid tablet={800}>
                    <Col tablet={800} mobileCols={2} tabletCols={6}>
                        <div className='sticky top-8'>
                            <ImageContainer src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image}`} aspectRatio='1/1' sizes='(min-width: 800px) 50vw, 100vw' />
                        </div>
                    </Col>
                    <Col tablet={800} mobileCols={2} tabletCols={6}>
                        <div className='pb-8 default-text pt-16 768:pt-0'>
                            <h2 className='font-medium text-[var(--title-color)]'>{t.contacts.title}</h2>
                        </div>
                        <div className='flex flex-col gap-4 text-16 768:text-18'>
                            {contacts && contacts?.length && (
                                <>
                                    {contacts?.map((contact, index) => {
                                        const component = contact.__component
                                        const contactValue = contact.value
                                        const isEmail = component.includes('email')

                                        if (isEmail) return <Email key={`${component}:${contact?.id}`} value={contactValue} />
                                        return <Phone key={`${component}:${contact.id}`} value={contact.value} />
                                    })}
                                </>
                            )}
                        </div>
                        <div className='pt-32 pb-8 default-text'>
                            <h2 className='font-medium text-[var(--title-color)]'>{t.contacts.more_info}</h2>
                        </div>
                        <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-8 relative'>
                            <div
                                className={`transition-opacity absolute top-0 left-0 w-full h-full bg-white/80 z-10 default-text flex items-center justify-center ${
                                    isSending ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                                }`}
                            >
                                {t.contacts.form.sendingMessage}
                            </div>
                            <FormInput text={t.contacts.form.general.name} name='name' placeholder={t.contacts.form.name} required={true} />
                            <FormInput text={t.contacts.form.general.contact} name='name-1' placeholder={t.contacts.form.name} required={true} />
                            <FormInput text={t.contacts.form.general.date} type='date' name='name-1' placeholder={t.contacts.form.name} required={true} />

                            <div className='mt-12'>
                                <span className='mb-12 text-22'>{t.contacts.form.general.eventType}</span>
                                <div className='mt-12 py-3 px-6 border w-max rounded-lg border-[var(--text-color)]'>
                                    <select
                                        onChange={e => setContactType(e.target.value)}
                                        className='text-16 bg-[var(--background-color)] text-[var(--text-color)] focus-visible:!border-none !outline-none'
                                    >
                                        <option value='default'>{t.contacts.form.options.default}</option>
                                        {props?.options?.map(option => (
                                            <option key={`${option}:key`} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <Form form={props?.questions.filter(question => question.attributes.title === contactType)} />

                            <div
                                className={`transition-all text-18 bg-[#b7eb8f] px-8 py-4 rounded-lg shadow-lg ${
                                    formStatus === 200 ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-3'
                                }`}
                            >
                                <div>
                                    <p>{t.contacts.form.thankYouMessage}</p>
                                </div>
                            </div>
                            <ul className='mt-40 768:mt-64 text-12 opacity-50 flex flex-col gap-2'>
                                <li>* {t.contacts.form.information_01}</li>
                                <li>** {t.contacts.form.information_02}</li>
                            </ul>
                            <div>
                                <button className='bg-[var(--text-color)] text-[var(--background-color)] py-2 px-6 rounded-lg default-text flex items-center gap-3 768:gap-6 group'>
                                    <span>{t.contacts.form.send}</span>
                                    <div className='w-6 768:w-8 -mt-2 transition-transform fix-hover:group-hover:translate-x-2'>
                                        <FaqArrow />
                                    </div>
                                </button>
                            </div>
                        </form>
                    </Col>
                </Grid>
            </Container>
        </main>
    )
}

export default Alo

export async function getStaticProps(context) {
    const { locale } = context

    const populateQuery = 'populate=*'
    const baseApi = process.env.NEXT_PUBLIC_API_URL
    const contentType = 'contact'
    const localeQuery = `locale=${locale}`

    const pageResponse = await fetch(`${baseApi}/${contentType}?${localeQuery}&${populateQuery}`)
    const pageData = await pageResponse.json()

    const formsType = 'forms'
    const questionsResponse = await fetch(`${baseApi}/${formsType}?${localeQuery}&${populateQuery}`)
    const questionsData = await questionsResponse.json()

    const options = questionsData?.data?.map(question => question?.attributes?.title)

    return {
        props: {
            data: pageData?.data?.attributes || null,
            questions: questionsData?.data || null,
            options,
        },
        revalidate: 10,
    }
}

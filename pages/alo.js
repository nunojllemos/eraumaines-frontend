import { useRef, useState } from 'react'
import { FaqArrow } from '@/components/atoms/Icons'
import ImageContainer from '@/components/atoms/ImageContainer'
import AnimatedTitle from '@/components/molecules/AnimatedTitle'
import FormInput from '@/components/molecules/FormInput'
import Col from '@/components/styled-components/layout/Col'
import Container from '@/components/styled-components/layout/Container'
import Grid from '@/components/styled-components/layout/Grid'
import emailjs from '@emailjs/browser'
import FormTextarea from '@/components/molecules/FormTextarea'
import FormGroup from '@/components/atoms/FormGroup'
import useTranslation from '@/hooks/useTranslation'

const Alo = () => {
    const form = useRef()
    const [formStatus, setFormStatus] = useState(0)
    const [isSending, setIsSending] = useState(false)
    const t = useTranslation()

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
            <AnimatedTitle>{`${t.contacts.title} . ${t.contacts.title} . ${t.contacts.title} . ${t.contacts.title} . ${t.contacts.title} . ${t.contacts.title} . ${t.contacts.title} . ${t.contacts.title} . ${t.contacts.title} .`}</AnimatedTitle>
            <Container>
                <Grid tablet={800}>
                    <Col tablet={800} mobileCols={2} tabletCols={6}>
                        <div className='sticky top-8'>
                            <ImageContainer src='/images/contact-banner.jpg' aspectRatio='1/1' sizes='(min-width: 800px) 50vw, 100vw' />
                        </div>
                    </Col>
                    <Col tablet={800} mobileCols={2} tabletCols={6}>
                        <div className='pb-8 default-text pt-16 768:pt-0'>
                            <h2 className='font-medium'>Contactos</h2>
                        </div>
                        <div className='flex flex-col gap-4 text-16 768:text-18'>
                            <div>
                                E: <a href='mailto:eraumainesfotografia@gmail.com'>eraumainesfotografia@gmail.com</a>
                            </div>
                            <div>T: 916596646</div>
                            <div>T: 916373337</div>
                        </div>
                        <div className='pt-32 pb-8 default-text'>
                            <h2 className='font-medium'>Mais informações</h2>
                        </div>
                        <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-8 relative'>
                            <div
                                className={`transition-opacity absolute top-0 left-0 w-full h-full bg-white/80 z-10 default-text flex items-center justify-center ${
                                    isSending ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                                }`}
                            >
                                A enviar...
                            </div>
                            <FormGroup>
                                <FormInput name='name-1' placeholder='Nome' required={true} />
                                <FormInput name='name-2' placeholder='Nome' />
                            </FormGroup>
                            <FormGroup>
                                <FormInput name='date' placeholder='Data' type='date' />
                                <FormInput name='local' placeholder='Local' required={true} />
                            </FormGroup>
                            <FormTextarea name='message' placeholder='Mensagem' required={true} />

                            <div
                                className={`transition-all text-18 bg-[#b7eb8f] px-8 py-4 rounded-lg shadow-lg ${
                                    formStatus === 200 ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-3'
                                }`}
                            >
                                <div>
                                    <p>Obrigado pela mensagem.</p>
                                    <p>Responderemos assim que possível :)</p>
                                </div>
                            </div>
                            <ul className='mt-40 768:mt-64 text-12 opacity-50 flex flex-col gap-2'>
                                <li>* Campos de preenchimento obrigatórios</li>
                                <li>** Máximo de 650 caracteres</li>
                            </ul>
                            <div>
                                <button className='default-text flex items-center gap-3 768:gap-6'>
                                    <span>Enviar</span>
                                    <div className='w-6 768:w-8 -mt-2'>
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

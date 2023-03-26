import Container from '@/layout/Container'
import FooterText from '@/atoms/FooterText'
import FooterLink from '@/molecules/FooterLink'

const Footer = () => {
    return (
        <footer>
            <Container>
                <div className='flex flex-col-reverse justify-between w-full gap-6 py-4 border-t border-black 768:flex-row 768:gap-0'>
                    <div>
                        <FooterText>&copy; Era uma Inês, 2023</FooterText>
                    </div>
                    <div className='flex gap-12 768:gap-6'>
                        <FooterLink href='/faq'>FAQ&apos;s</FooterLink>
                        <FooterLink href='/termos'>Termos contratuais</FooterLink>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
export default Footer

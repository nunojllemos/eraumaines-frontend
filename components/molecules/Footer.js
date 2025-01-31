import Container from '@/layout/Container'
import FooterText from '@/atoms/FooterText'
import FooterLink from '@/molecules/FooterLink'
import useTranslation from '@/hooks/useTranslation'

const Footer = () => {
    const t = useTranslation()
    const currentYear = new Date().getFullYear()

    return (
        <footer className='z-1 mt-auto'>
            <Container>
                <div className='flex flex-col-reverse justify-between w-full gap-12 py-4 border-t border-[var(--text-color)] 768:flex-row 768:gap-0'>
                    <div>
                        <FooterText>&copy; Era uma Inês, {currentYear}</FooterText>
                    </div>
                    <div className='flex flex-col 768:flex-row gap-2 768:gap-6'>
                        <FooterLink href='/faq'>{t.footer.faqs}</FooterLink>
                        <FooterLink href='/termos'>{t.footer.terms}</FooterLink>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
export default Footer

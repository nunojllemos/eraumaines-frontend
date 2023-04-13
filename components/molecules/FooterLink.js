import Link from 'next/link'
import FooterText from '@/atoms/FooterText'

const FooterLink = ({ href, children }) => {
    return (
        <Link href={href} scroll={false} prefetch={false} className='transition-opacity fix-hover:hover:opacity-60'>
            <FooterText>{children}</FooterText>
        </Link>
    )
}
export default FooterLink

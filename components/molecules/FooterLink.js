import Link from 'next/link'
import FooterText from '@/atoms/FooterText'

const FooterLink = ({ href, children }) => {
    return (
        <Link href={href} scroll={false}>
            <FooterText>{children}</FooterText>
        </Link>
    )
}
export default FooterLink

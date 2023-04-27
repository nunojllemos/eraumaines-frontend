import Link from 'next/link'
import LinkText from '@/atoms/LinkText'
import Arrows from '@/molecules/Arrows'

const InternalLink = props => {
    return (
        <Link className='flex items-center' href={props.href}>
            <LinkText text={props.text} />
            <Arrows />
        </Link>
    )
}
export default InternalLink

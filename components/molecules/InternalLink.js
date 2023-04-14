import Link from 'next/link'
import LinkText from '@/atoms/LinkText'
import { Arrow } from '@/atoms/Icons'

const InternalLink = props => {
    return (
        <Link className='flex items-center hover-arrow ' href={props.href}>
            <LinkText text={props.text} />
            <div className='w-7 h-max -rotate-45'>
                <Arrow />
                <Arrow />
            </div>
        </Link>
    )
}
export default InternalLink

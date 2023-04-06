import Link from 'next/link'
import LinkText from '@/atoms/LinkText'
import { Arrow } from '@/atoms/Icons'

const InternalLink = props => {
    return (
        <Link className='flex items-center' href={props.href}>
            <LinkText text={props.text} />
            <div className='w-7 h-max -rotate-45'>
                <Arrow />
            </div>
        </Link>
    )
}
export default InternalLink

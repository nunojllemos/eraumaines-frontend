import Link from 'next/link'
import LinkText from '@/atoms/LinkText'
import { Arrow } from '@/atoms/Icons'

const InternalLink = props => {
    return (
        <Link className='flex items-center hover-arrow overflow-hidden' href={props.href}>
            <LinkText text={props.text} />
            <div className='w-7 h-max duration-700 -rotate-45 relative'>
                <span>
                    <Arrow />
                </span>
                <span>
                    <Arrow />
                </span>
            </div>
        </Link>
    )
}
export default InternalLink

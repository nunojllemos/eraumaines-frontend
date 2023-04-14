import Link from 'next/link'
import LinkText from '@/atoms/LinkText'
import { Arrow } from '@/atoms/Icons'

const InternalLink = props => {
    return (
        <Link className='flex items-center hover-arrow' href={props.href}>
            <LinkText text={props.text} />
            <div className='w-8 aspect-square duration-700 relative overflow-hidden'>
                <span className='block w-8'>
                    <Arrow />
                </span>
                <span className='block w-8'>
                    <Arrow />
                </span>
            </div>
        </Link>
    )
}
export default InternalLink

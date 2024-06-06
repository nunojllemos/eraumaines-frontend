import Link from 'next/link'
import HomePersonRole from '../atoms/HomePersonRole'
import Arrows from './Arrows'
import HomePersonName from '../atoms/HomePersonName'
import { slugify } from '@/utils/utils'

const AboutSectionNameLink = ({ name, rightPerson, leftPerson, role }) => {
    const href = `/nos#${slugify(name)}`

    return (
        <Link
            href={href}
            className={`mb-24 col-span-2 768:col-span-4 768:row-start-1 person-details w-max ${leftPerson ? `768:col-start-7 1280:col-start-8` : ''} ${
                rightPerson ? `768:col-start-1` : ''
            } `}
        >
            <div className='flex hover-arrow items-baseline'>
                <HomePersonName name={name} />
                <Arrows />
            </div>
            <HomePersonRole role={role} />
        </Link>
    )
}
export default AboutSectionNameLink

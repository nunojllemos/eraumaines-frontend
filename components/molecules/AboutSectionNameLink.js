import HomePersonRole from '../atoms/HomePersonRole'
import Arrows from './Arrows'
import HomePersonName from '../atoms/HomePersonName'
import Link from 'next/link'

const AboutSectioNameLink = props => {
    // console.log(props.leftPerson, 'Hello')
    return (
        <Link
            href={props.href}
            className={`mb-24 col-span-2  768:col-span-4 768:row-start-1 person-details w-max ${props.leftPerson ? `768:col-start-7 1280:col-start-6` : ''} ${
                props.rightPerson ? `768:col-start-1` : ''
            } `}
        >
            <div className='flex hover-arrow items-baseline'>
                <HomePersonName name={props.name} />
                <Arrows />
            </div>
            <HomePersonRole role={props.role} />
        </Link>
    )
}
export default AboutSectioNameLink

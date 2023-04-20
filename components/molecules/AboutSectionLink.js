import InternalLink from './InternalLink'
import { Arrow } from '../atoms/Icons'
import Link from 'next/link'

const AboutSectionLink = props => {
    return [1, 2, 3, 4].map(number => {
        return (
            <div key={number} className='hover-arrow flex pt-2 items-center'>
                <p className='text-28 768:text-36 1024:text-40 1280:text-52 text-white uppercase 768:text-[#898989]'>
                    Mais sobre {props.gender} <span className='text-black'>{props.name}</span>
                </p>
                <div className='w-8 ml-2 aspect-square duration-700 relative overflow-hidden arrow-container'>
                    <span className='block w-8'>
                        <Arrow />
                    </span>
                    <span className='block w-8'>
                        <Arrow />
                    </span>
                </div>
            </div>
        )
    })
}
export default AboutSectionLink

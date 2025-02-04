import Link from 'next/link'
import Marquee from 'react-fast-marquee'
import AboutSectionLink from '@/molecules/AboutSectionLink'
import { slugify } from '@/utils/utils'

const HomePersonMarqueeSection = ({ name }) => {
    const href = `/nos#${slugify(name)}`

    return (
        <Link
            href={href}
            className='person-marquee 768:transition-opacity 768:fix-hover:hover:opacity-90 768:fix-hover:hover:pointer-events-auto absolute 768:fix-hover:opacity-0 768:fix-hover:pointer-events-none bottom-1 cursor-pointer 768:w-full 768:fix-hover:h-full 768:fix-hover:bg-[var(--background-color)] 768:fix-hover:top-0 768:left-0 768:fix-hover:flex 768:items-center'
        >
            <Marquee gradient={false} speed={50} className='overflow-hidden'>
                <AboutSectionLink name={name} />
            </Marquee>
        </Link>
    )
}
export default HomePersonMarqueeSection

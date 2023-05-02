import Link from 'next/link'
import Marquee from 'react-fast-marquee'
import AboutSectionLink from '@/molecules/AboutSectionLink'

const HomePersonMarqueeSection = ({ name, href }) => {
    return (
        <Link
            href={href}
            className='person-marquee 768:transition-opacity 768:fix-hover:hover:opacity-100 768:fix-hover:hover:pointer-events-auto absolute 768:opacity-0 768:pointer-events-none bottom-1 cursor-pointer 768:w-full 768:h-full 768:bg-white/80 768:top-0 768:left-0 768:flex 768:items-center'
        >
            <Marquee gradient={false} speed={50}>
                <AboutSectionLink name={name} href={href} />
            </Marquee>
        </Link>
    )
}
export default HomePersonMarqueeSection

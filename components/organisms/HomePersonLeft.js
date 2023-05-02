import Link from 'next/link'
import ImageContainer from '@/atoms/ImageContainer'
import HomePersonName from '@/atoms/HomePersonName'
import HomePersonDescription from '@/atoms/HomePersonDescription'
import HomePersonRole from '@/atoms/HomePersonRole'
import HomePersonMarqueeSection from '@/molecules/HomePersonMarqueeSection'
import Arrows from '@/molecules/Arrows'

const HomePersonLeft = ({ name, role, description, image, alt = '', href = '/nos' }) => {
    return (
        <div className='768:relative 768:mb-20 grid grid-cols-2 gap-x-8 768:grid-cols-12 768:grid-rows-[auto_1fr] '>
            <Link href={href} className='mb-24 col-span-2 768:col-start-7 768:col-span-4 768:row-start-1 1280:col-start-6 person-details w-max '>
                <div className='flex hover-arrow items-baseline'>
                    <HomePersonName name={name} />
                    <Arrows />
                </div>
                <HomePersonRole role={role} />
            </Link>
            <div className='person-image overflow-hidden 768:overflow-visible max-h-[90vh] relative col-span-2 row-start-2 768:col-start-1 768:row-start-1 768:col-span-6 768:row-span-2 1280:col-span-5 hover-arrow 768:static'>
                <ImageContainer src={image} alt={alt} aspectRatio='2/3' sizes='100vw, (min-width: 768px) 45vw' />
                <HomePersonMarqueeSection name={name} href={href} />
            </div>
            <div className='row-start-3 my-12 768:my-0 col-span-2 768:col-start-7 768:col-span-6 768:row-start-2 1280:col-start-6'>
                <HomePersonDescription description={description} />
            </div>
        </div>
    )
}
export default HomePersonLeft

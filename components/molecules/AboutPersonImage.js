import ImageContainer from '@/atoms/ImageContainer'
import HomePersonMarqueeSection from '@/molecules/HomePersonMarqueeSection'
import { getImage } from '@/utils/utils'

const AboutPersonImage = props => {
    return (
        <div
            className={`person-image overflow-hidden 768:overflow-visible max-h-[90vh] relative col-span-2 row-start-2  768:row-start-1 768:col-span-6 768:row-span-2 1280:col-span-5  hover-arrow 768:fix-hover:static ${
                props.leftPerson ? `768:col-start-1` : ''
            } ${props.rightPerson ? `768:col-start-7 1280:col-start-8` : ''}`}
        >
            <ImageContainer src={`/${getImage(props.image)}`} alt={props.alt} aspectRatio='2/3' sizes='100vw, (min-width: 768px) 45vw' />
            <HomePersonMarqueeSection name={props.name} href={props.href} />
        </div>
    )
}
export default AboutPersonImage

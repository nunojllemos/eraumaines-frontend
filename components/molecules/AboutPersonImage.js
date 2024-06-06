import ImageContainer from '@/atoms/ImageContainer'
import HomePersonMarqueeSection from '@/molecules/HomePersonMarqueeSection'
import { getImage } from '@/utils/utils'

const AboutPersonImage = ({ leftPerson, rightPerson, image, alt, name }) => {
    return (
        <div
            className={`person-image overflow-hidden 768:overflow-visible max-h-[90vh] relative col-span-2 row-start-2 768:row-start-1 768:col-span-6 768:row-span-2 1280:col-span-5 hover-arrow 768:fix-hover:static self-center ${
                leftPerson ? `768:col-start-1 1280:col-start-2` : ''
            } ${rightPerson ? `768:col-start-7 1280:col-start-8` : ''}`}
        >
            <ImageContainer forceHeight={false} src={getImage(image)} alt={alt} aspectRatio='3/2' sizes='(min-width: 768px) 45vw, 100vw' />
            <HomePersonMarqueeSection name={name} />
        </div>
    )
}
export default AboutPersonImage

import ImageContainer from '@/atoms/ImageContainer'
import { getImage } from '@/utils/utils'

const Video = ({ media, typeOfMedia, isMuted }) => {
    console.log(getImage(media))

    return typeOfMedia === 'video' ? (
        <video className='h-full w-full object-cover object-center' loop autoPlay muted={isMuted} playsInline src={media}></video>
    ) : (
        <ImageContainer src={getImage(media)} />
    )
}

export default Video

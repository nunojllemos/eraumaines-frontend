import ImageContainer from '@/atoms/ImageContainer'
import { getImage } from '@/utils/utils'

const Video = ({ media, typeOfMedia, isMuted }) => {
    return typeOfMedia === 'video' ? (
        <video className='h-full w-full object-cover object-center' loop autoPlay muted={isMuted} playsInline src={media}></video>
    ) : (
        <ImageContainer src={getImage(media)} alt='video' />
    )
}

export default Video

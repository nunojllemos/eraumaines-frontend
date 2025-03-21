import ImageContainer from '@/atoms/ImageContainer'
import { getImage } from '@/utils/utils'

const Video = ({ media, typeOfMedia, isMuted }) => {
    if (!media) return

    return typeOfMedia?.includes('video') ? (
        <video className='h-full w-full 1024:object-cover object-center' loop autoPlay muted={isMuted} playsInline src={getImage(media)}></video>
    ) : (
        <ImageContainer priority={true} src={getImage(media)} alt='' />
    )
}

export default Video

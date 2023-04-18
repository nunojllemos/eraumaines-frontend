import ImageContainer from '@/atoms/ImageContainer'

const Video = ({ media, typeOfMedia, isMuted }) => {
    // return <ImageContainer src='/images/heroimg.png' alt='video' />
    return typeOfMedia === 'video' ? (
        <video className='h-full w-full object-cover object-center' loop autoPlay muted={isMuted} playsInline src={media}></video>
    ) : (
        <ImageContainer src={media} alt='video' />
    )
}

export default Video

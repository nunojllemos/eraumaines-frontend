import ImageContainer from '../atoms/ImageContainer'
import Link from 'next/link'

const WorkSectionInfoCard = ({ slug, src, aspectRatio, category, location, title, description, typeOfMedia = 'image' }) => {
    return (
        <article className='h-full'>
            <Link scroll={false} href={`/historias/${slug}`} className='relative block font-light overflow-hidden cursor-pointer group  group h-full'>
                {typeOfMedia.includes('video') ? (
                    <video className='h-full object-cover object-center' muted playsInline autoPlay loop src={src}></video>
                ) : (
                    <ImageContainer src={src} alt='' aspectRatio={aspectRatio} />
                )}
                <div className='bg-black/40 h-full w-full absolute 768:fix-hover:opacity-0 fix-hover:group-hover:opacity-100 transition-opacity top-0 left-0'></div>
                <div className='absolute bottom-0 768:fix-hover:-bottom-full text-white p-4 768:fix-hover:group-hover:bottom-0 transition-[bottom] '>
                    <p className='font-power-grotesk text-26 mb-2'>{title}</p>
                    <div className='text-14 mb-8'>
                        <p>{category}</p>
                        <p>{location}</p>
                    </div>
                    <div className='text-22 leading-tight ellipsis-text-3'>{description}</div>
                </div>
            </Link>
        </article>
    )
}
export default WorkSectionInfoCard

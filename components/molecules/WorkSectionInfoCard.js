import Link from 'next/link'
import { ExternalLink } from '@/atoms/Icons'
import ImageContainer from '@/atoms/ImageContainer'

const WorkSectionInfoCard = ({ slug, src, aspectRatio, category, location, title, description, typeOfMedia = 'image' }) => {
    return (
        <article className='relative group'>
            <Link scroll={false} href={`/historias/${slug}`} className='relative block font-light overflow-hidden cursor-pointer group  group h-full'>
                {typeOfMedia.includes('video') ? (
                    <video className='object-cover object-center' muted playsInline autoPlay loop src={src}></video>
                ) : (
                    <ImageContainer src={src} alt='' aspectRatio={aspectRatio} />
                )}
                <div className='transition-opacity w-6 1024:w-10 absolute top-4 fix-hover:bottom-4 left-4 fix-hover:group-hover:opacity-0 text-white z-1'>
                    <ExternalLink />
                </div>
                <div className='bg-black/40 h-full w-full absolute 768:fix-hover:opacity-0 fix-hover:group-hover:opacity-100 transition-opacity top-0 left-0'></div>
                <div className='absolute bottom-0 768:fix-hover:-bottom-full text-white p-4 768:fix-hover:group-hover:bottom-0 transition-[bottom] '>
                    <p className='font-power-grotesk text-20 1024:text-26 mb-2'>{title}</p>
                    <div className='text-14 mb-8'>
                        <p className='text-12 1024:text-16'>{category}</p>
                        <p className='text-12 1024:text-16'>{location}</p>
                    </div>
                    <div className='text-16 1024:text-22 leading-tight ellipsis-text-3'>{description}</div>
                </div>
            </Link>
        </article>
    )
}
export default WorkSectionInfoCard

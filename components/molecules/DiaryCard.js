import ImageContainer from '@/atoms/ImageContainer'
import DiaryCardTitle from '../atoms/DiaryCardTitle'
import DiaryCardDescription from '../atoms/DiaryCardDescription'
import Link from 'next/link'
import InternalLink from './InternalLink'

const DiaryCard = ({ src, aspectRatio, sizes, title, description, href = 'slug-example' }) => {
    return (
        <Link href={`diario/${href}`} className='group hover-arrow' scroll={false}>
            <article className='relative overflow-hidden diary-card'>
                <div className='transition-all scale-110 origin-top-right fix-hover:group-hover:origin-bottom-left'>
                    <ImageContainer src={src} aspectRatio={aspectRatio} sizes={sizes} />
                </div>
                <div className='bg-white py-5 991:px-4 mt-8 991:mt-0 991:absolute bottom-8 left-8 max-w-[45rem] w-[calc(100%_-_4rem)]'>
                    <div className='flex flex-col gap-2 768:gap-6 991:gap-8'>
                        <DiaryCardTitle title={title} />
                        {description && <DiaryCardDescription description={description} />}
                    </div>
                    <div className='mt-4 pointer-events-none'>
                        <InternalLink href='' text='Ler mais' />
                    </div>
                </div>
            </article>
        </Link>
    )
}
export default DiaryCard

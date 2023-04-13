import ImageContainer from '@/atoms/ImageContainer'
import DiaryCardTitle from '../atoms/DiaryCardTitle'
import DiaryCardDescription from '../atoms/DiaryCardDescription'
import Link from 'next/link'

const DiaryCard = ({ src, aspectRatio, title, description, href = '' }) => {
    return (
        <Link href={href} className='group'>
            <article className=' relative overflow-hidden'>
                <div className='transition-all scale-110 origin-left fix-hover:group-hover:origin-right'>
                    <ImageContainer src={src} aspectRatio={aspectRatio} />
                </div>
                <div className='bg-white py-5 991:px-4 mt-8 991:mt-0 991:absolute bottom-8 left-8 max-w-[45rem] w-[calc(100%_-_4rem)]'>
                    <div className='flex flex-col gap-2 768:gap-6 991:gap-8'>
                        <DiaryCardTitle title={title} />
                        {description && <DiaryCardDescription description={description} />}
                    </div>
                    Ler mais
                </div>
            </article>
        </Link>
    )
}
export default DiaryCard

import ImageContainer from '@/atoms/ImageContainer'
import DiaryCardTitle from '../atoms/DiaryCardTitle'
import DiaryCardDescription from '../atoms/DiaryCardDescription'
import Link from 'next/link'
import useTranslation from '@/hooks/useTranslation'
import { Arrow } from '@/atoms/Icons'

const DiaryCard = ({ src, aspectRatio, sizes, title, description, href = 'slug-example' }) => {
    const t = useTranslation()

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
                    <div className='mt-4 pointer-events-none text-14'>
                        <div className='flex items-center'>
                            <span className='text-16 block uppercase mr-2 mt-2 leading-none'>{t.diary.card.link}</span>
                            <div className='w-8 aspect-square duration-700 relative overflow-hidden arrow-container'>
                                <span className='block w-8'>
                                    <Arrow />
                                </span>
                                <span className='block w-8'>
                                    <Arrow />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    )
}
export default DiaryCard

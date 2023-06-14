import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, Autoplay } from 'swiper'
import { FaqArrow } from '../atoms/Icons'

const WorkSectionTestimonialsCard = ({ reviews, invertColors = false, backgroundColor }) => {
    return (
        <div
            style={{ backgroundColor }}
            className={`max-w-full aspect-square 768:aspect-[3/2] shrink-0 ${invertColors ? `bg-white text-black` : `bg-black text-white`}`}
        >
            <Swiper
                className='h-full'
                navigation={{
                    nextEl: '.button-next-slide',
                    prevEl: '.button-prev-slide',
                }}
                autoplay={{ delay: 7000, disableOnInteraction: false }}
                loop={true}
                modules={[Navigation, Autoplay]}
            >
                {reviews.data.map(review => {
                    const { id, attributes } = review
                    const { author, content, year } = attributes

                    return (
                        <SwiperSlide key={`work-grid-review-${id}`}>
                            <div className='p-4 flex flex-col justify-between h-full text-20 1024:text-26 font-subjectivity swiper-custom'>
                                <p className='mb-12'>{content}</p>
                                <div>
                                    {author && (
                                        <p className='text-16'>
                                            {author}
                                            {year && <span className='text-12'>, {year}</span>}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
                <div className={`flex ${invertColors ? 'text-black' : 'text-white'} text-white absolute bottom-6 z-1 right-5`}>
                    <div className='button-prev-slide w-8 rotate-180 hover:fix-hover:opacity-60 cursor-pointer'>
                        <FaqArrow />
                    </div>
                    <div className='button-next-slide w-8 ml-12 768:ml-10 hover:fix-hover:opacity-60 cursor-pointer'>
                        <FaqArrow />
                    </div>
                </div>
            </Swiper>
        </div>
    )
}
export default WorkSectionTestimonialsCard

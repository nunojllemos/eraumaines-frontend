import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, Autoplay } from 'swiper'
import { FaqArrow } from '../atoms/Icons'
import Link from 'next/link'

const WorkSectionTestimonialsCard = ({ testemonials, invertColors }) => {
    console.log('teste...', testemonials)

    return (
        <div className={`mb-8 flex-1 aspect-square 768:aspect-auto ${invertColors ? `bg-white text-black` : `bg-black text-white`}`}>
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
                {testemonials.testemonials.map((testemonial, i) => {
                    return (
                        <div key={i}>
                            <SwiperSlide>
                                <div className='p-4 flex flex-col justify-between h-full text-20 1024:text-26 font-subjectivity swiper-custom'>
                                    <p>{`"${testemonial.comment}"`}</p>
                                    <div>
                                        <p>{testemonial.year}</p>
                                        <Link href='/' className='hover:fix-hover:opacity-60'>
                                            {testemonial.engaged}
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
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

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'
import { FaqArrow } from '../atoms/Icons'

const WorkSectionTestimonialsCard = props => {
    const testemonials = [
        {
            year: '2023',
            engaged: 'Ana & Nuno',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae maxime, velit sed deserunt pariatur.',
        },
        {
            year: '2022',
            engaged: 'José & Paula',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae maxime, velit sed deserunt pariatur.',
        },
        {
            year: '2023',
            engaged: 'Joana & Miguel',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae maxime, velit sed deserunt pariatur.',
        },
    ]

    return (
        <>
            <Swiper
                navigation={{
                    nextEl: '.button-next-slide',
                    prevEl: '.button-prev-slide',
                }}
                modules={[Navigation]}
            >
                {testemonials.map((testemonial, i) => {
                    return (
                        <div key={i}>
                            <SwiperSlide>
                                <div
                                    className={`${
                                        props.invertColors ? `bg-white text-black` : `bg-black text-white`
                                    } p-4 flex flex-col justify-between h-[355px] 768:h-[315px] 1024:h-[335px] text-20 1024:text-26 font-subjectivity swiper-custom`}
                                >
                                    <p>{`"${testemonial.comment}"`}</p>
                                    <div>
                                        <p>{testemonial.year}</p>
                                        <p>{testemonial.engaged}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                    )
                })}
                <div className={`flex ${props.invertColors ? 'text-black' : 'text-white'} text-white absolute bottom-6 z-1 right-5`}>
                    <div className='button-prev-slide w-8 rotate-180'>
                        <FaqArrow />
                    </div>
                    <div className='button-next-slide w-8 ml-12 768:ml-10'>
                        <FaqArrow />
                    </div>
                </div>
            </Swiper>
        </>
    )
}
export default WorkSectionTestimonialsCard

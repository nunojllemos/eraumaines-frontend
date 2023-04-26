import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'
import { FaqArrow } from '../atoms/Icons'

const WorkSectionTestimonialsCard = () => {
    const testemonials = [
        {
            year: '2023',
            engaged: 'Ana & Nuno',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae maxime, velit sed deserunt pariatur.',
        },
        {
            year: '2023',
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
                        <>
                            <SwiperSlide>
                                <div className='bg-black text-white p-4 flex flex-col justify-between h-[355px] 768:h-[315px] 1024:h-[335px] default-text font-subjectivity swiper-custom'>
                                    <p>{testemonial.comment}</p>
                                    <div>
                                        <p>{testemonial.year}</p>
                                        <p>{testemonial.engaged}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </>
                    )
                })}
                <div className='flex text-white absolute bottom-5 z-1 right-5'>
                    <div className='button-prev-slide w-10 rotate-180'>
                        <FaqArrow />
                    </div>
                    <div className='button-next-slide w-10 ml-12'>
                        <FaqArrow />
                    </div>
                </div>
            </Swiper>
        </>
    )
}
export default WorkSectionTestimonialsCard

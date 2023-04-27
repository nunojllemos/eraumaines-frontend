import ImageContainer from '../atoms/ImageContainer'
import Link from 'next/link'

const WorkSectionInfoCard = props => {
    return (
        <article>
            <Link href='/' className='relative block font-light overflow-hidden cursor-pointer group  mb-8 group'>
                <ImageContainer src={props.src} aspectRatio={props.aspectRatio} />
                <div className='bg-black/40 h-full w-full absolute opacity-0 fix-hover:group-hover:opacity-100 transition-opacity top-0 left-0'></div>
                <div className='absolute bottom-0 768:-bottom-full text-white p-4 768:fix-hover:group-hover:bottom-0 transition-[bottom] '>
                    <p className='font-power-grotesk text-26 mb-2'>{props.engaged}</p>
                    <div className='text-14 mb-8'>
                        <p>{props.work}</p>
                        <p>{props.local}</p>
                    </div>
                    <div className='text-22 leading-tight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</div>
                </div>
            </Link>
        </article>
    )
}
export default WorkSectionInfoCard

import ImageContainer from '../atoms/ImageContainer'
import Link from 'next/link'

const WorkSectionInfoCard = () => {
    return (
        <Link href='/' className='relative block font-light overflow-hidden cursor-pointer group'>
            <ImageContainer src='/images/work-section-card-1.png' aspectRatio='2/3' />
            <div className='absolute bottom-0 768:-bottom-full text-white p-4 768:fix-hover:group-hover:bottom-0 transition-[bottom]'>
                <p className='font-power-grotesk text-26 mb-2'>Ana e Nuno</p>
                <div className='text-14 mb-8'>
                    <p>Casamento</p>
                    <p>Vila do Conde</p>
                </div>
                <div className='text-22 leading-tight'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
            </div>
        </Link>
    )
}
export default WorkSectionInfoCard

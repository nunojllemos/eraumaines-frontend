import Link from 'next/link'
import Arrows from '@/molecules/Arrows'
import LinkText from '@/atoms/LinkText'

const WorkSectionCard = ({ href = '/historias' }) => {
    return (
        <Link scroll={false} href={href} className='bg-black shrink-0 text-white hover-arrow p-4 flex flex-col justify-between aspect-square mb-8'>
            <p className='text-50 768:text-40 1024:text-50 uppercase font-power-grotesk w-1/4'>Histórias com arte</p>
            <div className='flex items-center'>
                <LinkText text='Ver todas' />
                <Arrows />
            </div>
        </Link>
    )
}
export default WorkSectionCard

import InternalLink from './InternalLink'

const WorkSectionCard = () => {
    return (
        <div className='bg-black text-white hover-arrow p-4 h-[355px] 768:h-[315px] 1024:h-[335px] flex flex-col justify-between'>
            <p className='text-50 768:text-40 1024:text-50 uppercase font-power-grotesk w-1/4'>Histórias com arte</p>
            <InternalLink text='ver todas' href='/' />
        </div>
    )
}
export default WorkSectionCard

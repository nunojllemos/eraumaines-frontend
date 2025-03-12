import Link from 'next/link'
import Arrows from '@/molecules/Arrows'
import LinkText from '@/atoms/LinkText'
import useTranslation from '@/hooks/useTranslation'

const WorkSectionCard = ({ href = '/historias', title }) => {
    const t = useTranslation()

    return (
        <Link
            style={{ backgroundColor: 'var(--title-color)' }}
            scroll={false}
            href={href}
            className='bg-black shrink-0 text-white hover-arrow p-4 flex flex-col justify-between aspect-square'
        >
            <p className='text-40 768:text-40 1024:text-50 uppercase font-rial w-1/2'>{title}</p>
            <div className='flex items-center'>
                <LinkText text={t.homepage.grid.cta_link_text} />
                <Arrows />
            </div>
        </Link>
    )
}
export default WorkSectionCard

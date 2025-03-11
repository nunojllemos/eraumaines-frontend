import Arrows from '@/molecules/Arrows'
import useTranslation from '@/hooks/useTranslation'

const AboutSectionLink = ({ name }) => {
    const t = useTranslation()

    return [1, 2, 3, 4].map(number => {
        return (
            <div key={number} className='hover-arrow hidden 1024:flex pt-2 items-center'>
                <span className='text-28 768:text-36 1024:text-40 1280:text-52 text-[var(--text-color)] uppercase 768:fix-hover:text-[var(--text-color)]'>
                    {t.homepage.about.ticker} <span className='text-[var(--title-color)]'>{name}</span>
                </span>
                <Arrows />
            </div>
        )
    })
}
export default AboutSectionLink

import Arrows from '@/molecules/Arrows'
import useTranslation from '@/hooks/useTranslation'

const AboutSectionLink = ({ name }) => {
    const t = useTranslation()

    return [1, 2, 3, 4].map(number => {
        return (
            <div key={number} className='hover-arrow flex pt-2 items-center'>
                <span className='text-28 768:text-36 1024:text-40 1280:text-52 text-white uppercase 768:fix-hover:text-[#898989]'>
                    {t.homepage.about.ticker} <span className='text-black'>{name}</span>
                </span>
                <Arrows />
            </div>
        )
    })
}
export default AboutSectionLink

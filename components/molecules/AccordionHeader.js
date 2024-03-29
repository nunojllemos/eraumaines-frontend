import { FaqArrow } from '@/atoms/Icons'
import AccordionTitle from '@/atoms/AccordionTitle'

const AccordionHeader = ({ text, isOpen }) => {
    return (
        <div className='flex justify-between  gap-4 py-6 1280:py-8 '>
            <AccordionTitle text={text} />
            <div className={`w-8 mt-2 shrink-0 h-max transition-transform origin-center ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
                <FaqArrow />
            </div>
        </div>
    )
}
export default AccordionHeader

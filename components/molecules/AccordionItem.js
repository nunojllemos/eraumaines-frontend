import { useState } from 'react'
import Collapsible from 'react-collapsible'
import AccordionHeader from '@/molecules/AccordionHeader'

const AccordionItem = ({ content, title }) => {
    const [isOpen, setIsOpen] = useState(false)

    const collapsibleOptions = {
        transitionTime: 250,
        transitionCloseTime: 250,
        easing: 'cubic-bezier(.24,.16,0,.95)',
        trigger: <AccordionHeader isOpen={isOpen} text={title} />,
        onTriggerOpening: () => setIsOpen(true),
        onTriggerClosing: () => setIsOpen(false),
        open: isOpen,
    }

    const closeAccordion = () => setIsOpen(false)

    return (
        <Collapsible {...collapsibleOptions}>
            <div onClick={closeAccordion} className='cursor-pointer text-18'>
                {content}
                <p className='text-18'></p>
            </div>
        </Collapsible>
    )
}
export default AccordionItem

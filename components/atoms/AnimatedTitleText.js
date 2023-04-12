import { useRef } from 'react'
import { useScroll, motion, useTransform } from 'framer-motion'

const AnimatedTitleText = ({ isPrimary, children }) => {
    const targetRef = useRef()
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['end start', 'start end'],
    })
    const x = useTransform(scrollYProgress, [0, 1], ['-100vh', '0px'])

    return (
        <motion.div
            ref={targetRef}
            style={{ translateY: '-10%', x }}
            className='leading-[1.3] text-80 768:text-100 1280:text-130 font-maginia whitespace-nowrap'
        >
            {isPrimary ? <h1>{children}</h1> : <h2>{children}</h2>}
        </motion.div>
    )
}
export default AnimatedTitleText

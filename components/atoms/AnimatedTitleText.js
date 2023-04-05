import { useState, useEffect } from 'react'
import { useScroll, motion } from 'framer-motion'

const AnimatedTitleText = ({ isPrimary, children }) => {
    const { scrollY } = useScroll()
    const [scrollValue, setScrollValue] = useState(0)

    useEffect(() => {
        console.log(scrollYProgress)
        // setScrollValue(scrollY.get())
        // console.log('s: ', scrollValue)
    }, [scrollValue, scrollY])

    return (
        <motion.div
            style={{ translateX: `${scrollY.get()}px`, translateY: '-10%' }}
            className='leading-[1.3] text-80 768:text-100 1280:text-130 font-maginia whitespace-nowrap'
        >
            {isPrimary ? <h1>{children}</h1> : <h2>{children}</h2>}
            {/* <motion.div className='h-2 w-24 bg-[red]' style={{ scaleX: scrollYProgress }}></motion.div> */}
        </motion.div>
    )
}
export default AnimatedTitleText

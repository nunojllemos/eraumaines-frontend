import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'

const PageTransition = ({ children }) => {
    const router = useRouter()

    const variants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    }

    return (
        <AnimatePresence initial={false}>
            <motion.div key={router.asPath} variants={variants} initial='initial' animate='animate' exit='exit' className='transition-opacity duration-1000'>
                {children}
            </motion.div>
        </AnimatePresence>
    )
}
export default PageTransition

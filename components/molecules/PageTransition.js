import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'

const PageTransition = ({ children }) => {
    const router = useRouter()

    const variants = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 1 } },
        exit: { opacity: 0, transition: { duration: 1 } },
    }

    return (
        <AnimatePresence initial={false} mode='wait'>
            <motion.div key={router.asPath} variants={variants} initial='initial' animate='animate' exit='exit'>
                {children}
            </motion.div>
        </AnimatePresence>
    )
}
export default PageTransition

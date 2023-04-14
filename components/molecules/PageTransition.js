import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'

const PageTransition = ({ children }) => {
    const router = useRouter()

    // const variants = {
    //     initial: { opacity: 0 },
    //     animate: { opacity: 1, transition: { duration: 1 } },
    //     exit: { opacity: 0, transition: { duration: 1 } },
    // }
    const variants = {
        initial: {
            x: '-100%',
            scaleX: 1,
        },
        animate: {
            x: '-100%',
            scaleX: 0.5,
            transition: {
                duration: 3,
                scaleX: {
                    // delay: 1,
                    duration: 1,
                },
                x: {
                    duration: 1,
                    delay: 0,
                },
            },
        },
        exit: {
            x: 0,
            scaleX: 1,
            transition: {
                duration: 2,
            },
        },
    }

    return (
        <AnimatePresence initial={false} mode='wait'>
            <motion.div
                className='bg-[red] fixed z-10 w-full h-full'
                key={router.asPath}
                variants={variants}
                initial='initial'
                animate='animate'
                exit='exit'
            ></motion.div>
            {children}
        </AnimatePresence>
    )
}
export default PageTransition

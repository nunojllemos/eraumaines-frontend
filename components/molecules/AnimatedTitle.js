import AnimatedTitleText from '../atoms/AnimatedTitleText'

const AnimatedTitle = ({ isPrimary = true, children }) => {
    return (
        <div className='w-full mb-8 overflow-hidden animated-title-container'>
            <AnimatedTitleText isPrimary={isPrimary}>{children}</AnimatedTitleText>
        </div>
    )
}
export default AnimatedTitle

const AnimatedTitleText = ({ isPrimary, children }) => {
    return (
        <div className='leading-[1.3] -translate-y-[10%] text-80 768:text-100 1280:text-130 font-maginia whitespace-nowrap'>
            {isPrimary ? <h1>{children}</h1> : <h2>{children}</h2>}
        </div>
    )
}
export default AnimatedTitleText

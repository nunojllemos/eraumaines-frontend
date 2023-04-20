import { Arrow } from '../atoms/Icons'

const Arrows = () => {
    return (
        <div className='w-8 ml-2 aspect-square duration-700 relative overflow-hidden arrow-container'>
            <span className='block w-8'>
                <Arrow />
            </span>
            <span className='block w-8'>
                <Arrow />
            </span>
        </div>
    )
}
export default Arrows

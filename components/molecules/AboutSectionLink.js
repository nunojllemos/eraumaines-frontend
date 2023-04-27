import Arrows from './Arrows'

const AboutSectionLink = props => {
    return [1, 2, 3, 4].map(number => {
        return (
            <div key={number} className='hover-arrow flex pt-2 items-center'>
                <span className='text-28 768:text-36 1024:text-40 1280:text-52 text-white uppercase 768:text-[#898989]'>
                    Mais sobre {props.gender} <span className='text-black'>{props.name}</span>
                </span>
                <Arrows />
            </div>
        )
    })
}
export default AboutSectionLink

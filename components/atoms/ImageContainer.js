import Image from 'next/image'
import styled from 'styled-components'

const StyledImageContainer = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: ${p => p.aspectRatio || 'unset'};
`

const ImageContainer = ({ src, alt = '', fill = true, sizes = '100vw', aspectRatio, quality = 75 }) => {
    return (
        <StyledImageContainer aspectRatio={aspectRatio}>
            <Image className='object-cover' src={src} alt={alt} fill={fill} sizes={sizes} quality={quality} />
        </StyledImageContainer>
    )
}
export default ImageContainer

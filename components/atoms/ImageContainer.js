import { useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const StyledImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: ${p => (p.forceHeight ? '100%' : 'auto')};
    aspect-ratio: ${p => p.aspectRatio || 'unset'};
    background-color: #e2e2e2;
`

const ImageContainer = ({ src = '', alt = '', fill = true, sizes = '100vw', aspectRatio, quality = 75, priority = false, forceHeight = true }) => {
    const [isLoaded, setIsLoaded] = useState(false)

    const handleLoadingComplete = () => setIsLoaded(true)

    return (
        <StyledImageContainer forceHeight={forceHeight} aspectRatio={aspectRatio}>
            <Image
                className={`object-cover transition-opacity ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                src={src}
                alt={alt}
                fill={fill}
                sizes={sizes}
                quality={quality}
                priority={priority}
                onLoadingComplete={handleLoadingComplete}
            />
        </StyledImageContainer>
    )
}
export default ImageContainer

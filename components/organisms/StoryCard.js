import React from 'react'
import Link from 'next/link'
import ImageContainer from '../atoms/ImageContainer'
import { ExternalLink } from '../atoms/Icons'
import { getImage } from '@/utils/utils'

const StoryCard = ({ mime, slug, url, title, location, categoryName }) => {
    const playVideo = e => {
        if (e.currentTarget.querySelector('video')) {
            const video = e.currentTarget.querySelector('video')

            video.play()
        }
    }

    const stopVideo = e => {
        if (e.currentTarget.querySelector('video')) {
            const video = e.currentTarget.querySelector('video')

            video.pause()
            video.currentTime = 0
        }
    }

    return (
        <div
            onMouseEnter={event => mime && mime.includes('video') && playVideo(event)}
            onMouseLeave={event => mime && mime.includes('video') && stopVideo(event)}
            className='text-32 my-12 874:my-6 aspect-video relative flex items-center justify-center bg-black/10 snap-center group'
        >
            {mime && mime.includes('video') ? (
                <Link scroll={false} href={`historias/${slug}`}>
                    <video muted playsInline loop src={getImage(url)}></video>
                </Link>
            ) : (
                url && (
                    <Link scroll={false} href={`historias/${slug}`} className='block w-full h-full'>
                        <ImageContainer sizes='(min-width: 1024px) 50vw, 100vw' src={getImage(url)} alt='' />
                    </Link>
                )
            )}
            <div className='pointer-events-none transition-opacity opacity-0 absolute bottom-4 left-4 fix-hover:group-hover:opacity-100 text-white text-24 leading-none'>
                <span className='whitespace-nowrap'>{title}</span>
                <span className='inline-block w-4 ml-2'>
                    <ExternalLink />
                </span>
            </div>
            <span className='pointer-events-none 874:hidden absolute font-power-grotesk top-[calc(100%_+_6px)] left-0 block text-16 414:text-18'>
                {title}
                <span className='inline-block w-3 ml-2'>
                    <ExternalLink />
                </span>
            </span>
            <span className='874:hidden absolute top-[calc(100%_+_1rem)] right-0 block text-12 uppercase'>
                {location}, {categoryName}
            </span>
        </div>
    )
}

export default StoryCard

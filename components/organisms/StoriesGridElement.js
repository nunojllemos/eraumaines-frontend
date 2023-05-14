const StoriesGridElement = ({ story }) => {
    const { __component } = story

    if (__component.includes('reviews')) return <div>Review</div>
    if (__component.includes('media')) return <div>Media</div>
    if (__component.includes('story')) return <div>Story</div>
}
export default StoriesGridElement

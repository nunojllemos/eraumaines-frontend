export const getImage = url => {
    if (!url) return

    return `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`
}

export const slugify = string => {
    return String(string)
        .normalize('NFKD') // split accented characters into their base characters and diacritical marks
        .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
        .trim() // trim leading or trailing whitespace
        .toLowerCase() // convert to lowercase
        .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
        .replace(/\s+/g, '-') // replace spaces with hyphens
        .replace(/-+/g, '-') // remove consecutive hyphens
}

export const getSocialNetworkName = url => {
    const isYoutube = url.includes('youtube')
    const isFacebook = url.includes('facebook')
    const isTwitter = url.includes('x.com')
    const isTikTok = url.includes('tiktok')
    const isLinkedin = url.includes('linkedin')
    const isVimeo = url.includes('vimeo')
    const isInstagram = url.includes('instagram')

    return {
        isYoutube,
        isFacebook,
        isTwitter,
        isTikTok,
        isLinkedin,
        isVimeo,
        isInstagram,
    }
}

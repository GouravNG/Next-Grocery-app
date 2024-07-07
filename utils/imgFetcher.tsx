export function IMGFetcher(imgPath: String | undefined) {
    try {
        const domainHost = 'http://localhost:1337'
        if (typeof imgPath === undefined) {
            console.error('img link is undefined')
            throw new Error(`Image not found for the ${domainHost + imgPath}`)
        }
        return domainHost + imgPath
    } catch (e) {
        console.error(e)
        return 'falbackimgURL'
    }
}

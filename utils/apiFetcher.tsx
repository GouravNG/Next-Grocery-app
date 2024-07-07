export async function APIFetcher(apiPath: String) {
    try {
        const domainHost = 'http://localhost:1337'
        const data = await fetch(domainHost + apiPath)
        const APIData = await data.json()
        return APIData
    } catch (e) {
        console.log(e)
        return { status: 500, error: 'Something went wrong!!' }
    }
}

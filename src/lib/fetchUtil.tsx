export const fetchUtil = async (url: string) => {
    const response = await fetch(url)
    if (!response.ok) throw new Error(`Fetch Error: ${response.statusText}`)
    return await response.json()
}
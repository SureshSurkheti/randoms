export default defineEventHandler( async (event) => {
    const url = 'https://fakestoreapi.com/products'
    const body = await readBody(event)
    const data = $fetch(url, {
        method: 'post', 
        body

    })
    return data
})
export default defineEventHandler(async event => {
    const config = useRuntimeConfig(event)
    const {apiNinjaKey} = config
    const query = getQuery(event)
    const url = 'https://api.api-ninjas.com/v1/celebrity'
    const data = await $fetch(url, {
        headers: {
            'X-Api-Key': apiNinjaKey
        },
        query 
    })
    console.log('suresh', data)
    return data
})
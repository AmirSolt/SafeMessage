import type {
    Bio,
    Contact,
    MessageSettings,
    Message,
    PublicPageStats,
    Theme,
} from './schemas/userData'

import {fetchUserFeature} from './dbFetcher'

// async function validateParse(schema, data){
//     const {success, data: parsedData, error} = schema.safeParse(data)
//     if(!success) throw error
//     // Wrong keep zod object as an object and update its value if validates
//     return parsedData
// }


export const getBio = async (getSession, supabase) => {
    const fetchedData = await fetchUserFeature(getSession, supabase, 'bio')

    const bio:Bio = {
        pfp: fetchedData.pfp,
        handleName: fetchedData.handleName,
        displayName: fetchedData.displayName,
        desc: fetchedData.desc,
    }
    return bio
}


import {
    Bio,
    Contact,
    MessageSettings,
    Message,
    PublicPageStats,
    Theme,
} from './schemas/userData'

import {fetchUserFeature} from './dbFetcher'

async function validateParse(schema, data){
    const {success, data: parsedData, error} = schema.safeParse(data)
    if(!success) throw error
    // Wrong keep zod object as an object and update its value if validates
    return parsedData
}


export const getBio = async (getSession, supabase) => 
    validateParse(Bio, fetchUserFeature({getSession, supabase, 'bio'}))
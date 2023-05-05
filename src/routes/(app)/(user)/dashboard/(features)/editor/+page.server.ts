

import {publicPageConfig} from '$lib/data/server/PublicPage/PublicPageConfig'
import {currencies} from '$lib/data/server/utils'

export const load = async () => {
    return{
        publicPageConfig,
        currencies,
    }
};
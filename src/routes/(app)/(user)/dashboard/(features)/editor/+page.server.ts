

import {currencies} from '$lib/server/data/schemas/utils'

export const load = async () => {
    return{
        currencies,
    }
};
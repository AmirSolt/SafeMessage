

import {themeTemplates, currencies} from '$lib/data/schemas/utils'

export const load = async () => {
    return{
        themeTemplates,
        currencies,
    }
};
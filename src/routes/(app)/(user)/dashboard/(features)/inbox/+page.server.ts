

import {contact} from '$lib/data/server/Contact/Contact'
import {inbox} from '$lib/data/server/Inbox/Inbox'
import {currencies} from '$lib/data/server/utils'

export const load = async () => {
    return{
        contact,
        inbox,
    }
};
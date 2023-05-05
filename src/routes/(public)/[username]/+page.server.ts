import type { PageServerLoad } from './$types';
import db from '$lib/server/database';

export const load: PageServerLoad = async ({params}) => {

    const publicProfile = await db.authUser.findUnique({
        where: {
            username: params.username
        },
    });

    return {
        publicProfile
    }

};
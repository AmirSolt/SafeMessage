import {currencies} from '$lib/data/schemas/utils';

export const load = async ({ locals: { supabase }, params }) => {

	
    

	async function fetchPublicPageData() {
		const { data, error } = await supabase
            .from("bio")
            .select('*, message_settings(*), styling(*)')
            .eq('username', params.username)
            .single();


		if (error) throw error;
        const message_settings = data.message_settings;
        const styling = data.styling;
        delete data.message_settings;
        delete data.styling;
        const bio = data;
		return { bio, message_settings, styling };
	}


    const { bio, message_settings, styling } = await fetchPublicPageData();

	return {
        bio: bio,
        messageSettings:message_settings,
        styling:styling,
        currencies:currencies,

	}
}
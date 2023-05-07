export async function updateUserFeature(supabase, user, tableName: string, value:any) {
    const { data, error } = await supabase.from(tableName).update(value).eq('id', user.id);
    if (error) throw error;
    return data;
}

export async function updateMessageDB(supabase, message_id: number, value:any) {
    const { data, error } = await supabase.from('messages').update(value).eq('id', message_id);
    if (error) throw error;
    return data;
}


import { createClient } from '@supabase/supabase-js'

const supabaseUrl:string = process.env.PUBLIC_SUPABASE_URL || ""
const supabaseKey:string = process.env.PUBLIC_SUPABASE_ANON_KEY || ""
const supabase = createClient(supabaseUrl, supabaseKey)
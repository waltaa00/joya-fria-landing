import { createClient } from "@supabase/supabase-js"

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Supabase credentials missing. Please create a .env file with VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY"
  )
}

// Create a Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

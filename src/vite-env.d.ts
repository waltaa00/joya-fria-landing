interface ImportMetaEnv {
  readonly VITE_NEXT_PUBLIC_SUPABASE_URL: string
  readonly VITE_NEXT_PUBLIC_SUPABASE_ANON_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

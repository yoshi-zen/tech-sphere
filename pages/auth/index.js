import PageContainer from '@/components/page-container'
import { createClient } from '@supabase/supabase-js'
import themesupa

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export default function Auth() {
  const supabase = createClient(supabaseUrl, supabaseAnonKey)
  return (
    <PageContainer>
      <div>
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={['google']}
        />
        {/* <Auth supabaseClient={supabase} providers={['google']} /> */}
      </div>
    </PageContainer>
  )
}

import PageContainer from '@/components/page-container'
import ThemeSupa from '@supabase/auth-ui-react'
import { supabase } from '@/lib/supabase-api'
import { Auth } from '@supabase/auth-ui-react'
import { useState } from 'react'

import styles from '@/styles/auth.module.css'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'

export default function Authentification() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const searchParams = useSearchParams()
  const slug = searchParams.get('slug')

  const router = useRouter()

  const handleAuth = async (e) => {
    e.preventDefault()
    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        if (error) throw error
      } else {
        const { error } = await supabase.auth.signUp({ email, password })
        if (error) throw error
      }
      router.push(slug ? `/articles/${slug}` : '/')
    } catch (err) {
      alert(err.error_description || err.message)
    }
  }
  return (
    <PageContainer>
      {/* <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={['google']}
      /> */}

      <form onSubmit={handleAuth}>
        <div className={styles.login_container}>
          <h1>{isLogin ? 'ログイン' : '新規登録'}</h1>
          <div className={styles.input_wrapper}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input_ui}
              placeholder="メールアドレス"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input_ui}
              placeholder="パスワード"
            />
          </div>
          <div className={styles.button_wrapper}>
            <button className={styles.button_ui} type="submit">
              {isLogin ? 'Log in' : 'Sign up'}
            </button>
            <button
              className={styles.button_ui_sub}
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? '新規登録' : 'ログイン'}モードに切り替え
            </button>
          </div>
        </div>
      </form>
    </PageContainer>
  )
}

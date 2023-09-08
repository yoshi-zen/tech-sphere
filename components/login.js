import { useState } from 'react'
import styles from '@/styles/login.module.css'

import { supabase } from '@/lib/supabase-api'

export default function Login() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
    } catch (error) {
      alert(error.error_description || error.message)
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.loginTxt}>
        <p>コメントを記述するには、ログインしてください！</p>
      </div>
      <div>
        <form onSubmit={handleAuth} className={styles.form}>
          <div>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <span onClick={() => setIsLogin(!isLogin)}>{`${
              isLogin ? '登録' : 'ログイン'
            }モードへ切り替え`}</span>
          </div>
          <div>
            <button type="submit">{isLogin ? 'ログイン' : '登録'}</button>
          </div>
        </form>
      </div>
    </main>
  )
}

import Link from 'next/link'
import styles from 'styles/site-navigation.module.css'
import { supabase } from '@/lib/supabase-api'
import { useState, useEffect } from 'react'

export default function SiteNavi() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(supabase.auth.getSession())
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  const signOut = () => {
    supabase.auth.signOut()
  }

  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <li>
          <Link href="/">ホーム</Link>
        </li>
        <li>
          <Link href="/authors">著者</Link>
        </li>
        <li>
          <Link href="/categories">カテゴリー</Link>
        </li>
        <li>
          {session ? (
            <button onClick={signOut} className={styles.button_ui}>
              ログアウト
            </button>
          ) : (
            <button className={styles.button_ui}>
              <Link href="/auth">ログイン</Link>
            </button>
          )}
        </li>
      </ul>
    </nav>
  )
}

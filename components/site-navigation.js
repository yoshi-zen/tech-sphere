import Link from 'next/link'
import styles from 'styles/site-navigation.module.css'
import { supabase } from '@/lib/supabase-api'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function SiteNavi() {
  const [session, setSession] = useState(null)
  const [isNavOpen, setisNavOpen] = useState(false)

  useEffect(() => {
    setSession(supabase.auth.getSession())
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  const signOut = () => {
    supabase.auth.signOut()
  }

  const toggleNav = () => {
    setisNavOpen(!isNavOpen)
  }

  const closeNav = () => {
    setisNavOpen(false)
  }

  return (
    <nav className={isNavOpen ? styles.open : styles.close}>
      <button className={styles.hamberger_button} onClick={toggleNav}>
        <span className={styles.hamberger_bar}></span>
        <span className="sr-only">MENU</span>
      </button>
      <ul className={styles.list}>
        <span className={styles.list_openleft} onClick={toggleNav}>
          <FontAwesomeIcon icon={faChevronRight} />
          {/* <p>a</p> */}
        </span>
        <li>
          <Link href="/" onClick={closeNav}>
            ホーム
          </Link>
        </li>
        <li>
          <Link href="/authors" onClick={closeNav}>
            著者
          </Link>
        </li>
        <li>
          <Link href="/categories" onClick={closeNav}>
            カテゴリー
          </Link>
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

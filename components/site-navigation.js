import Link from 'next/link'
import styles from 'styles/site-navigation.module.css'

export default function SiteNavi() {
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
      </ul>
    </nav>
  )
}

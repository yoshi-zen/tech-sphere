import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SiteLogo from 'components/site-logo'
import Link from 'next/link'
import styles from 'styles/footer.module.css'
import PageContainer from './page-container'

export default function Footer() {
  return (
    <footer className={styles.cover}>
      <PageContainer>
        <div className={styles.flexContainer}>
          <SiteLogo />
          <ul className={styles.siteList}>
            <Link href="/">
              <li>ホーム</li>
            </Link>
            <Link href="/articles">
              <li>全記事一覧</li>
            </Link>
            <Link href="/authors">
              <li>著者別記事一覧</li>
            </Link>
            <Link href="/categories">
              <li>カテゴリー別記事一覧</li>
            </Link>
          </ul>
          <div className={styles.socialList}>
            {/* <p>****************.mail.com</p> */}
            <p>&copy; TechSphere 2023-</p>
            <div className={styles.snsLogos}>
              <Link href="https://twitter.com/TechSphereTeam">
                <div className={styles.logoTw}>
                  <FontAwesomeIcon icon={faTwitter} />
                  <p>Twitter</p>
                </div>
              </Link>
              <div className={styles.logoIn}>
                <FontAwesomeIcon icon={faInstagram} />
                <p>Instagram</p>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </footer>
  )
}

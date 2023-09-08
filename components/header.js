import SiteLogo from 'components/site-logo'
import SiteNavi from 'components/site-navigation'
import PageContainer from 'components/page-container'
import styles from 'styles/header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.cover}>
        <PageContainer large>
          <div className={styles.flexContainer}>
            <SiteLogo top />
            <SiteNavi />
          </div>
        </PageContainer>
      </div>
    </header>
  )
}

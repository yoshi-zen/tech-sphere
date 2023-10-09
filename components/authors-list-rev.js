import styles from '@/styles/authors-list-rev.module.css'
import AuthorsCard from './authors-card'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function AuthorsListRev({ authors }) {
  return (
    <section className={styles.container}>
      <h1 className={styles.title1}>著者紹介</h1>
      <div className={styles.main}>
        {authors.map(({ name, profile, intro, myproject }) => (
          <AuthorsCard
            key={name}
            name={name}
            profile={profile}
            intro={intro}
            myproject={myproject}
          />
        ))}
      </div>
      {/* <Link
        href="/articles"
        style={{ fontWeight: 700, display: 'block', textAlign: 'right' }}
      >
        すべての記事を見る　
        <FontAwesomeIcon icon={faChevronRight} />
      </Link> */}
    </section>
  )
}

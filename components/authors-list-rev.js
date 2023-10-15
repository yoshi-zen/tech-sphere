import styles from '@/styles/authors-list-rev.module.css'
import AuthorsCard from './authors-card'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { CardLineUp, CardWrapper } from './card-wrapper'

export default function AuthorsListRev({ authors }) {
  return (
    <section className={styles.container}>
      <h1 className={styles.title1}>著者紹介</h1>
      <CardLineUp listView>
        {authors.map(({ name, profile, intro, myproject }) => (
          <AuthorsCard
            key={name}
            name={name}
            profile={profile}
            intro={intro}
            myproject={myproject}
            listView
          />
        ))}
      </CardLineUp>
    </section>
  )
}

import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/legacy/image'
import Link from 'next/link'
import BodyConvert from './body-convert'

import styles from '/styles/authors-list.module.css'

import introAlt from '/images/introAlt.png'

export default function AuthorsList({ authors }) {
  return (
    <section>
      <h1 className={styles.title}>著者紹介</h1>
      <div className={styles.flexContainer}>
        {authors.map(({ name, intro, profile, myproject }) => (
          <div className={styles.authorCard} key={name}>
            <Link href={`/authors/${name}`}>
              <div className={styles.nameGridContainer}>
                {profile ? (
                  <figure className={styles.profileImg}>
                    <Image
                      src={profile.url}
                      alt=""
                      layout="responsive"
                      width={profile.width}
                      height={profile.height}
                      sizes="100%"
                      priority
                    />
                  </figure>
                ) : (
                  <figure className={styles.profileImg}>
                    <Image
                      src={introAlt}
                      alt=""
                      layout="responsive"
                      width={introAlt.width}
                      height={introAlt.height}
                      sizes="100%"
                    />
                  </figure>
                )}

                <h2 className={styles.authorName}>{name}</h2>
              </div>
            </Link>

            <div className={styles.intro}>
              <BodyConvert contentHTML={intro} />
            </div>
            <figure>
              <Image
                src={myproject.url}
                alt=""
                layout="responsive"
                width={myproject.width}
                height={myproject.height}
                sizes="100%"
                priority
              />
            </figure>
            <Link href={`/authors/${name}`}>
              <div className={styles.morePosts}>
                <p>See posts...</p>
                <FontAwesomeIcon icon={faAnglesRight} />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

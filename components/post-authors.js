import styles from 'styles/post-authors.module.css'
import Link from 'next/link'
import Image from 'next/legacy/image'

import profileAlt from 'images/introAlt.png'

export default function PostAuthors({ authors }) {
  return (
    <div className={styles.namelist}>
      {authors.map(({ name, profile }) => (
        <div className={styles.name} key={name}>
          <Link href={`/authors/${name}`}>
            {profile ? (
              <figure className={styles.img}>
                <Image
                  src={profile.url}
                  alt=""
                  width="40px"
                  height="40px"
                  layout="fixed"
                />
              </figure>
            ) : (
              <figure className={styles.img}>
                <Image
                  src={profileAlt}
                  alt=""
                  width="40px"
                  height="40px"
                  layout="fixed"
                />
              </figure>
            )}
          </Link>

          <Link href={`/authors/${name}`}>{name}</Link>
        </div>
      ))}
    </div>
  )
}

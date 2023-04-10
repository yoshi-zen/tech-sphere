import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/legacy/image'
import Link from 'next/link'

import styles from 'styles/pagination.module.css'

export default function Pagination({ prevPost, nextPost }) {
  return (
    <div className={styles.flexContainer}>
      <Link href={`/articles/${prevPost.slug}`}>
        {prevPost.title && (
          <div className={styles.prevGrid}>
            <FontAwesomeIcon icon={faAnglesLeft} />
            <figure>
              <Image
                src={prevPost.eyecatch.url}
                alt=""
                layout="responsive"
                width={prevPost.eyecatch.width}
                height={prevPost.eyecatch.height}
                sizes="100%"
              />
            </figure>
            <h3>{prevPost.title}</h3>
          </div>
        )}
      </Link>

      <Link href={`/articles/${nextPost.slug}`}>
        {nextPost.title && (
          <div className={styles.nextGrid}>
            <h3>{nextPost.title}</h3>
            <figure>
              <Image
                src={nextPost.eyecatch.url}
                alt=""
                layout="responsive"
                width={nextPost.eyecatch.width}
                height={nextPost.eyecatch.height}
                sizes="100%"
              />
            </figure>
            <FontAwesomeIcon icon={faAnglesRight} />
          </div>
        )}
      </Link>
    </div>
  )
}

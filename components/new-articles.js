import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'

import DateConvert from 'components/date-convert'
import Image from 'next/legacy/image'
import Link from 'next/link'

import styles from 'styles/new-articles.module.css'

import introAlt from 'images/introAlt.png'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'

export default function NewArticles({ posts, list = '', main = false }) {
  return (
    <section className={styles.articles}>
      {list && <h1 className={main ? styles.title : styles.title2}>{list}</h1>}

      <div className={styles.article}>
        {posts.map(({ title, slug, eyecatch, author, publishDate }) => (
          <div className={styles.newArticles} key={title}>
            <div className={styles.publishDate}>
              <FontAwesomeIcon icon={faClock} />
              <DateConvert dateISO={publishDate} />
            </div>

            <div className={main ? styles.nameTitle : styles.nameTitle2}>
              {main && (
                <Link href={`/authors/${author[0].name}`}>
                  <div className={styles.picName}>
                    {author[0].profile ? (
                      <figure className={styles.profileImg}>
                        <Image
                          src={author[0].profile.url}
                          alt=""
                          layout="responsive"
                          width={author[0].profile.width}
                          height={author[0].profile.height}
                          sizes="100%"
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
                    <p className={styles.name}>{author[0].name}</p>
                  </div>
                </Link>
              )}

              <Link href={`/articles/${slug}`}>
                <figure className={styles.eyecatchImg}>
                  <Image
                    src={eyecatch.url}
                    alt=""
                    width={eyecatch.width}
                    height={eyecatch.height}
                    layout="responsive"
                    sizes="100%"
                  />
                </figure>
              </Link>

              <Link href={`/articles/${slug}`}>
                <div className={main ? styles.pageTitle : styles.pageTitle2}>
                  {title}
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {list === '新着記事' && (
        <Link href="/articles">
          <div className={styles.allPosts}>
            <p>All posts...</p>
            <FontAwesomeIcon icon={faAnglesRight} />
          </div>
        </Link>
      )}
    </section>
  )
}

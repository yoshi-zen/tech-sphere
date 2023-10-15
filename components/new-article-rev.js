import Link from 'next/link'
import NewArticleCard from './new-article-card'
import styles from '@/styles/new-article-rev.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { CardLineUp } from './card-wrapper'

export default function NewArticleRev({
  posts,
  main = false,
  amount = 6,
  showAll = false,
}) {
  return (
    <section className={styles.container}>
      <h1 className={styles.title1}>新着記事</h1>
      {/* <div className={main ? styles.main : styles.sub}>
        {posts.slice(0, amount).map(({ title, slug, eyecatch, author }) => (
          <NewArticleCard
            key={slug}
            slug={slug}
            title={title}
            eyecatch={eyecatch}
            author={author}
            main={main}
          />
        ))}
      </div> */}
      <CardLineUp listView={showAll ? true : false}>
        {posts.slice(0, amount).map(({ title, slug, eyecatch, author }) => (
          <NewArticleCard
            key={slug}
            slug={slug}
            title={title}
            eyecatch={eyecatch}
            author={author}
            listView={showAll ? true : false}
          />
        ))}
      </CardLineUp>
      {!showAll && (
        <Link
          href="/articles"
          style={{ fontWeight: 700, display: 'block', textAlign: 'right' }}
        >
          すべての記事を見る
          <FontAwesomeIcon icon={faChevronRight} />
        </Link>
      )}
    </section>
  )
}

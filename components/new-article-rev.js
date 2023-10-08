import NewArticleCard from './new-article-card'
import styles from '@/styles/new-article-rev.module.css'

export default function NewArticleRev({ posts, main = false }) {
  return (
    <section style={{ width: '100%' }}>
      <h1 className={styles.title1}>新着記事</h1>
      <div className={main ? styles.main : styles.sub}>
        {posts.slice(0, 6).map(({ title, slug, eyecatch, author }) => (
          <NewArticleCard
            key={slug}
            slug={slug}
            title={title}
            eyecatch={eyecatch}
            author={author}
            main={main}
          />
        ))}
      </div>
    </section>
  )
}

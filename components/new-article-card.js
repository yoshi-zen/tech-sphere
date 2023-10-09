import styles from '@/styles/new-article-card.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function NewArticleCard({ slug, title, eyecatch, author }) {
  console.log(title)
  const router = useRouter()
  return (
    <div
      className={styles.card_container}
      onClick={() => router.push(`/articles/${slug}`)}
    >
      <Image
        src={eyecatch.url}
        alt={`eyecatch of ${slug}`}
        width={1200}
        height={630}
        sizes="100vw"
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
      <div className={styles.title_wrapper}>
        <p style={{ fontWeight: 700 }}>{title}</p>
        <p className={styles.author}>by {author[0].name}</p>
      </div>
    </div>
  )
}

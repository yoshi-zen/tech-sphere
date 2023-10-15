import styles from '@/styles/new-article-card.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { CardBodyInner, CardPicInner, CardWrapper } from './card-wrapper'

export default function NewArticleCard({
  slug,
  title,
  eyecatch,
  author,
  listView = false,
}) {
  const router = useRouter()
  return (
    <CardWrapper listView={listView}>
      <CardPicInner>
        <Image
          src={eyecatch.url}
          alt={`eyecatch of ${slug}`}
          width={1200}
          height={630}
          sizes="100vw"
          style={{
            display: 'block',
            width: '100%',
            height: 'auto',
            cursor: 'pointer',
          }}
          onClick={() => router.push(`/articles/${slug}`)}
        />
      </CardPicInner>
      <CardBodyInner listView={listView}>
        <div
          style={{ cursor: 'pointer' }}
          onClick={() => router.push(`/articles/${slug}`)}
        >
          <p style={{ fontWeight: 700 }}>{title}</p>
          <p className={styles.author}>by {author[0].name}</p>
        </div>
      </CardBodyInner>
    </CardWrapper>
  )
}

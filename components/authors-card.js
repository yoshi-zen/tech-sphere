import Image from 'next/image'
import styles from '@/styles/authors-card.module.css'
import { useRouter } from 'next/router'

import parse from 'html-react-parser'

export default function AuthorsCard({ name, intro, profile, myproject }) {
  const router = useRouter()
  return (
    <div
      className={styles.card_container}
      onClick={() => router.push(`/authors/${name}`)}
    >
      <Image
        src={myproject.url}
        alt={`eyecatch of ${name}`}
        width={1200}
        height={630}
        sizes="100vw"
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
      <div className={styles.title_wrapper}>
        <div className={styles.name_pic_wrapper}>
          <div className={styles.pic_inner}>
            <Image
              src={profile.url}
              alt={`profile of ${name}`}
              width={35}
              height={35}
            />
          </div>
          <p style={{ fontWeight: 700 }}>{name}</p>
        </div>
        {parse(intro)}
      </div>
    </div>
  )
}

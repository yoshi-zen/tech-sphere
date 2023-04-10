/* 各記事のヘッダーをマークアップ */
import styles from 'styles/post-header.module.css'

/* icon */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'

import DateConvert from 'components/date-convert'
import PostAuthors from 'components/post-authors'
import PostCategories from 'components/post-categories'

export default function PostHeader({
  title,
  author,
  category,
  publishDate = '',
  revisedDate = '',
}) {
  return (
    <div className={styles.stack}>
      <h1 className={styles.title}>{title}</h1>
      {author && <PostAuthors authors={author} />}

      {category && <PostCategories categories={category} />}

      <div className={styles.dateCover}>
        {revisedDate && (
          <div className={styles.date}>
            <FontAwesomeIcon
              icon={faClockRotateLeft}
              size="sm"
              color="var(--gray60)"
            />
            <DateConvert dateISO={revisedDate} />
          </div>
        )}
        {publishDate && (
          <div className={styles.date}>
            <FontAwesomeIcon icon={faClock} size="sm" color="var(--gray60)" />
            <DateConvert dateISO={publishDate} />
          </div>
        )}
      </div>
    </div>
  )
}

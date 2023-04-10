import styles from 'styles/post-categories.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons'

export default function PostCategories({ categories }) {
  return (
    <div className={styles.categorylist}>
      {categories.map(({ category, slug }) => (
        <Link href={`/categories/${slug}`} key={slug}>
          <div className={styles.category}>
            <FontAwesomeIcon
              icon={faPaperclip}
              size="sm"
              color="var(--gray75)"
            />
            <p>{category}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

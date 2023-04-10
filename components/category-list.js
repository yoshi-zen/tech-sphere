import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons'

import styles from 'styles/category-list.module.css'

export default function CategoryList({ allCats }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>カテゴリー</h1>
      <div className={styles.categorylist}>
        {allCats.map(({ category, slug }) => (
          <div className={styles.categoryCard} key={slug}>
            <Link href={`/categories/${slug}`}>
              <div className={styles.category}>
                <FontAwesomeIcon
                  icon={faPaperclip}
                  size="sm"
                  color="var(--gray75)"
                />
                <p>{category}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

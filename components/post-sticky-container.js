import styles from '@/styles/post-sticky-container.module.css'

export default function PostStickyContainer({ children }) {
  return <div className={styles.sticky}>{children}</div>
}

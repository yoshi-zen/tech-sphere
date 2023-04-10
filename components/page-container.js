import styles from 'styles/page-container.module.css'

export default function PageContainer({ children, large }) {
  return <div className={large ? styles.large : styles.default}>{children}</div>
}

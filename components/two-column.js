import styles from 'styles/two-column.module.css'

export function TwoColumn({ children }) {
  return <div className={styles.flexContainer}>{children}</div>
}

export function TwoMain({ children }) {
  return <div className={styles.main}>{children}</div>
}

export function TwoSide({ children }) {
  return <div className={styles.side}>{children}</div>
}

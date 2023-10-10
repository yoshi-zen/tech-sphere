import styles from '@/styles/card-wrapper.module.css'

export function CardWrapper({ children, listView = false }) {
  return (
    <div className={listView ? styles.list_wrapper : styles.card_wrapper}>
      {children}
    </div>
  )
}

export function CardPicInner({ children }) {
  return <span className={styles.pic_inner}>{children}</span>
}

export function CardBodyInner({ children, listView = false }) {
  return (
    <div className={listView ? styles.body_inner_list : styles.body_inner_card}>
      {children}
    </div>
  )
}

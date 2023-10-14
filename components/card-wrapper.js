import styles from '@/styles/card-wrapper.module.css'

export function CardLineUp({ children, listView = false, isLarge = false }) {
  return (
    <div
      className={
        listView
          ? styles.line_up_list
          : isLarge
          ? styles.line_up_card_large
          : styles.line_up_card_default
      }
    >
      {children}
    </div>
  )
}

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

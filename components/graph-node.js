import styles from '@/styles/graph-node.module.css'

export default function GraphNode({ number }) {
  return (
    <div className={styles.node}>
      <span>{number}</span>
    </div>
  )
}

import styles from '@/styles/preview-dialog.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function PreviewDialog() {
  const router = useRouter()
  return (
    <div
      style={{
        borderRadius: '5px',
        marginBottom: '20px',
        color: 'white',
        fontSize: '14px',
      }}
      className={styles.flexContainer}
    >
      <div className={styles.title_wrapper}>
        <p>
          これはプレビュー画面です。投稿は完了していません。
          <br />
          必ず右のボタンを押してプレビューを終了してください。
        </p>
      </div>
      <button
        className={styles.button_wrapper}
        onClick={() => router.push('/api/clear-cookie')}
      >
        <p>終了</p>
      </button>
    </div>
  )
}

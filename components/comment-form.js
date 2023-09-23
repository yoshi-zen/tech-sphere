import styles from '@/styles/comment-form.module.css'
import Login from './login'

export default function CommentForm() {
  return (
    <div className={styles.commentFormContainer}>
      <div className={styles.title}>
        <h2>Discussion</h2>
      </div>
      <div>
        <p>
          投稿に関するご質問・ご指摘ございましたらお気軽にコメントをください！
        </p>
      </div>

      {/* <Login /> */}
    </div>
  )
}

import styles from '@/styles/comment-form.module.css'
import Login from './login'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase-api'
import DateConvert from './date-convert'
import Link from 'next/link'

export default function CommentForm({ slug }) {
  const [session, setSession] = useState(null) // ログイン情報取得用
  const [comments, setComments] = useState([]) // コメントの内容取得用
  const [newComment, setNewComment] = useState('') // コメント入力用

  // コメント取得関数
  const getComments = async () => {
    try {
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .eq('slug', slug)
        .order('created_at', { ascending: false })
      if (error) throw error
      setComments(data)
      console.log(data)
    } catch (err) {
      alert(err.error_description || err.message)
      setComments([])
    }
  }

  // コメント登録関数
  const addComment = async (e) => {
    e.preventDefault()

    try {
      if (!newComment) confirm('コメントを入力してください。')
      else {
        const { error } = await supabase.from('comments').insert([
          {
            content: String(newComment),
            author_id: (await supabase.auth.getUser()).data.user?.id,
            slug: slug,
          },
        ])
        if (error) throw error
      }

      // console.log('ok')
      await getComments()
      setNewComment('')
    } catch (error) {
      alert(error.error_description || error.message)
    }
  }

  useEffect(() => {
    ;(async () => await getComments())()
  }, [slug])

  useEffect(() => {
    setSession(supabase.auth.getSession())
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  // const getUserName = async (id) => {
  //   try {
  //     const user = supabase.auth.getUser()
  //     console.log(user)
  //     return user.name
  //   } catch (err) {
  //     alert(err.error_description || err.message)
  //   }
  // }

  return (
    <div className={styles.commentForm_container}>
      <div className={styles.title}>
        <h2>Discussion</h2>
      </div>
      <div className={styles.com_wrapper}>
        {comments.length === 0 ? (
          <div className={styles.noComment_inner}>
            <p>コメントはまだありません。</p>
          </div>
        ) : (
          <div className={styles.comments_container}>
            {comments.map((comment, idx) => (
              <div key={idx} className={styles.comment_inner}>
                <div className={styles.nameDate_inner}>
                  <p style={{ fontWeight: '700' }}>
                    {comment.author_id.substr(0, 7)}...
                  </p>
                  <DateConvert dateISO={comment.created_at} />
                </div>
                <p>{comment.content}</p>
              </div>
            ))}
          </div>
        )}
        {session ? (
          <form onSubmit={addComment}>
            <div className={styles.inputForm_inner}>
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className={styles.textarea_ui}
                placeholder="記事についてコメントする"
                rows="5"
              />
              <button className={styles.button_ui}>
                <p>送信</p>
              </button>
            </div>
          </form>
        ) : (
          <div className={styles.newCom_wrapper}>
            <p>ログインするとコメントできます！</p>
            <button className={styles.button_ui}>
              <Link href={{ pathname: '/auth', query: { slug: slug } }}>
                Login
              </Link>
            </button>
          </div>
        )}
      </div>

      {/* <Login /> */}
    </div>
  )
}

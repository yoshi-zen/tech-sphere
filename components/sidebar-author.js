import Image from 'next/image'
import PostStickyContainer from './post-sticky-container'
import styles from '@/styles/sidebar-author.module.css'
import parse from 'html-react-parser'
import { useEffect } from 'react'
import tocbot from 'tocbot'

export default function SidebarAuthor({ author, slug }) {
  // console.log(author)
  useEffect(() => {
    tocbot.init({
      tocSelector: '.toc',
      contentSelector: '.post',
      headingSelector: 'h2, h3, h4',
      headingsOffset: 120,
      scrollSmoothOffset: -120,
      // 固定ヘッダの回避
      hasInnerContainers: true,
    })
    return () => tocbot.destroy()
  }, [slug])

  return (
    <PostStickyContainer>
      <div className={styles.container}>
        <div className={styles.pic_name_wrapper}>
          <div className={styles.pic_inner}>
            <Image src={author[0].profile.url} alt="" width={40} height={40} />
          </div>
          <span>{author[0].name}</span>
        </div>
        <div className={styles.intro_wrapper}>{parse(author[0].intro)}</div>
        <div className={styles.toc_wrapper}>
          <div className="toc" />
          <style jsx global>{`
            .toc {
              padding: 0 1rem 0;
              font-size: 0.875rem;
              color: var(--gray40);
            }

            .toc-list {
              list-style: none;
              padding-left: 1em;
            }

            .toc-list .toc-list {
              padding-left: 1.5rem;
              padding-top: 0.5rem;
            }

            .toc-list-item {
              padding-bottom: 0.5rem;
            }

            .toc-list-item:last-child {
              padding-bottom: 0;
            }

            .toc-link::before {
              content: '';
              display: inline-block;
              position: relative;
              width: 0.5rem;
              height: 0.5rem;
              background-color: var(--gray40);
              border-radius: 50%;
              border: 1px solid var(--gray40);
              margin-right: 0.5rem;
              margin-left: -1rem;
            }

            .toc-list .toc-list .toc-link::before {
              left: -1.5rem;
              border: 2px solid var(--gray40);
              background-color: var(--white);
            }

            .toc-list .toc-list .toc-list .toc-link::before {
              left: -3rem;
              border: 2px solid var(--gray40);
              background-color: var(--white);
            }

            .is-active-link {
              color: var(--gray80);
              font-weight: 700;
            }

            .is-active-link::before {
              background-color: var(--cyan50);
              border: 1px solid var(--cyan50);
            }

            .toc-list .toc-list .is-active-link::before,
            .toc-list .toc-list .toc-list .is-active-link::before {
              border: 2px solid var(--cyan50);
              background-color: var(--white);
            }
          `}</style>
        </div>
      </div>
    </PostStickyContainer>
  )
}

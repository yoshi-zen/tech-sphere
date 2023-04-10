import PageContainer from 'components/page-container'
import PageMeta from 'components/page-meta'
import PageHero from 'components/page-hero'
import { getAllCategories, getPostByDate } from 'lib/api'

import styles from 'styles/categories.module.css'
import Image from 'next/legacy/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { TwoColumn, TwoMain, TwoSide } from '@/components/two-column'
import NewArticles from '@/components/new-articles'
import Link from 'next/link'

export default function Categories({ categories, posts }) {
  return (
    <PageContainer>
      <PageMeta pageTitle="カテゴリー" pageDesc="カテゴリー別記事一覧" />

      <PageHero title="Categories" subtitle="カテゴリー別記事一覧" imgOn />

      <TwoColumn>
        <TwoMain>
          <h1 className={styles.title}>カテゴリー別記事</h1>
          <div className={styles.gridContainer}>
            {categories.map(({ category, slug, eyecatch }) => (
              <div className={styles.categoryCard} key={category}>
                <Link href={`/categories/${slug}`}>
                  <figure className={styles.img}>
                    <Image
                      src={eyecatch.url}
                      alt=""
                      layout="responsive"
                      width={eyecatch.width}
                      height={eyecatch.height}
                      sizes="100%"
                      priority
                    />
                  </figure>
                </Link>

                <Link href={`/categories/${slug}`}>
                  <p className={styles.categoryName}>{category}</p>
                  <div className={styles.showMore}>
                    <p>Show more posts...</p>
                    <FontAwesomeIcon icon={faAnglesRight} />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </TwoMain>
        <TwoSide>
          <NewArticles posts={posts} list="新着記事" />
        </TwoSide>
      </TwoColumn>
    </PageContainer>
  )
}

export async function getStaticProps() {
  const categories = await getAllCategories()

  const posts = await getPostByDate()

  return {
    props: {
      categories: categories,
      posts: posts,
    },
  }
}

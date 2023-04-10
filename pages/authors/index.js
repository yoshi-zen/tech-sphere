import { TwoColumn, TwoMain, TwoSide } from '@/components/two-column'
import PageContainer from 'components/page-container'
import PageHero from 'components/page-hero'
import PageMeta from 'components/page-meta'

import Link from 'next/link'
import Image from 'next/legacy/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'

import styles from 'styles/authors.module.css'
import { getAllCategories, getAuthor, getPostByDate } from '@/lib/api'
import NewArticles from '@/components/new-articles'

import introAlt from 'images/introAlt.png'
import CategoryList from '@/components/category-list'

export default function Authors({ authors, posts, allCats }) {
  return (
    <PageContainer>
      <PageMeta pageTitle="著者別記事" pageDesc="著者の紹介とその記事" />

      <PageHero title="Authors" subtitle="著者の紹介とその記事" imgOn />

      <TwoColumn>
        <TwoMain>
          <h1 className={styles.title}>著者別記事</h1>
          <div className={styles.gridContainer}>
            {authors.map(({ name, profile, myproject }) => (
              <div className={styles.authorCard} key={name}>
                <Link href={`/authors/${name}`}>
                  {/* <Link href={'/'}> */}
                  <figure className={styles.projectImg}>
                    <Image
                      src={myproject.url}
                      alt=""
                      layout="responsive"
                      width={myproject.width}
                      height={myproject.height}
                      sizes="100%"
                      priority
                    />
                  </figure>
                </Link>

                <div className={styles.nameImgContainer}>
                  {/* <Link href={'/'}> */}
                  <Link href={`/authors/${name}`}>
                    {profile ? (
                      <figure className={styles.profileImg}>
                        <Image
                          src={profile.url}
                          alt=""
                          layout="responsive"
                          width={profile.width}
                          height={profile.height}
                          sizes="100%"
                          priority
                        />
                      </figure>
                    ) : (
                      <figure className={styles.profileImg}>
                        <Image
                          src={introAlt}
                          alt=""
                          layout="responsive"
                          width={introAlt.width}
                          height={introAlt.height}
                          sizes="100%"
                        />
                      </figure>
                    )}
                  </Link>
                  {/* <Link href={'/'}> */}
                  <Link href={`/authors/${name}`}>
                    <p className={styles.authorName}>{name}</p>
                  </Link>
                </div>

                <Link href={`/authors/${name}`}>
                  {/* <Link href={'/'}> */}
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
          <CategoryList allCats={allCats} />
        </TwoSide>
      </TwoColumn>
    </PageContainer>
  )
}

export async function getStaticProps() {
  const authors = await getAuthor()

  const posts = await getPostByDate()

  const allCats = await getAllCategories()

  return {
    props: {
      authors: authors,
      posts: posts,
      allCats: allCats,
    },
  }
}

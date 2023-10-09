import PageContainer from 'components/page-container'
import PageHero from 'components/page-hero'
import styles from 'styles/Home.module.css'

import PageMeta from 'components/page-meta'
import {
  getAllCategories,
  getAllPosts,
  getAuthor,
  getPostByDate,
} from 'lib/api'

import { TwoColumn, TwoMain, TwoSide } from 'components/two-column'
import NewArticles from 'components/new-articles'
import AuthorsList from 'components/authors-list'
import CategoryList from '@/components/category-list'
import NewArticleRev from '@/components/new-article-rev'
import AuthorsListRev from '@/components/authors-list-rev'

// どうしてかねぇ、、、
export default function Home({ posts, authors, categories }) {
  return (
    <PageContainer>
      <PageMeta />

      <PageHero
        title="TechSphere"
        subtitle="理系大学生による技術共有サイト"
        imgOn
      />

      <TwoColumn>
        <TwoMain>
          <div className={styles.siteHead}>
            {/* <NewArticles list="新着記事" posts={posts} main /> */}
            <NewArticleRev posts={posts} />
            {/* <AuthorsList authors={authors} /> */}
            <AuthorsListRev authors={authors} />

            <section>
              <h1 className={styles.title}>About us</h1>
              <p className={styles.aboutUsText}>
                ものづくりが好きな大学生たちが集まって、自らが重ね上げた成果物を発表できる場がほしいと感じ、本サイトを立ち上げるに至りました。なお、本サイト開発者がReactを学習し、それを実践する場としての役割も兼ねております。各所、至らぬ点が多くあると存じますが、温かい目で見守っていただけると幸いです。大学での授業のあいまに、逐次サイトの改良を重ねていければと考えておりますから、ご意見ご感想等はお気軽にどうぞ！
              </p>
            </section>
          </div>
        </TwoMain>

        <TwoSide>
          {/* <NewArticles list="新着記事" posts={posts} /> */}
          <CategoryList allCats={categories} />
        </TwoSide>
      </TwoColumn>
    </PageContainer>
  )
}

export async function getStaticProps() {
  // const num = 2
  // const posts = await getPostByDate(num)
  const posts = await getAllPosts()
  const authors = await getAuthor()
  console.log(authors)
  const categories = await getAllCategories()

  return {
    props: {
      posts: posts,
      authors: authors,
      categories: categories,
    },
  }
}

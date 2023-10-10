import PageContainer from 'components/page-container'
import PageMeta from 'components/page-meta'
import PageHero from 'components/page-hero'
import { TwoColumn, TwoMain, TwoSide } from 'components/two-column'
import NewArticles from 'components/new-articles'
import { getAllCategories, getAllPosts, getPostByDate } from '@/lib/api'

import CategoryList from 'components/category-list'
import NewArticleRev from '@/components/new-article-rev'

export default function Categories({ newPosts, allPosts, allCats }) {
  return (
    <PageContainer>
      <PageMeta pageTitle="All Articles" pageDesc="全記事一覧" />

      <PageHero title="All Articles" subtitle="全記事一覧" imgOn />

      <TwoColumn>
        <TwoMain>
          {/* <NewArticles posts={allPosts} list="全記事" main /> */}
          <NewArticleRev posts={allPosts} amount={allPosts.length} showAll />
        </TwoMain>
        <TwoSide>
          {/* <NewArticles posts={newPosts} list="新着記事" /> */}
          <CategoryList allCats={allCats} />
        </TwoSide>
      </TwoColumn>
    </PageContainer>
  )
}

export async function getStaticProps() {
  const newPosts = await getPostByDate()
  const allPosts = await getAllPosts()
  const allCats = await getAllCategories()

  return {
    props: {
      newPosts: newPosts,
      allPosts: allPosts,
      allCats: allCats,
    },
  }
}

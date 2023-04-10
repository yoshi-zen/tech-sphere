import CategoryList from '@/components/category-list'
import NewArticles from '@/components/new-articles'
import PageContainer from '@/components/page-container'
import PageMeta from '@/components/page-meta'
import PostHeader from '@/components/post-header'
import { TwoColumn, TwoMain, TwoSide } from 'components/two-column'
import {
  getAllCategorySlug,
  getAllPostsByCategory,
  getPostByDate,
} from 'lib/api'
export default function Category({ slug, name, posts, allCats, allPosts }) {
  return (
    <PageContainer>
      <PageMeta pageTitle={`${name}の記事`} pageDesc={`${name}の記事一覧`} />
      <TwoColumn>
        <TwoMain>
          {/* <PostHeader title={`カテゴリ：${name}の記事`} /> */}
          <NewArticles posts={posts} list={`カテゴリ：「${name}」`} main />
        </TwoMain>
        <TwoSide>
          <NewArticles posts={allPosts} list="新着記事" />
          <CategoryList allCats={allCats} />
        </TwoSide>
      </TwoColumn>
    </PageContainer>
  )
}

export async function getStaticPaths() {
  const allCategorySlugs = await getAllCategorySlug()
  // console.log(allCategorySlugs)
  /* 全カテゴリを取得する。ここでは全ページを生成する。 */

  return {
    paths: allCategorySlugs.map(({ slug }) => `/categories/${slug}`),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const categorySlugs = context.params.slug

  const allSlugs = await getAllCategorySlug()
  const cat = allSlugs.find(({ slug }) => slug === categorySlugs)

  // console.log(cat.id)

  const posts = await getAllPostsByCategory(cat.id)

  // console.log(posts)

  const allPosts = await getPostByDate()

  return {
    props: {
      slug: categorySlugs,
      name: cat.category,
      posts: posts,
      allCats: allSlugs,
      allPosts: allPosts,
    },
  }
}

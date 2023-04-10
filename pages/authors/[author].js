import CategoryList from '@/components/category-list'
import PageMeta from '@/components/page-meta'
import NewArticles from 'components/new-articles'
import PageContainer from 'components/page-container'
import { TwoColumn, TwoMain, TwoSide } from 'components/two-column'
import {
  getAllAuthorName,
  getAllCategories,
  getAllPostByAuthor,
  getPostByDate,
} from 'lib/api'

export default function Author({ name, posts, allPosts, allCats }) {
  return (
    <PageContainer>
      <PageMeta pageTitle={`${name}の記事`} pageDesc={`${name}の記事一覧`} />
      <TwoColumn>
        <TwoMain>
          <NewArticles posts={posts} list={`著者：「${name}」`} main />
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
  const allAuthors = await getAllAuthorName()

  return {
    paths: allAuthors.map(({ name }) => `/authors/${name}`),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const authorName = context.params.author
  // console.log(authorName)

  const allAuthor = await getAllAuthorName()
  const atr = allAuthor.find(({ name }) => name === authorName)

  // console.log(atr)

  const posts = await getAllPostByAuthor(atr.id)
  const allPosts = await getPostByDate()

  const allCats = await getAllCategories()

  // console.log(allPosts)

  return {
    props: {
      name: authorName,
      posts: posts,
      allPosts: allPosts,
      allCats: allCats,
    },
  }
}

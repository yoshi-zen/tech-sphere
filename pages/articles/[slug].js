import PostHeader from 'components/post-header'
import PageContainer from 'components/page-container'
import Image from 'next/legacy/image'
import PageMeta from 'components/page-meta'
import img from 'images/TechSphereOGP2.png'

import { TwoColumn, TwoMain, TwoSide } from 'components/two-column'

import {
  getPostBySlug,
  getAllSlugs,
  getPostByDate,
  getAllPosts,
  getAllCategories,
} from 'lib/api'
import PostBody from 'components/post-body'
import NewArticles from 'components/new-articles'
import { prevNextPost } from 'lib/prev-next-post'
import Pagination from 'components/pagination'
import CategoryList from 'components/category-list'
import PostConvert from 'components/post-convert'
import { extractText } from 'lib/extract-text'

export default function Post({
  title,
  description,
  pDate,
  rDate,
  category,
  author,
  eyecatch,
  contentParts,
  posts,
  prev,
  next,
  allCats,
}) {
  return (
    <PageContainer>
      <PageMeta
        pageTitle={title}
        pageDesc={description}
        pageImg={eyecatch.url ?? img}
        pageImgH={eyecatch.height}
        pageImgW={eyecatch.width}
      />
      <TwoColumn>
        <TwoMain>
          <article>
            <PostHeader
              title={title}
              author={author}
              category={category}
              publishDate={pDate}
              revisedDate={rDate}
            />
            <figure>
              <Image
                src={eyecatch.url ?? img}
                alt=""
                layout="responsive"
                width={eyecatch.width}
                height={eyecatch.height}
                sizes="(min-width: 768px) 768px, 100vw"
                priority
              />
            </figure>
            <PostBody>
              <PostConvert contents={contentParts} />
            </PostBody>
          </article>

          <Pagination prevPost={prev} nextPost={next} />
        </TwoMain>

        <TwoSide>
          <NewArticles list="新着記事" posts={posts} />
          <CategoryList allCats={allCats} />
        </TwoSide>
      </TwoColumn>
    </PageContainer>
  )
}

export async function getStaticPaths() {
  const allSlugs = await getAllSlugs()
  // console.log(allSlugs)
  /* 全スラッグを取得 */
  return {
    paths: ['/articles/esp1'],
    // paths: allSlugs.map(({ slug }) => `/articles/${slug}`),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const slug = context.params.slug

  /* プレビュー用！ */
  // const draftKey = context.previewData.draftKey
  //   ? { draftKey: context.previewData.draftKey }
  //   : {}

  const post = await getPostBySlug(slug)

  const posts = await getPostByDate()
  /* 2ポストだけ　これいるか…？ */

  const allPost = await getAllPosts()
  const [prev, next] = prevNextPost(allPost, slug)

  const allCats = await getAllCategories()

  // console.log(post)
  // console.log(post.eyecatch)
  const description = extractText(post.content)

  return {
    props: {
      title: post.title,
      description: description,
      pDate: post.publishDate,
      rDate: post.revisedDate,
      category: post.category,
      author: post.author,
      eyecatch: post.eyecatch,
      contentParts: post.contentParts,
      posts: posts,
      prev: prev,
      next: next,
      allCats: allCats,
    },
  }
}

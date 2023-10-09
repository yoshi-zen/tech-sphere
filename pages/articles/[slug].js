import PostHeader from 'components/post-header'
import PageContainer from 'components/page-container'
import Image from 'next/legacy/image'
import PageMeta from 'components/page-meta'
import img from 'images/TechSphereOGP2.png'

import { TwoColumn, TwoMain, TwoSide } from 'components/two-column'

import {
  getPostBySlug,
  getAllSlugs,
  getAllPosts,
  getAllCategories,
  getDraftPost,
} from 'lib/api'
import PostBody from 'components/post-body'
import NewArticles from 'components/new-articles'
import { prevNextPost } from 'lib/prev-next-post'
import Pagination from 'components/pagination'
import CategoryList from 'components/category-list'
import PostConvert from 'components/post-convert'
import { extractText } from 'lib/extract-text'
import CommentForm from '@/components/comment-form'
import SidebarAuthor from '@/components/sidebar-author'
import fetch from 'node-fetch'
import Link from 'next/link'
import PreviewDialog from '@/components/preview-dialog'
import { useRouter } from 'next/router'
import NewArticleCard from '@/components/new-article-card'
import NewArticleRev from '@/components/new-article-rev'

export default function Post({
  title,
  slug,
  description,
  pDate,
  rDate,
  category,
  author,
  eyecatch,
  contentParts,
  prev,
  next,
  draftMode,
  newPosts,
}) {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <PageContainer>
      <PageMeta
        pageTitle={title}
        pageDesc={description}
        pageImg={eyecatch.url}
        pageImgH={eyecatch.height}
        pageImgW={eyecatch.width}
      />
      <TwoColumn>
        <TwoMain>
          {draftMode && <PreviewDialog />}
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
                src={eyecatch.url}
                alt=""
                layout="responsive"
                width={eyecatch.width}
                height={eyecatch.height}
                sizes="(min-width: 768px) 768px, 100vw"
                priority
              />
            </figure>
            <div className="post">
              <PostBody>
                <PostConvert contents={contentParts} />
              </PostBody>
            </div>
          </article>

          <CommentForm slug={slug} />
          <Pagination prevPost={prev} nextPost={next} />
        </TwoMain>

        <TwoSide>
          <SidebarAuthor author={author} slug={slug} />
        </TwoSide>
      </TwoColumn>
      <NewArticleRev posts={newPosts} main />
    </PageContainer>
  )
}

export async function getStaticPaths() {
  const allSlugs = await getAllSlugs()
  // console.log(allSlugs)
  /* 全スラッグを取得 */
  return {
    paths: allSlugs.map(({ slug }) => `/articles/${slug}`),
    // fallback: false,
    fallback: true,
  }
}

export async function getStaticProps(context) {
  // console.log(context)
  const slug = context.params.slug
  const draftKey = context.previewData?.draftKey ?? ''

  // console.log(slug)
  // console.log(draftKey)

  const post = draftKey
    ? await fetch(
        `https://techsphere.microcms.io/api/v1/blog/${slug}${
          draftKey !== undefined ? `?draftKey=${draftKey}` : ''
        }`,
        { headers: { 'X-MICROCMS-API-KEY': process.env.NEXT_PUBLIC_API_KEY } },
      )
        .then((res) => res.json())
        .catch((error) => null)
    : await getPostBySlug(slug)

  if (!post) {
    return {
      notFound: true,
    }
  }
  // console.log(post.title)

  const allPost = await getAllPosts()
  console.log(allPost[0])
  const [prev, next] = prevNextPost(allPost, slug)

  const description = extractText(post.content)

  return {
    props: {
      title: post.title,
      slug: post.slug,
      description: description,
      pDate: post.publishDate,
      rDate: post.revisedDate,
      category: post.category,
      author: post.author,
      eyecatch: post.eyecatch,
      contentParts: post.contentParts,
      prev: draftKey ? '' : prev,
      next: draftKey ? '' : next,
      draftMode: draftKey ? true : false,
      newPosts: allPost,
    },
    notFound: !post,
  }
}

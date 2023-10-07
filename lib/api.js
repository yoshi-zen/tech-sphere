/* .env.localの環境変数を読み込んで、microCMSからデータを読むクライアントを作成 */
import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN,
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
})

/* slug名からデータを取得するプログラム */
export async function getPostBySlug(slug) {
  try {
    const post = await client.get({
      endpoint: 'blog',
      queries: { filters: `slug[equals]${slug}` },
    })
    console.log(post)
    return post.contents[0]
  } catch (err) {
    console.log('~~ getPostBySlug ~~')
    console.log(err)
  }
}

/* 全スラッグを取得する */
export async function getAllSlugs(limit = 100) {
  try {
    const slugs = await client.get({
      endpoint: 'blog',
      queries: {
        fields: 'id,title,slug',
        orders: '-publishDate',
        limit: limit,
      },
    })
    // console.log(slugs)
    return slugs.contents
  } catch (err) {
    console.log('~~ getAllSlugs ~~')
    console.log(err)
  }
}

/* 記事をすべて取得 */
export async function getAllPosts(limit = 100) {
  try {
    const posts = await client.get({
      endpoint: 'blog',
      queries: {
        orders: '-publishDate',
        limit: limit,
      },
    })
    return posts.contents
  } catch (err) {
    console.log('~~ getAllPosts ~~')
    console.log(err)
  }
}

/* 記事を新着順に任意の数取得して返すプログラム */
export async function getPostByDate(limit = 2) {
  try {
    const posts = await client.get({
      endpoint: 'blog',
      queries: {
        limit: limit,
        orders: '-publishDate',
        fields: 'title,slug,eyecatch,author,publishDate',
      },
    })
    return posts.contents
  } catch (err) {
    console.log('~~ getPostByDate ~~')
    console.log(err)
  }
}

/* 著者の情報を取得して返すプログラム */
export async function getAuthor(limit = 100) {
  try {
    const authors = await client.get({
      endpoint: 'author',
      queries: {
        limit: limit,
      },
    })
    return authors.contents
  } catch (err) {
    console.log('~~ getAuthor ~~')
    console.log(err)
  }
}

/* 全カテゴリを取得するプログラ無 */
export async function getAllCategories(limit = 100) {
  try {
    const categories = await client.get({
      endpoint: 'categories',
      queries: {
        limit: limit,
      },
    })
    return categories.contents
  } catch (err) {
    console.log('~~ getAllCategories ~~')
    console.log(err)
  }
}

/* 以下カテゴリ用 */
export async function getAllCategorySlug(limit = 100) {
  try {
    const slugs = await client.get({
      endpoint: 'categories',
      queries: {
        fields: 'category,slug,id',
        limit: limit,
      },
    })
    return slugs.contents
  } catch (err) {
    console.log('~~ getAllCategorySlug ~~')
    console.log(err)
  }
}

/* 全著者を得るプログラム */
export async function getAllPostsByCategory(catID, limit = 100) {
  try {
    const posts = await client.get({
      endpoint: 'blog',
      queries: {
        filters: `category[contains]${catID}`,
        fields: 'title,slug,eyecatch,author,publishDate',
        orders: '-publishDate',
        limit: limit,
      },
    })
    return posts.contents
  } catch (err) {
    console.log('~~ getAllPostsByCategory ~~')
    console.log(err)
  }
}

/* 著者別で記事を取得するプログラム */
export async function getAllAuthorName(limit = 100) {
  try {
    const authors = await client.get({
      endpoint: 'author',
      queries: {
        fields: 'id,name',
        limit: limit,
      },
    })
    return authors.contents
  } catch (err) {
    console.log('~~ getAllAuthors ~~')
    console.log(err)
  }
}

export async function getAllPostByAuthor(athrID, limit = 100) {
  try {
    const posts = await client.get({
      endpoint: 'blog',
      queries: {
        filters: `author[contains]${athrID}`,
        fields: 'title,slug,eyecatch,publishDate,author',
        orders: '-publishDate',
        limit: limit,
      },
    })
    return posts.contents
  } catch (err) {
    console.log('~~ getAllPostsByAuthor ~~')
    console.log(err)
  }
}

export async function getDraftPost(slug, draftKey) {
  try {
    const draftPost = await client.getListDetail({
      endpoint: 'blog',
      contentId: slug,
      queries: { draftKey: draftKey },
    })
    console.log(draftPost)
    return draftPost.contents
  } catch (err) {
    console.log('~~ getDraftPost ~~')
    console.log(err)
  }
}

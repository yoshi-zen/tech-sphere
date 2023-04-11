import fetch from 'node-fetch'
import { client } from 'lib/api'

export default async function handler(req, res) {
  // res.setPreviewData({})
  /* ↑は、プレビューモードを起動するcookieをセットする */
  /* ここでは"__next_preview_data"と"__prerender_bypass"がセットされた */
  // res.end('Preview mode enabled')
  // console.log(req.query.secret)
  // if (req.query.secret !== 'MY_SECRET_TOKEN' || !req.query.slug) {
  //   return res.status(401).json({ message: 'Invalid token' })
  // }

  /* reqはCMSから投げられたurlのようだな */
  if (!req.query.slug) {
    return res.status(404).end()
  }
  const content = await client
    .get({
      endpoint: 'blog',
      contentId: req.query.slug,
      queries: { draftKey: req.query.draftKey },
    })
    .then()
    .catch((error) => console.error(error))
  /* 記事あります？ */

  if (!content) {
    return res.status(401).json({ message: 'Invalid slug' })
  }
  /* なかったら401吐いてね */

  res.setPreviewData({
    slug: content['id'],
    draftKey: req.query.draftKey,
  })
  res.writeHead(307, { Location: `/blog/${content['id']}` })
  res.end('Preview mode enabled')
}

import { client } from '@/lib/api'

export default async function Preview(req, res) {
  const { draftKey, slug } = req.query
  if (!draftKey || !slug) {
    res.status(404).end()
    // ドラフトキーかスラッグがなければ404エラー
    return
  }

  const data = await client.get({
    endpoint: 'blog',
    contentId: slug,
    queries: {
      draftKey: draftKey,
    },
  })

  if (!data) {
    // データが空だったら、invalid slug
    res.status(401).json({ message: 'Invalid slug' })
    return
  }

  res.setPreviewData({
    draftKey: req.query.draftKey,
    slug: req.query.slug,
  })
  res.writeHead(307, { Location: `/articles/${slug}` })
  res.end('Preview mode enabled')
}

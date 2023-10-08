import fetch from 'node-fetch'

export default async function Preview(req, res) {
  const { draftKey, slug } = req.query
  if (!draftKey || !slug) {
    res.status(404).end()
    // ドラフトキーかスラッグがなければ404エラー
    return
  }

  // const data = await client.get({
  //   endpoint: 'blog',
  //   contentId: slug,
  //   queries: {
  //     draftKey: draftKey,
  //   },
  // })

  const content = await fetch(
    `https://techsphere.microcms.io/api/v1/blog/${slug}?draftKey=${draftKey}`,
    { headers: { 'X-MICROCMS-API-KEY': process.env.NEXT_PUBLIC_API_KEY } },
  )
    .then((res) => res.json())
    .catch((error) => null)

  if (!content) {
    // データが空だったら、invalid slug
    res.status(401).json({ message: 'Invalid slug' })
    return
  }

  res.setPreviewData({
    draftKey: req.query.draftKey,
    id: content.id,
    slug: content.slug,
  })
  res.writeHead(307, { Location: `/articles/${content.id}` })
  res.end('Preview mode enabled')
}

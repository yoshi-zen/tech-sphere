export function prevNextPost(allSlugs, crrntSlug) {
  const postNum = allSlugs.length

  const crrntIndex = allSlugs.findIndex(({ slug }) => crrntSlug === slug)

  const prev =
    crrntIndex + 1 === postNum
      ? { title: '', slug: '' }
      : allSlugs[crrntIndex + 1]
  const next =
    crrntIndex === 0 ? { title: '', slug: '' } : allSlugs[crrntIndex - 1]

  return [prev, next]
}

import Head from 'next/head'

import { siteMeta } from 'lib/site-constants'
/* サイトに関する基本データをlibより確保 */

import { useRouter } from 'next/router'
/* サイトURLの設定 */

const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } =
  siteMeta

import siteImg from 'images/TechSphereOGP.png'
/* 汎用OGP画像 */

export default function PageMeta({
  pageTitle,
  pageDesc,
  pageImg,
  pageImgW,
  pageImgH,
}) {
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle
  /* 各ページのタイトルが指定されていれば通常表示 */
  const desc = pageDesc ?? siteDesc
  /* ページの説明が定義されていればそっち、されていなければサイトの説明 */
  const router = useRouter()
  const url = `${siteUrl}${router.asPath}`
  /* ページURLの生成 */
  const img = pageImg || siteImg.src
  const imgW = pageImgW || siteImg.width
  const imgH = pageImgH || siteImg.height
  const imgurl = img.startsWith('https') ? img : `${siteUrl}${img}`
  /* OGP画像の扱い */

  /* og: で始まるものはOGP(SNSシェア時などに記載される) */
  return (
    <Head>
      {/* 1. ページタイトル */}
      <title>{title}</title>
      <meta property="og:title" content={title} />

      {/* 2. ページ説明 */}
      <meta name="description" content={desc} />
      <meta property="og:description" content={desc} />

      {/* 3. ページURL */}
      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />

      {/* 4. ogの情報 */}
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:type" content={siteType} />
      <meta property="og:locale" content={siteLocale} />

      {/* 5. アイコン情報 */}
      <link rel="icon" href={siteIcon} />
      <link rel="apple-touch-icon" href={siteIcon} />

      {/* 6. OGP画像 */}
      <meta property="og:image" content={imgurl} />
      <meta property="og:image:width" content={imgW} />
      <meta property="og:image:height" content={imgH} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}

import PageLayouts from '@/components/page-layouts'
import '@/styles/globals.css'
import 'prismjs/themes/prism-tomorrow.css'

import Script from 'next/script'
import * as gtag from '@/lib/gtag'

/* font awesomeの設定 */
import '@fortawesome/fontawesome-svg-core/styles.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleTouterChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleTouterChange)
    return () => {
      router.events.off('routeChangeComplete', handleTouterChange)
    }
  }, [router.events])

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
 
           gtag('config', '${gtag.GA_MEASUREMENT_ID}');`,
        }}
      />
      <PageLayouts>
        <Component {...pageProps} />
      </PageLayouts>
    </>
  )
}

/*
  ページ初期化用のAppコンポーネントをオーバーライドする、カスタムAppコンポーネント
  Appコンポーネントが全ページの親コンポーネント
  コンポーネントComponentと、そのページ要素pagePropsを展開して表示
*/

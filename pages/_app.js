import PageLayouts from '@/components/page-layouts'
import Script from 'next/script'
import * as gtag from 'src/lib/gtag'
import '@/styles/globals.css'
import 'prismjs/themes/prism-tomorrow.css'

/* font awesomeの設定 */
import '@fortawesome/fontawesome-svg-core/styles.css'

export default function App({ Component, pageProps }) {
  return (
    <PageLayouts>
      <Component {...pageProps} />
    </PageLayouts>
  )
}

/*
  ページ初期化用のAppコンポーネントをオーバーライドする、カスタムAppコンポーネント
  Appコンポーネントが全ページの親コンポーネント
  コンポーネントComponentと、そのページ要素pagePropsを展開して表示
*/

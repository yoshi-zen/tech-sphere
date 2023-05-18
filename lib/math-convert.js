// import { unified } from 'unified'

// import remarkRehype from 'remark-rehype/lib'
// import remarkParse from 'remark-parse'
// import rehypeStringify from 'rehype-stringify'
// import remarkMath from 'remark-math'
// import rehypeKatex from 'rehype-katex'

// export default async function mathConvert(postContents = '') {
//   const processedContents = await unified()
//     .use(remarkParse)
//     .use(remarkMath)
//     .use(remarkRehype)
//     .use(rehypeStringify)
//     .use(rehypeKatex)
//     .process(postContents)
//   const contentStr = processedContents.toString()
//   return contentStr
// }

import { BlockMath, InlineMath } from 'react-katex'

export const mathConvert = ({ equation, isInline }) => {
  return isInline ? (
    <InlineMath math={equation} />
  ) : (
    <BlockMath math={equation} />
  )
}

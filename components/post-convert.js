import React, { useEffect } from 'react'
import Prism from 'prismjs'

import 'prism-themes/themes/prism-one-light.css'

import Image from 'next/legacy/image'
import parse from 'html-react-parser'

export default function PostConvert({ contents }) {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <>
      {contents.map(({ richEditor, lang, source }, index) => (
        <React.Fragment key={index}>
          {parse(richEditor, {
            replace: (node) => {
              if (node.name === 'img') {
                const { src, alt, width, height } = node.attribs
                return (
                  <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    layout="responsive"
                    sizes="(min-width: 768px) 768px, 100vw"
                  />
                )
              }
            },
          })}
          {source && (
            <div className="code-toolbar">
              <pre
                className="line-numbers language-html"
                style={{
                  whiteSpace: 'pre-wrap',
                  wordWrap: 'break-word',
                  overflow: 'auto',
                }}
              >
                <code className={`language-${lang}`}>{source}</code>
              </pre>
            </div>
          )}
        </React.Fragment>
      ))}
    </>
  )
}

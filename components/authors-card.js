import Image from 'next/image'
import styles from '@/styles/authors-card.module.css'
import { useRouter } from 'next/router'

import parse, { domToReact } from 'html-react-parser'
import { CardBodyInner, CardPicInner, CardWrapper } from './card-wrapper'

export default function AuthorsCard({
  name,
  intro,
  profile,
  myproject,
  listView = false,
}) {
  const router = useRouter()
  return (
    <CardWrapper listView={listView}>
      <CardPicInner>
        <Image
          src={myproject.url}
          alt={`eyecatch of ${name}`}
          width={1200}
          height={630}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
            cursor: 'pointer',
            display: 'block',
          }}
          onClick={() => router.push(`/authors/${name}`)}
        />
      </CardPicInner>
      <CardBodyInner listView={listView}>
        <div
          className={styles.name_pic_wrapper}
          onClick={() => router.push(`/authors/${name}`)}
        >
          <div className={styles.pic_inner}>
            <Image
              src={profile.url}
              alt={`profile of ${name}`}
              width={35}
              height={35}
            />
          </div>
          <p style={{ fontWeight: 700 }}>{name}</p>
        </div>
        {parse(intro, {
          replace: (node) => {
            console.log(node.children)
            if (node.name === 'p') {
              return (
                <p
                  {...node.attribs}
                  style={{ fontSize: '0.8em', paddingTop: '0.5em' }}
                >
                  {domToReact(node.children)}
                </p>
              )
            }
          },
        })}
      </CardBodyInner>
    </CardWrapper>
  )
}

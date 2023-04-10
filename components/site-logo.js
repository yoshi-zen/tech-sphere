import Image from 'next/legacy/image'
import Link from 'next/link'

import logo_tr from 'images/TechSphereLogoTransparent2.png'
import banner from 'images/TechSphereBanner.png'

export default function SiteLogo({ top = false }) {
  return (
    <>
      <Link href="/">
        <figure>
          {top ? (
            <Image src={banner} alt="" layout="fixed" width={150} height={50} />
          ) : (
            <Image
              src={logo_tr}
              alt=""
              layout="fixed"
              width={100}
              height={100}
            />
          )}
        </figure>
      </Link>
    </>
  )
}

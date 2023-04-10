import Footer from 'components/footer'
import Header from 'components/header'

export default function PageLayouts(props) {
  return (
    <>
      <Header />

      <main>{props.children}</main>

      <Footer />
    </>
  )
}

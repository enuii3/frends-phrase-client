import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

interface TITLE {
  title: string
}

const Layout: React.FC<TITLE> = ({ children, title = 'Nextjs' }) => {
  return (
    <div className="">
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main className="flex justify-center">main</main>
      <Footer />
    </div>
  )
}

export default Layout

import Head from 'next/head'
import { Header, Footer } from '../ui/'

export const Layout = ({ children, seo }) => {
  const { metaTitle, metaDescription, keywords } = seo
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  )
}

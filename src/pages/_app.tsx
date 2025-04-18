import Head from 'next/head'

import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import Layout from '../components/layout'
 
import '@/styles/index.scss'


import { Open_Sans } from 'next/font/google'
const opensans = Open_Sans({ subsets: ['cyrillic'] })

const defaultLayout = (page: ReactElement<any>) => ( 
  <Layout> 
    { page } 
  </Layout>
)

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement<any>) => ReactNode
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
 
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? defaultLayout
 
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      <style jsx global>{`
        html {
          font-family: ${opensans.style.fontFamily};
        }
      `}
      </style>
      { getLayout(<Component {...pageProps} />) }
    </>
  )

}
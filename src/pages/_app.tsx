import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
 
// on off tailwind
// import '@/styles/tailwind.css'
import '@/styles/index.scss'


import { Open_Sans } from 'next/font/google'
const opensans = Open_Sans({ subsets: ['cyrillic'] })

const defaultLayout = (page: ReactElement) => ( 
  <Layout> 
    { page } 
  </Layout>
)

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
 
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? defaultLayout
 
  return <>
    <style jsx global>{`
      html {
        font-family: ${opensans.style.fontFamily};
      }
    `}
    </style>
   { getLayout(<Component {...pageProps} />) }
  </>

}
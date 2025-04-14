import React from 'react'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '../_app'

import Layout from '@/src/components/layout'


const About: NextPageWithLayout = () => {
  return <div>About</div>
}
About.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <div>
        Nested Child Layout component
        <>
          {page}
        </>
        </div>
    </Layout>
  )
}
export default About
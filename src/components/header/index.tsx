import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import HeaderMenu from './headerMenu'


const Header = (props: { showHeaderMenu: boolean }) => {
  const { showHeaderMenu } = props
  
  const router = useRouter()
  const { slug } = router.query

  return (
    <div className="header">
      <div className="header__logo logo">
        <Link className="no-link" href="/">CYNAREV</Link>
      </div>
      <div className="header__c">
        {( showHeaderMenu ? (
          <HeaderMenu slug={slug} />
        ) : (
          <></>
        ))}
      </div>
      <div style={{ height: 80 }} />
    </div>
  )
}
export default Header
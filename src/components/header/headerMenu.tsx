import Link from 'next/link'
import { MenuLinkType } from './types'
import classNames from 'classnames'


const menuLinks = [{
  slug: 'auditonline',
  title: 'АудитОнлайн',
  icon: '/projects/ao/logo-icon.png',
}, {
  slug: 'asamclo',
  title: 'Asamclo',
  icon: '/projects/asamclo/logo-icon.png',
}, {
  slug: 'phones',
  title: 'Кто звонил',
  icon: '/projects/phones/logo-icon.png',
}]

const HeaderMenu = (props: { slug: string | string[] | undefined }) => {
  const { slug } = props

  return (
    <div className="header__menu menu">
      { menuLinks.map((element: MenuLinkType, index: number) => (
        <div key={index} className={classNames('menu__link', { 'menu__link--active': element.slug == slug })}>
          <img src={element.icon} className="menu__link__i" />
          <Link className="no-link" href={`/projects/${element.slug}`}> 
            { element.title }
          </Link>
        </div>
      )) }
    </div>
  )
}
export default HeaderMenu
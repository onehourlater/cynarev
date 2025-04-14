import Link from 'next/link'

const Header = (props: any) => {
  return (
    <div className="header">
      <div className="header__logo logo">
        <Link className="no-link" href="/">CYNAREV</Link>
      </div>
    </div>
  )
}
export default Header
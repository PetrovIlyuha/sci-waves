import Head from "next/head"
import Router from "next/router"
import Link from "next/link"
import HomeLogo from "./HomeLogo"
import { FiUserPlus } from "react-icons/fi"
import { AiOutlineLogin } from "react-icons/ai"
import { isUserAuthenticated, logOutUser } from "../utils/helpers"
import { AiOutlineLogout } from "react-icons/ai"

const Layout = ({ children }) => {
  const Head = () => (
    <>
      <link
        rel='stylesheet'
        href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
        integrity='sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm'
        crossOrigin='anonymous'
      />
    </>
  )

  const userRole = isUserAuthenticated() && isUserAuthenticated().role

  const onUserLogout = () => {
    logOutUser()
    Router.push("/login")
  }

  const navBar = () => (
    <ul className='nav customNav nav-tabs'>
      <li className='nav-item'>
        <a className='homeLink' href='/'>
          <HomeLogo />
        </a>
      </li>
      {!isUserAuthenticated() && (
        <div className='login__menu'>
          <li className='nav-item'>
            <a href='/login'>
              <AiOutlineLogin size={35} />
            </a>
          </li>
          <li className='nav-item'>
            <a href='/register'>
              <FiUserPlus size={35} />
            </a>
          </li>
        </div>
      )}
      {isUserAuthenticated() && userRole === "admin" && (
        <div className='login__menu'>
          <li className='login__menu--user-info'>
            <Link href='/admin'>
              <a>{isUserAuthenticated().name}</a>
            </Link>
          </li>
          <li className='nav-item' onClick={onUserLogout}>
            <Link href='/logout'>
              <a>
                <AiOutlineLogout size={35} />
              </a>
            </Link>
          </li>
        </div>
      )}
      {isUserAuthenticated() && userRole === "customer" && (
        <div className='login__menu'>
          <li className='login__menu--user-info'>
            <Link href='/user'>
              <a>{isUserAuthenticated().name}</a>
            </Link>
          </li>
          <li className='nav-item' onClick={onUserLogout}>
            <a href='#'>
              <AiOutlineLogout size={35} />
            </a>
          </li>
        </div>
      )}
    </ul>
  )
  return (
    <div className='overall__layout-styles'>
      {Head()}
      {navBar()}
      <div className='container customContainer pt-5 pb-5'>{children}</div>
    </div>
  )
}

export default Layout

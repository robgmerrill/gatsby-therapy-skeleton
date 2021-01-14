import React from "react"
import {FaBars} from 'react-icons/fa'
import {Link, useStaticQuery, graphql} from 'gatsby'

const Nav = ({props}) => {
    const [menuOpen, setMenuOpen] = React.useState(false);
    // Query within component
    // const {allSanityTitle} = useStaticQuery(graphql`
    const data = useStaticQuery(graphql`
    query AvatarTitleQuery {
      allSanityTitle {
      nodes {
      title
    }
    }
    }
  `)
//    console.log(data)
//    const avatarTitle = allSanityTitle.nodes[0].title;
    const avatarTitle = data.allSanityTitle.nodes[0].title;
   console.log(avatarTitle)
    return (
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white-500 rounded shadow-md">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-black"
              href="#pablo"
            >
              {avatarTitle}
            </a>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <i><FaBars/></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (menuOpen ? " flex" : " hidden")
            }
            id="example-navbar-info"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  to='/specialties/'
                >
                  Specialties
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  to="/blog/"
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  to="/pricing/"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}


export default Nav
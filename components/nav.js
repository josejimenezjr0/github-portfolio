import { useState } from 'react'
import Link from 'next/link'

const links = [
  'about',
  'skills',
  'portfolio',
  'contact'
]

const Nav = () => {
  const [open, setOpen] = useState(false)

  const navLinks = links.map( (link, index) => (
    <Link href={link} key={index}>
      <a className="block text-white font-semibold uppercase rounded hover:bg-gray-600 px-2 mt-1">{link}</a>
    </Link>
  ))

  return (
    <nav className="bg-gray-700">
      <div className=" flex items-center justify-between px-4 py-3">
        <div>
          <p className="text-white font-semibold uppercase tracking-wide">Jose Jimenez Jr.</p>
        </div>
        <div>
          <button type="button" onClick={() => setOpen(!open)} className=" block text-gray-400 hover:text-white focus:text-white focus:outline-none">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 100 80">
              <rect width="100" height="20"></rect>
              <rect y="30" width="100" height="20"></rect>
              <rect y="60" width="100" height="20"></rect>
            </svg>
          </button>
        </div>
      </div>
      <div class={`${open ? 'block' : 'hidden'}px-2 pt-2 pb-4`}>
        {navLinks}
      </div>
    </nav>
  )
}

export default Nav()

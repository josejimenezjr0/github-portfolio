import { useState } from 'react'
import Link from 'next/link'

const links = [
  'about',
  'skills',
  'portfolio',
  'contact'
]

const Home = () => {
  const [open, setOpen] = useState(false)

  const navLinks = links.map( (link, index) => (
    <Link href={link} key={index}>
      <a className="block text-white font-semibold uppercase rounded hover:bg-gray-600 px-2 mt-1 sm:mt-0 sm:ml-1">{link}</a>
    </Link>
  ))

  return (
    <div>
      <nav className="bg-gray-700 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-2">
        <div className=" flex items-center justify-between px-4 py-2 sm:p-0">
          <div>
            <p className="text-white font-semibold uppercase tracking-wide">Jose Jimenez Jr.</p>
          </div>
          <div className="sm:hidden">
            <button type="button" onClick={() => setOpen(!open)} className=" block text-gray-400 hover:text-white focus:text-white focus:outline-none">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {open && <path fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>}
                {!open && <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>}
              </svg>
            </button>
          </div>
        </div>
        <div className={`${open ? 'block' : 'hidden'} px-2 pt-2 pb-4 sm:flex sm:p-0`}>
          {navLinks}
        </div>
      </nav>
      <div className="text-white font-bold text-center uppercase py-20 bg-header bg-center bg-cover" >
        <p className="text-5xl">Jose Jimenez Jr.</p>
        <hr className="mx-auto"/>
        <p className="text-xl tracking-wide my-3">Web Developer</p>
      </div>
    </div>
  )
}

export default Home


import { useEffect, useState } from 'react'
import Link from 'next/link'
import Portfolio from './portfolio'
import About from './about'


const links = [
  'about',
  'skills',
  'portfolio',
  'contact'
]

const Home = () => {
  const [open, setOpen] = useState(false)

  const handleEscape = e => {
    if(e.key === 'Esc' || e.key === 'Escape') {
      setOpen(false)
    }
  }

  useEffect(()=> {
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  const navLinks = links.map( (link, index) => (
    <Link href={`#${link}`} key={index}>
      <a onClick={() => setOpen(!open)} className="block text-white font-semibold uppercase rounded hover:bg-gray-600 px-2 mt-1 sm:mt-0 sm:ml-1">{link}</a>
    </Link>
  ))

  return (
    <div id="page-top" className="antialiased text-gray-900">
      <nav className="fixed w-full z-10">
        <div className="relative bg-gray-700 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-2">
          <div className=" flex items-center justify-between px-4 py-2 sm:p-0">
            <div>
            <Link href="#page-top">
              <button type="button" className="text-white font-semibold uppercase tracking-wide hover:text-gray-400 focus:outline-none">Jose Jimenez Jr.</button>
            </Link>
            </div>
            <div className="sm:hidden">
              <button type="button" onClick={() => setOpen(!open)} className="relative block text-gray-400 hover:text-white focus:text-white focus:outline-none z-20">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  {open && <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>}
                  {!open && <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>}
                </svg>
              </button>
              {open && <button type="button" tabIndex="-1" onClick={() => setOpen(!open)} className="fixed inset-0 h-full w-full bg-black opacity-25 cursor-default z-10"></button>}
            </div>
          </div>
          <div className={`absolute right-0 ${open ? 'block' : 'hidden'} bg-gray-700 px-2 pt-2 pb-4 sm:flex sm:p-0 rounded-b-lg z-20`}>
            {navLinks}
          </div>
        </div>
      </nav>
      <div className="text-white text-center uppercase py-20 bg-header bg-center bg-cover" >
        <p className="text-4xl font-bold">Jose Jimenez Jr.</p>
        <hr className="mx-auto"/>
        <p className="text-lg tracking-wide my-3 font-medium">Web Developer</p>
      </div>
      <About />
      <Portfolio />
    </div>
  )
}

export default Home


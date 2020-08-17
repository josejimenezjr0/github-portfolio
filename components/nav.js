import Link from 'next/link'

const links = [
  'about',
  'skills',
  'portfolio',
  'contact'
]

const navLinks = links.map( (link, index) => (
    <li key={index}>
      <Link href={link}>
        <a className="btn-blue no-underline uppercase">{link}</a>
      </Link>
    </li>
  ))

export default function Nav() {
  return (
    <nav className="bg-gray-400">
      <ul className="flex justify-between items-center p-6 font-semibold">
        <li>
          <Link href="/">
            <a className="text-blue-500 no-underline uppercase">Jose Jimenez Jr.</a>
          </Link>
        </li>
        <ul className="flex justify-between items-center space-x-4">
          {navLinks}
        </ul>
        {/* <ul className="flex flex-col items-center space-x-4">
          {navLinks}
        </ul> */}
      </ul>
    </nav>
  )
}

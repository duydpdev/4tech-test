import Link from 'next/link'

import { LocalSwitch } from '@/components'
import { useNavbar } from '@/hooks'

export default function Navbar() {
  const { navLinks } = useNavbar()
  return (
    <nav className='flex flex-row items-center space-x-[5rem]'>
      <ul className='flex flex-row space-x-[5rem]'>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              className='font-bold uppercase hover:underline'
              href={link.href}
              title={link.title}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
      <LocalSwitch />
    </nav>
  )
}

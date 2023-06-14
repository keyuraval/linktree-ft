import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <Link className="flex flex-row item-center" target='' href='/'>
        <h5 className='text-indigo-400 pl-3'>Made With Love by Keyur</h5>
      </Link>
    </footer>
  )
}

export default Footer
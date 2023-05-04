import React from 'react'
import Link from 'next/link';

function HomePage() {

  return (
    <div className='container'>
      <Link href="/postingan">Go Postingan</Link>
      <Link href="#">Go Contact</Link>
    </div>
  )
}

export default HomePage
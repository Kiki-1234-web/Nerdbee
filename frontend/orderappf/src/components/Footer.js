import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='see-yourself'>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none">
      </Link>
      <span className="text-muted text-center">© 2023 Nerdbee, Inc</span>
    </div>
  {/* //   <div className="text-center p-10 mt-10 border-t dark:border-gray-700 border-gray-200 ">
  //   © 2022 Gogol, Inc.
  // </div> */}
  </footer>
    </div>
  )
}

import React from 'react'

const Footer = () => {
  const footerYear = new Date().getFullYear()
  return (
    <footer className='bg-gray-800 footer p-10 bggray-700 text-primary-content
    footer-center'>
      <p>Copyright &copy; {footerYear} All rights reserved</p>
    </footer>
  )
}

export default Footer

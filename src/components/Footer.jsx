import React from 'react'
import youtube from "../assets/youtube_icon.png"
import facebook from "../assets/facebook_icon.png"
import twitter from "../assets/twitter_icon.png"
import instagram from "../assets/instagram_icon.png"

const Footer = () => {
  return (
    <footer className='mx-10 my-6'>
      <div className="icons flex gap-4">
        <img className='w-8 cursor-pointer' src={youtube} alt="" />
        <img className='w-8 cursor-pointer' src={facebook} alt="" />
        <img className='w-8 cursor-pointer' src={instagram} alt="" />
        <img className='w-8 cursor-pointer' src={twitter} alt="" />
      </div>
      <div className="footer-links flex justify-around my-4">
        <ul className='my-4 flex flex-col gap-2'>
          <li className='cursor-pointer'>Audio Description</li>
          <li className='cursor-pointer'>Help Centre</li>
          <li className='cursor-pointer'>Gift Cards</li>
          <li className='cursor-pointer'>Media Centre</li>
        </ul>
        <ul className='my-4 flex flex-col gap-2'>
          <li className='cursor-pointer'>Investor Relations</li>
          <li className='cursor-pointer'>Jobs</li>
          <li className='cursor-pointer'>Terms of Use</li>
          <li className='cursor-pointer'>Privacy</li>
        </ul>
        <ul className='my-4 flex flex-col gap-2'>
          <li className='cursor-pointer'>Legal Notices</li>
          <li className='cursor-pointer'>Cookie Preferences</li>
          <li className='cursor-pointer'>Corporate Information</li>
          <li className='cursor-pointer'>Contact Us</li>
        </ul>
      </div>
      <p className='copyright text-center text-gray-400'>Copyright &copy; Netflix India 2024</p>
    </footer>
  )
}

export default Footer

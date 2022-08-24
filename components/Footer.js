import Link from 'next/link'
import { FaFacebookF, FaLinkedin, FaTwitter, FaGithub, FaInstagram} from "react-icons/fa";
import { BsCloudDownload } from "react-icons/bs";

function Footer() {
  return (
    <div >
      <div >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='' >
          <path fill="#fb923c" fillOpacity="1" d="M0,192L80,181.3C160,171,320,149,480,122.7C640,96,800,64,960,64C1120,64,1280,96,1360,112L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
        </path>
        </svg>
      </div>
      <div className="pt-4 bg-orange-400 text-gray-100 pb-4">
        <div className='grid grid-cols-2 gap-y-8 lg:flex text-center lg:text-left justify-between border-b border-gray-400 pb-4  lg:px-24 '>
        <div>
          <h2 className='font-semibold text-2xl mb-4'>Learn</h2>
            <ul className='space-y-2 text-sm lg:text-base'>
              <li className='hover:underline hover:text-gray-400' >
                <Link href='/learn'>
                  <a> Explore Classes</a>
                </Link>
              </li>
              <li className='hover:underline hover:text-gray-400' >
                <Link href='/learn/categories'>
                  <a> Explore Categories</a>
                </Link>
              </li>
              <li className='hover:underline hover:text-gray-400' >
                <Link href='/learn/sponsorstudents'>
                  <a> Sponsor a Student</a>
                </Link>
              </li>
              <li className='hover:underline hover:text-gray-400' >
                <Link href='/learn/homeschool'>
                  <a> Homeschool Classes</a>
                </Link>
              </li>
              <li className='hover:underline hover:text-gray-400' >
                <Link href='/learn/financialassisstance'>
                  <a> Financial Assistance</a>
                </Link>
              </li>
              <li className='hover:underline hover:text-gray-400' >
                <Link href='/learn/giftcards'>
                  <a> Give a Gift Card</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='font-semibold text-2xl mb-4'>About </h2>
            <ul className='space-y-2 text-sm lg:text-base'>
              <li className='hover:underline hover:text-gray-400' >
                <Link href='/about/company'>
                  <a> Company</a>
                </Link>
              </li>
              <li className='hover:underline hover:text-gray-400' >
                <Link href='/about/careers'>
                  <a> Careers</a>
                </Link>
              </li>
              <li className='hover:underline hover:text-gray-400' >
                <Link href='/about/blog'>
                  <a> Blog</a>
                </Link>
              </li>
              <li className='hover:underline hover:text-gray-400' >
                <Link href='/about/press'>
                  <a> Press</a>
                </Link>
              </li>
              <li className='hover:underline hover:text-gray-400' >
                <Link href='/about'>
                  <a className='flex items-center'>Download IOS App <BsCloudDownload className='lg:ml-2'/></a>
                </Link>
              </li>
              <li className='hover:underline hover:text-gray-400' >
                <Link href='/about'>
                  <a className='flex items-center'>Download Android App <BsCloudDownload className='lg:ml-2'/></a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='font-semibold text-2xl mb-4'>Grade Levels</h2>
            <ul className='space-y-2 text-sm lg:text-base'>
              <li className='hover:underline hover:text-gray-400' >
                <Link href='/courses/index'>
                  <a> Pre-K</a>
                </Link>
              </li>
              <li className='hover:underline hover:text-gray-400' >
                <Link href='/courses/k2primary'>
                  <a> K-2 Primary</a>
                </Link>
              </li>
              <li className='hover:underline hover:text-gray-400' >
                <Link href='/courses/firstmidschool'>
                  <a> 3-5 Middle School</a>
                </Link>
              </li>
              <li className='hover:underline hover:text-gray-400' >
                <Link href='/courses/secondmidschool'>
                  <a> 6-8 Middle School</a>
                </Link>
              </li>
              <li className='hover:underline hover:text-gray-400' >
                <Link href='/courses/highschool'>
                  <a> 9-12 High School</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='font-semibold text-2xl mb-4'>Support</h2>
            <ul className='space-y-2 text-sm lg:text-base'>
            <li className='hover:underline hover:text-gray-400' >
                <Link href='/support/help'>
                  <a> Help</a>
                </Link>
              </li>
            <li className='hover:underline hover:text-gray-400' >
                <Link href='/support/safety'>
                  <a> Safety</a>
                </Link>
              </li>
            <li className='hover:underline hover:text-gray-400' >
                <Link href='/support/privacy'>
                  <a> Privacy</a>
                </Link>
              </li>
            <li className='hover:underline hover:text-gray-400' >
                <Link href='/support/privacy'>
                  <a> Learner Privacy</a>
                </Link>
              </li>
            <li className='hover:underline hover:text-gray-400' >
                <Link href='/support/termsandconditions'>
                  <a> Terms</a>
                </Link>
              </li>
            <li className='hover:underline hover:text-gray-400' >
                <Link href='/'>
                  <a> Do Not Sell My Personal Information</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
         <div className="flex flex-col lg:flex-row justify-around mt-2 px-1">
            <p className='text-xs'>&copy;  {`${new Date().getFullYear()}`} SOFTWARE DEVELOPMENT BYTES. <span>All rights reserved.</span> </p>
            <div className='flex items-center mt-2'>
              <div className="flex underline text-xs">
                <div>
                  <Link href='/support/privacy'>
                      <a className='hover:text-black'>Privacy Policy</a>
                  </Link>
                </div>
                <p className='mx-2'> |  </p>
                <div>
                  <Link href='/support/termsandconditions'>
                      <a className='hover:text-black'>Terms</a>
                  </Link>
                </div>
              </div>
              <div className="flex ml-6">
                <Link href='/'>
                  <a>
                   <FaFacebookF className=' hover:text-black'/>
                  </a>
                </Link>
                  <Link href='/'>
                    <a> <FaLinkedin className='mx-4 hover:text-black'/> </a>
                  </Link>
                  <Link href='/'>
                    <a>  <FaTwitter className=' hover:text-black'/>  </a>
                  </Link>
                  <Link href='/'>
                    <a> <FaGithub className='mx-4 hover:text-black'/></a>
                  </Link>
                  <Link href='/'>
                    <a> <FaInstagram className=' hover:text-black'/></a>
                  </Link>
              </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Footer
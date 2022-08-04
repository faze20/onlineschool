import Link from 'next/link'

function Footer() {
  return (
    <div>
      <div className='relative'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" >
          <path fill="#fb923c" fill-opacity="1" d="M0,192L80,181.3C160,171,320,149,480,122.7C640,96,800,64,960,64C1120,64,1280,96,1360,112L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
          </path>
          <p>local</p>
        </svg>

      </div>
      <div className=" bg-orange-400">
        <div className='grid grid-cols-2 lg:flex'>
        <div>
            <ul>
              <li>website</li>
              <li>website</li>
              <li>website</li>
              <li>website</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>website</li>
              <li>website</li>
              <li>website</li>
              <li>website</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>website</li>
              <li>website</li>
              <li>website</li>
              <li>website</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>website</li>
              <li>website</li>
              <li>website</li>
              <li>website</li>
            </ul>
          </div>
        </div>
         <div className="flex justify-around">
            <div className="flex">
              <div>
                <Link href='/'>
                    <a className='underline'>Privacy Policy</a>
                </Link>
              </div>
              <p> |  </p>
              <div>
                <Link href='/'>
                    <a className='underline'>Terms</a>
                </Link>
              </div>
            </div>
            <p>&copy;  {`${new Date().getFullYear()}`} SOFTWARE DEVELOPMENT BYTES. </p>
            <p>All rights reserved.</p>

         </div>
      </div>
    </div>
  )
}

export default Footer
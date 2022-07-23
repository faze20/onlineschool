import Link from 'next/link'

function Footer() {
  return (
    <div>
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
  )
}

export default Footer
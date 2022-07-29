import Image from 'next/image'
import Link from 'next/link'

function Contact() {
  return (
    <div className='px-2'>
        <h2 className='font-bold text-2xl mt-4'>Contact SdBytes Academy </h2>
        <p>Phone :<span className='font-bold text-2xl text-orange-600'>  +1 7472498760</span> </p>
        <p>email :<span className='font-bold text-2xl text-orange-600'>   afeez20@yahoo.com</span>  </p>

            <div className="flex items-center justify-center mt-8 mb-12">
                <Link href='/'> 
                    <a className='mt-2'>
                        <Image
                        src='/underconstruction.webp'    
                        alt="logo" 
                        width={1080}
                        height={500}
                        className='rounded-md'
                        />
                    </a>
                </Link>
            </div>
    </div>
  )
}

export default Contact
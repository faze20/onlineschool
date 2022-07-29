import Image from 'next/image'
import Link from 'next/link'

function About() {
  return (
    <div className='px-2'>
        <h2 className='font-bold text-2xl mt-4'>About Softwaredev Bytes Academy</h2>
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

export default About
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
   <div>
        <Head>
          <title>Coding for Kids</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='flex  h-screen justify-center relative'>
           <Link href='/'> 
              <a 
              className='relative w-full h-3/4 border border-gray-200 rounded-md overflow-hidden bg-black'
              // className='bg-black '
              >
                  <Image
                  src='/homePhoto.jpg'    
                  alt="logo" 
                  // width={1280}
                  // height={400}
                  // layout='responsive'
                  // objectFit='contain'
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  priority
                  className='bg-blend-overlay bg-black opacity-60'
                  />
              </a>
          </Link>
          <div className="absolute top-80  ">
            <div className='text-gray-100 mb-8'>
              <h2 className='text-4xl font-bold '>#1 Coding <span className='text-orange-400'>Academy</span>  for Kids &amp; <span className='text-orange-400'>Teens</span> </h2>
              <h3 className='text-center text-xl font-bold mt-2'>Online &amp; In-person</h3>
            </div>
            <div className="flex justify-around text-gray-100">
              <div className="flex flex-col rounded-md items-center bg-orange-400 hover:bg-orange-700 p-2 duration-500 ">
                <h2 className='font-bold'>Live Online</h2>
                <h1 className='text-2xl font-bold'>Bright Mind&apos;s Space</h1>
                <div className="flex justify-between">
                  <div>
                      <Link href='/profile/classes'>
                          <a className='mr-4 hover:underline hover:text-gray-300'>
                            Small Group
                          </a>
                      </Link>

                  </div>
                  <div>
                      <Link href='/profile/classes'>
                          <a className='mr-4 hover:underline hover:text-gray-300'>
                            Private Classes
                          </a>
                      </Link>

                  </div>
                </div>
              </div>
              <div className='flex flex-col rounded-md items-center bg-orange-400 hover:bg-orange-700 p-2 duration-500'>
                <h2 className='font-bold'>Summer</h2>
                <h1  className='text-2xl font-bold'>Classes</h1>
                <div className="flex justify center w-full">
                    <Link href='/profile/classes'>
                        <a className='mr-4 hover:underline hover:text-gray-300'>
                        Live Online
                        </a>
                    </Link>
                    <Link href='/profile/classes'>
                        <a className='mr-4 hover:underline hover:text-gray-300'>
                        In-person Classes
                        </a>
                    </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className='flex justify-between mt-4 mx-24 border-b border-gray-200 pb-12 mb-4 '>
          <div >
            <p className='text-orange-600 text-4xl font-bold text-center'>8</p>
            <h3 className='my-4 text-xl font-semibold text-gray-500 w-28 text-center lg:w-60'>years of Coding with Kids</h3>
            <div className='text-center '>
            <Image
                src='/awards.png'    
                alt="logo" 
                width={100}
                height={100}
                />
            </div>
          </div>
          <div>
            <p className='text-orange-600 text-4xl font-bold text-center'>50,000</p>
            <h3 className='my-4 text-xl font-semibold text-gray-500 w-28 text-center lg:w-60'>Students taught</h3>
            <div className='text-center '>
            <Image
                src='/onlinestudents.png'    
                alt="logo" 
                width={100}
                height={100}
                />
            </div>
          </div>
          <div>
            <p className='text-orange-600 text-4xl font-bold text-center'>18,000+</p>
            <h3 className='my-4 text-xl font-semibold text-gray-500 w-28 text-center lg:w-60'>online students</h3>
            <div className='text-center '>
            <Image
                src='/onlinesclass.png'    
                alt="logo" 
                width={100}
                height={100}
                />
            </div>
          </div>
          <div>
            <p className='text-orange-600 text-4xl font-bold text-center'>600+</p>
            <h3 className='my-4 text-xl font-semibold text-gray-500 w-28 text-center lg:w-60'>School partners</h3>
            <div className='text-center '>
            <Image
                src='/partners.png'    
                alt="logo" 
                width={100}
                height={100}
                />
            </div>
          </div>

        </div>

        <div className="my-4 ">
          <div className="text-center">
              <h2 className="font-semibold text-3xl">
                  TOP-NOTCH <span className='text-orange-500'>COMPUTER SCIENCE</span> PROGRAM
              </h2>
              <h3 className='text-xl'>
                  Full coding curriculum for ages 5-18
              </h3>
          </div>
          <div className="flex mx-12 justify-evenly mt-12">
            <div className='text-center flex flex-col'>
               <Image
                  src='/hometutornew2.jpg'    
                  alt="logo" 
                  width={300}
                  height={200}
                  />
                  <div className='bg-yellow-400'>
                    <h1>Coders Pathway</h1>
                    <h2 className='font-semibold text-4xl'>Camps</h2>
                  </div>
                  <div>
                    <p>Offered during school breaks</p>
                    <p className='border-2-2 border-orange-900'>Ages 5-18</p>
                  </div>
                  <div>
                    <h2>Live online/ In-person</h2>
                    <p>1-3hrs a day/Half or Full Day</p>
                    <p>One week, Mon-Fri</p>
                  </div>
                  <div>
                    <p>Starting at $200 /2.5hr a day</p>
                    <p>Starting at $3000 /2.5hr a day</p>
                  </div>
            </div>
            <div className='text-center flex flex-col'>
               <Image
                  src='/hometutornew1.jpg'    
                  alt="logo" 
                  width={300}
                  height={200}
                  />
                  <div className='bg-yellow-400'>
                    <h1>Coders Pathway</h1>
                    <h2 className='font-semibold text-4xl'>Classes</h2>
                  </div>
                  <div>
                    <h2>Live online</h2>
                    <p>Offered Year round</p>
                    <p className='border-2-2 border-orange-900'>Ages 5-18</p>
                  </div>
                  <div>
                    <p>Continous , 8-week billing cycle</p>
                    <p>Meet once or twice a week, 1:15h</p>

                  </div>
                  <div>
                    <p>Once a week: $200 /8weeks</p>
                    <p>Twice a week: $300 /8 weeks</p>
                  </div>
            </div>
            <div className='text-center flex flex-col'>
               <Image
                  src='/hometutornew.jpg'    
                  alt="logo" 
                  width={300}
                  height={200}
                  />
                  <div className='bg-yellow-400'>
                    <h1>Coders Pathway</h1>
                    <h2 className='font-semibold text-4xl'>Camps</h2>
                  </div>
                  <div>
                    <p>Offered during school breaks</p>
                    <p className='border-2-2 border-orange-900'>Ages 5-18</p>
                  </div>
                  <div>
                     <h2>Live online</h2>
                    <p>8-week sessions</p>
                    <p>One week, Mon-Fri</p>

                  </div>
                  <div>
                    <p>Starting at $50 per class</p>
                    <p>Starting at $325 for a 8-week session</p>
                  </div>
            </div>
          </div>

          <div className='px-24 mt-16 '>
          {/* explore more with coding */}
            <div className=''>
                <div><h2 className='text-xl text-gray-400 mb-6'>Explore more in coding and tech</h2></div>
                <div className="flex  overflow-x-auto ">
                  <div className="flex items-center justify-center text-base p-2 bg-gray-300 rounded-full border-2 hover:border-blue-500 hover:bg-blue-100 mr-2">Coding Camps</div>
                  <div className="flex items-center justify-center text-base p-2 bg-gray-300 rounded-full border-2 hover:border-blue-500 hover:bg-blue-100 mr-2">Beginner Coding</div>
                  <div className="flex items-center justify-center text-base p-2 bg-gray-300 rounded-full border-2 hover:border-blue-500 hover:bg-blue-100 mr-2">C#</div>
                  <div className="flex items-center justify-center text-base p-2 bg-gray-300 rounded-full border-2 hover:border-blue-500 hover:bg-blue-100 mr-2">Computer Programming</div>
                  <div className="flex items-center justify-center text-base p-2 bg-gray-300 rounded-full border-2 hover:border-blue-500 hover:bg-blue-100 mr-2">C++</div>
                  <div className="flex items-center justify-center text-base p-2 bg-gray-300 rounded-full border-2 hover:border-blue-500 hover:bg-blue-100 mr-2">Python Coding</div>
                  <div className="flex items-center justify-center text-base p-2 bg-gray-300 rounded-full border-2 hover:border-blue-500 hover:bg-blue-100 mr-2">Javascript</div>
                  <div className="flex items-center justify-center text-base p-2 bg-gray-300 rounded-full border-2 hover:border-blue-500 hover:bg-blue-100 mr-2">Hacking</div>
                  <div className="flex items-center justify-center text-base p-2 bg-gray-300 rounded-full border-2 hover:border-blue-500 hover:bg-blue-100 mr-2">Apps</div>
                  <div className="flex items-center justify-center text-base p-2 bg-gray-300 rounded-full border-2 hover:border-blue-500 hover:bg-blue-100 mr-2">Artificial Intelligence</div>
                  <div className="flex items-center justify-center text-base p-2 bg-gray-300 rounded-full border-2 hover:border-blue-500 hover:bg-blue-100">Computer Science</div>
                </div>
            </div>
            {/* explore more with coding */}

            {/* newslettter */}
            <div className=' mt-16'>
                <h2 className='font-semibold text-xl'>Stay in the know on all of our programs and announcements:</h2>
              <form className='flex justify-between '>
                <div>
                  <input type="text" placeholder='First Name' />
                </div>
                <div>
                  <input type="text" placeholder='Email' />
                </div>
                <div><button className='bg-gray-300 p-2 text-xl rounded'>Sign Up</button></div>
              </form>
            </div>
            {/* newslettter */}

          </div>




        </div>

   </div>
  )
}

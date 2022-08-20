import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import {BsUnlock } from "react-icons/bs";
import {FaRegCalendarAlt} from "react-icons/fa";
import CarouselComponent from '../components/Carousel';




export default function Home() {
  const [hover, setHover] = useState(false);
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);

  return (
   <div className='relative'>
        <Head>
          <title>Coding for Kids</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='flex  h-screen justify-center '>
           <Link href='/'> 
              <a 
              className='relative w-full h-full border border-gray-200 rounded-md overflow-hidden bg-black'
              >
                  <Image
                  src='/homePhoto.jpg'    
                  alt="logo" 
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  priority
                  className='bg-blend-overlay bg-black opacity-60'
                  />
              </a>
          </Link>
             <div className="absolute top-96 lg:top-80  ">
            <div className='text-gray-100 mb-2 lg:mb-8'>
              <h2 className=' text-2xl lg:text-4xl font-bold text-center'>#1 Coding <span className='text-orange-400'>Academy</span>  for Kids &amp; <span className='text-orange-400'>Teens</span> </h2>
              <h3 className='text-center text-base lg:text-xl font-bold mt-2'>Online &amp; In-person</h3>
            </div>
            <div className="flex justify-around text-gray-100">
              <div className="flex flex-col rounded-md items-center bg-orange-400 hover:bg-orange-700 p-2 duration-500  w-5/12 lg:w-2/3 lg:mr-4  ">
                <h2 className='font-semibold'>Online Classes</h2>
                <h1 className='text-2xl font-bold mt-4'>Group&apos;s</h1>
                <div className="lg:flex lg:justify-between lg:w-full mt-6">
                  <div>
                      <Link href='/profile/classes'>
                          <a className='border lg:border-0 border-gray-300 rounded p-1 hover:underline hover:text-gray-300'>
                            Small Group&apos;s
                          </a>
                      </Link>
                  </div>
                  <div className='mt-4 lg:mt-0'>
                      <Link href='/profile/classes'>
                          <a className='border lg:border-0 border-gray-300 rounded p-1 lg:p-0 hover:underline hover:text-gray-300'>
                            Private Classes
                          </a>
                      </Link>
                  </div>
                </div>
              </div>
              <div className='flex flex-col  rounded-md items-center bg-orange-400 hover:bg-orange-700 p-2 duration-500  w-5/12 lg:w-2/3 lg:mr-4 '>
                <h2 className='font-semibold'>Summer</h2>
                <h1  className='text-2xl font-bold mt-4'>Classes</h1>
                <div className="lg:flex lg:justify-between lg:w-full mt-8">
                  <div>
                      <Link href='/profile/classes'>
                          <a className='border lg:border-0 border-gray-300 rounded p-1 hover:underline hover:text-gray-300'>
                          Live Online
                          </a>
                      </Link>
                  </div>
                  <div className='mt-4 lg:mt-0'>
                      <Link href='/profile/classes'>
                          <a className='border lg:border-0 border-gray-300 rounded p-1 hover:underline hover:text-gray-300'>
                          In-person Classes
                          </a>
                      </Link>
                  </div>
                </div>
              </div>
            </div>
              </div>
        </div>
        <div className='grid grid-cols-2 gap-y-16 gap-x-2 lg:flex justify-between mt-4 lg:mx-24 border-b border-gray-200 pb-12 mb-4 '>
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
              <h3 className='text-xl my-4'>
                  Full coding curriculum for ages 5-18
              </h3>
          </div>
          <div className="flex flex-col lg:flex-row lg:mx-12 justify-evenly mt-12">
            <div className='text-center flex flex-col'>
               <Image
                  src='/hometutornew2.jpg'    
                  alt="logo" 
                  width={300}
                  height={200}
                  />
                  <div className='bg-yellow-400'>
                    <h1>Javascript Pathway</h1>
                    <h2 className='font-semibold text-4xl'>Javascript</h2>
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
                    <h1>Python Pathway</h1>
                    <h2 className='font-semibold text-4xl'>Python Intro</h2>
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
                    <h1>Web Design</h1>
                    <h2 className='font-semibold text-4xl'>Websites</h2>
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

          <div className='lg:px-24 px-2 mt-16 '>
          {/* explore more with coding */}
            <div className='relative '>
                <div><h2 className='text-xl text-gray-400 mb-6'>Explore more in coding and tech</h2></div>
                <div className="flex  w-full overflow-x-auto no-scrollbar p-2 bg-gray-100 rounded mx-2 " title='click then use keyboard arrows to scroll'>
                  <div className="flex items-center justify-center text-base p-2 bg-gray-300 rounded-full border-2 hover:border-blue-500 hover:bg-blue-100 mr-2 flex-none">Coding Camps</div>
                  <div className="flex items-center justify-center text-base p-2 bg-gray-300 rounded-full border-2 hover:border-blue-500 hover:bg-blue-100 mr-2 flex-none">Beginner Coding</div>
                  <div className="flex items-center justify-center text-base p-2 bg-gray-300 rounded-full border-2 hover:border-blue-500 hover:bg-blue-100 mr-2 flex-none">C#</div>
                  <div className="flex items-center justify-center text-base p-2 bg-gray-300 rounded-full border-2 hover:border-blue-500 hover:bg-blue-100 mr-2 flex-none">Computer Programming</div>
                  <div className="flex items-center justify-center text-base p-2 bg-gray-300 rounded-full border-2 hover:border-blue-500 hover:bg-blue-100 mr-2 flex-none">C++</div>
                  <div className="flex items-center justify-center text-base p-2 bg-gray-300 rounded-full border-2 hover:border-blue-500 hover:bg-blue-100 mr-2 flex-none">Python Coding</div>
                  <div className="flex items-center justify-center text-base p-2 bg-gray-300 rounded-full border-2 hover:border-blue-500 hover:bg-blue-100 mr-2 flex-none">Javascript</div>
                  <div className="flex items-center justify-center text-base p-2 bg-gray-300 rounded-full border-2 hover:border-blue-500 hover:bg-blue-100 mr-2 flex-none">Hacking</div>
                  <div className="flex items-center justify-center text-base p-2 bg-gray-300 rounded-full border-2 hover:border-blue-500 hover:bg-blue-100 mr-2 flex-none">Apps</div>
                  <div className="flex items-center justify-center text-base p-2 bg-gray-300 rounded-full border-2 hover:border-blue-500 hover:bg-blue-100 mr-2 flex-none">Artificial Intelligence</div>
                  <div className="flex items-center justify-center text-base p-2 bg-gray-300 rounded-full border-2 hover:border-blue-500 hover:bg-blue-100 flex-none">Computer Science</div>
                  <div className='absolute top-16 right-1 z-10'><span title='click then use keyboard arrows to scroll' className='font-bold text-base  bg-gray-600 text-white  border-2 border-black rounded-full'> &#62;</span></div>
                </div>
            </div>
            {/* explore more with coding */}

            {/* newslettter */}
            <div className=' mt-16'>
                <h2 className='font-semibold lg:text-xl mb-8'>Stay in the know on all of our programs and announcements:</h2>
              <form className='flex flex-wrap lg:flex-nowrap justify-between '>
                <div className='w-full border border-gray-300 rounded p-1'>
                  <input
                  className='w-full p-2 outline-none '
                  type="text" placeholder='First Name' />
                </div>
                <div className='w-full border border-gray-300 rounded p-1 lg:mx-8'>
                  <input
                   className='w-full p-2 outline-none '
                  type="text" placeholder='Email' />
                </div>
                <div className='w-full'>
                  <button type='submit' className='bg-green-700 text-white hover:bg-green-500 p-3 text-xl w-full rounded'>Sign Up</button>
                </div>
              </form>
            </div>
            {/* newslettter */}

            {/* video tutorials */}
            <div className=' mt-20 lg:mt-8'>
              <div>
                <h2 className='font-bold text-3xl text-center  mb-12'>Video Tutorials</h2>
              </div>
              <div>
                <div className='flex flex-col lg:flex-row justify-around'>
                  <div className=' text-center lg:text-left'>
                      <div
                        onMouseEnter={(e) => setHover(true)}
                        onMouseLeave={(e) => setHover(false)}
                      >
                        {hover ?
                          <video className='h-[200px] w-[200px]' controls autoPlay muted>
                            <source src="../videos/coffeeandlaptop.mp4" type="video/mp4"/>
                          </video>          
                          :
                          <Image
                          src='/academykids1.jpg'    
                          alt="logo" 
                          width={300}
                          height={200}
                          />
                        }
                      </div>
                      <div >
                        <h3 className='font-bold text-xl mb-4'>Practical and Hands-On Coding</h3>
                        <div className="flex  text-gray-400 text-sm mb-4 ml-8 lg:ml-0">
                          <div className="flex items-center mr-1 "><FaRegCalendarAlt/> <span className='mx-4'>{`${new Date().getFullYear()}`}</span> 8:15am  /  </div>
                          <div className="flex items-center "> <BsUnlock /> <span className='ml-2 text-orange-500'>Free</span>  </div>
                        </div>
                        <div>
                          <p className=' lg:w-72'>
                            Welcome to the wondeful world of coding.In this first lessons ,
                            we&apos;ll be learning the basics of coding and what it means
                            <span className='cursor-pointer'>...more</span>
                          </p>
                        </div>
                      </div>
                  </div>

                <div className=' text-center lg:text-left my-12 lg:my-0'>
                    <div
                      onMouseEnter={(e) => setHover1(true)}
                      onMouseLeave={(e) => setHover1(false)}
                    >
                      {hover1 ?
                        <video className='h-[200px] w-[200px]' controls autoPlay muted>
                          <source src="../videos/coffeeandlaptop.mp4" type="video/mp4"/>
                        </video>          
                        :
                        <Image
                        src='/academykids2.jpg'    
                        alt="logo" 
                        width={300}
                        height={200}
                        />
                      }
                    </div>
                    <div>
                        <h3 className='font-bold text-xl mb-4'>On-Site | Online Group Sessions</h3>
                        <div className="flex  text-gray-400 text-sm mb-4 ml-8 lg:ml-0">
                          <div className="flex items-center mr-1 "><FaRegCalendarAlt/> <span className='mx-4'>{`${new Date().getFullYear()}`}</span> 8:15am  /  </div>
                          <div className="flex items-center "> <BsUnlock /> <span className='ml-2 text-orange-500'>Free</span>  </div>
                        </div>
                        <div>
                          <p className=' lg:w-72'>
                            Group activities including Hackathons, collaborations with other 
                            coders in the same skill level and sharing your codes with readable
                            doccumentation of ...<span className='cursor-pointer'>more</span>
                            <span className='hidden'>
                             what each line of code does to improve thought process
                              theres are multiple ways to develop solution for any coding challenges ,
                              with collboration and knowledge sharing, coders improve their thinking
                              process by 10%.
                            </span>

                          </p>
                        </div>
                      </div>
                </div>
                <div className=' text-center lg:text-left'>
                    <div
                      onMouseEnter={(e) => setHover2(true)}
                      onMouseLeave={(e) => setHover2(false)}
                    >
                      {hover2 ?
                        <video className='h-[200px] w-[200px]' controls autoPlay muted>
                          <source src="../videos/coffeeandlaptop.mp4" type="video/mp4"/>
                        </video>          
                        :
                        <Image
                        src='/academykids.jpg'    
                        alt="logo" 
                        width={300}
                        height={200}
                        />
                      }
                    </div>
                    <div>
                        <h3 className='font-bold text-xl mb-4'>Coding on IDE</h3>
                        <div className="flex  text-gray-400 text-sm mb-4 ml-8 lg:ml-0">
                          <div className="flex items-center mr-1 "><FaRegCalendarAlt/> <span className='mx-4'>{`${new Date().getFullYear()}`}</span> 8:15am  /  </div>
                          <div className="flex items-center "> <BsUnlock /> <span className='ml-2 text-orange-500'>Free</span>  </div>
                        </div>
                        <div>
                          <p className=' lg:w-72'>
                            Developing codes on integrated development environment i.e <span>IDE</span> is the 
                            next step for both web development or software programming
                            ... <span className='cursor-pointer'>more</span>
                            <span className='hidden'>
                              You will learn how to 
                              choose the right IDE and the keyboards shortcuts to make typing your syntax/code 
                              smoother, easier and readable 
                            </span>
                          </p>
                        </div>
                      </div>
                </div>

                </div>
              </div>
            </div>
            {/* video tutorials */}


               <CarouselComponent />

                         {/* explore more with coding */}
            <div className='relative '>
                <div><h2 className='text-xl text-gray-400 mb-6'>Explore more in coding and tech</h2></div>
                <div className="flex  w-full overflow-x-auto no-scrollbar p-2 bg-gray-100 rounded mx-2 " title='click then use keyboard arrows to scroll'>

                <div className='text-center  flex flex-col'>
                  <Image
                      src='/hometutornew.jpg'    
                      alt="logo" 
                      width={300}
                      height={200}
                      />
                      <div className='bg-yellow-400'>
                        <h1>Web Design</h1>
                        <h2 className='font-semibold text-4xl'>Websites</h2>
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
                <div className='text-center  mx-4 flex flex-col'>
                  <Image
                      src='/hometutornew.jpg'    
                      alt="logo" 
                      width={300}
                      height={200}
                      />
                      <div className='bg-yellow-400'>
                        <h1>Web Design</h1>
                        <h2 className='font-semibold text-4xl'>Websites</h2>
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
                <div className='text-center   flex flex-col'>
                  <Image
                      src='/hometutornew.jpg'    
                      alt="logo" 
                      width={300}
                      height={200}
                      />
                      <div className='bg-yellow-400'>
                        <h1>Web Design</h1>
                        <h2 className='font-semibold text-4xl'>Websites</h2>
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
                <div className='text-center mx-4 flex flex-col'>
                  <Image
                      src='/hometutornew.jpg'    
                      alt="logo" 
                      width={300}
                      height={200}
                      />
                      <div className='bg-yellow-400'>
                        <h1>Web Design</h1>
                        <h2 className='font-semibold text-4xl'>Websites</h2>
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
                <div className='text-center  flex flex-col'>
                  <Image
                      src='/hometutornew.jpg'    
                      alt="logo" 
                      width={300}
                      height={200}
                      />
                      <div className='bg-yellow-400'>
                        <h1>Web Design</h1>
                        <h2 className='font-semibold text-4xl'>Websites</h2>
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
                <div className='text-center mx-4 flex flex-col'>
                  <Image
                      src='/hometutornew.jpg'    
                      alt="logo" 
                      width={300}
                      height={200}
                      />
                      <div className='bg-yellow-400'>
                        <h1>Web Design</h1>
                        <h2 className='font-semibold text-4xl'>Websites</h2>
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
                <div className='text-center  flex flex-col'>
                  <Image
                      src='/hometutornew.jpg'    
                      alt="logo" 
                      width={300}
                      height={200}
                      />
                      <div className='bg-yellow-400'>
                        <h1>Web Design</h1>
                        <h2 className='font-semibold text-4xl'>Websites</h2>
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
                  <div className='absolute top-16 right-1 z-10'><span title='click then use keyboard arrows to scroll' className='font-bold text-base  bg-gray-600 text-white  border-2 border-black rounded-full'> &#62;</span></div>
                </div>
            </div>
            {/* explore more with coding */}



          </div>




        </div>

   </div>
  )
}

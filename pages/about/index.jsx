import Image from 'next/image'

function About() {
  return (
    <div>
      <div className=' h-52 justify-center '>
          <div  className='relative w-full h-full border border-gray-200 rounded-md overflow-hidden bg-black' >
            <Image
              src='/about.jpg'    
              alt="logo" 
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
              className='bg-blend-overlay bg-black opacity-60'
              />
            <h2 className='absolute top-20 left-0 right-0 text-center text-white font-bold lg:text-2xl '>About Softwaredev Bytes Academy</h2>
          </div>
      </div>
      <div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iure perferendis
             non adipisci porro vitae, repudiandae fugit in labore debitis vel eveniet provident 
             molestiae rerum ducimus illo tenetur natus sit!
          </p>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iure perferendis
             non adipisci porro vitae, repudiandae fugit in labore debitis vel eveniet provident 
             molestiae rerum ducimus illo tenetur natus sit!
          </p>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iure perferendis
             non adipisci porro vitae, repudiandae fugit in labore debitis vel eveniet provident 
             molestiae rerum ducimus illo tenetur natus sit!
          </p>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iure perferendis
             non adipisci porro vitae, repudiandae fugit in labore debitis vel eveniet provident 
             molestiae rerum ducimus illo tenetur natus sit!
          </p>
        </div>
      </div>


    </div>
  )
}

export default About
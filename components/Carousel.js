import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function CarouselComponent() {
  return (
    <Carousel>
        <div>
        <Image
            src='/logo.png'    
            alt="logo" 
            width={300}
            height={300}
            />
            <p className="legend">Legend 1</p>
        </div>
        <div>
        <Image
            src='/logo.png'    
            alt="logo" 
            width={100}
            height={300}
            />
            <p className="legend">Legend 2</p>
        </div>
        <div>
        <Image
            src='/logo.png'    
            alt="logo" 
            width={100}
            height={300}
            />
            <p className="legend">Legend 3</p>
        </div>
    </Carousel>

  )
}

export default CarouselComponent
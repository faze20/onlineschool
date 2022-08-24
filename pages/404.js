import Link from 'next/link'


const PageNotFound = () => {
    return(
        <>
        
            <h2>Page not found</h2>
            <Link href='/'> 
               <a>
               Go back to Home Page
              </a> 
            </Link>
        </>

    )

}
export default PageNotFound
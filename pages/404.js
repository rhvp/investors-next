import Link from "next/link"
import Head from 'next/head';

const NotFound = () => {
    return ( 
        <>
        <Head>
            <title>Not Found</title>
        </Head>
        <div className="not-found">
            <h1>Oops...</h1>
            <h2>That page could not be found</h2>
            <p>Go back to the <Link href="/"><a>Home Page</a></Link></p>
        </div>
        </>
     );
}
 
export default NotFound;
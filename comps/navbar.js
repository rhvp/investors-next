import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
    return ( 
        <div>
            <nav>
                <div className="logo">
                        <Image src="/logo2.png" alt="logo" width={87} height={82}/>
                </div>
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/investors"><a>Investors</a></Link>
            </nav>
        </div>
     );
}
 
export default Navbar;
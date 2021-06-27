import Head from 'next/head';
import styles from '../../styles/Investors.module.css'
import Link from 'next/link';

export const getStaticProps = async() => {
    const res = await fetch('http://localhost:1900/api/v1/customers');
    const data = await res.json();
    // console.log(data)
    return {
        props: {
            investors: data.data
        }
    }
}


const Investors = ({investors}) => {
    return (
        <>
        <Head>
            <title>Investors</title>
        </Head>
        <div>
            <h1>Investors</h1>
            {investors && investors.map(inv => (
                <Link href={'/investors/'+inv._id} key={inv._id}>
                    <a className={styles.single}>
                        <h3>{inv.firstName} {inv.lastName}</h3>
                    </a>
                </Link>
            ))}
        </div>
        </>
     );
}
 
export default Investors;
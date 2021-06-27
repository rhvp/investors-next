import Head from 'next/head';
import Image from 'next/image';

export const getStaticPaths = async() => {
    const res = await fetch('http://localhost:1900/api/v1/customers')
    const data = await res.json();

    return {
        paths: data.data.map(investor => {
            return {
                params: {id: investor._id.toString()}
            }
        }),
        fallback: false
    }
}

export const getStaticProps = async(context) => {
    const id = context.params.id;
    const res = await fetch('http://localhost:1900/api/v1/customers/fetch?id='+id);
    const data = await res.json();
    return {
        props: {investor: data.data}
    }
}

const Details = ({investor}) => {
    const myLoader=({src})=>{
        return `${investor.image}`;
      }
    return ( 
        <>
        <Head>
            <title>Details</title>
        </Head>
        <div>
            <Image loader={myLoader} src={investor.image} alt="avatar" height="100px" width="100px"></Image>
            <h1>{investor.firstName} {investor.lastName}</h1>
            <p>{investor.phone}</p>
            <p>{investor.email}</p>
            <p>{investor.type}</p>
            <p>{investor.address1}</p>
        </div>
        </>
     );
}
 
export default Details;
import Heading from "../../component/Heading";
import Image from 'next/image'
import Row from "../../component/Row"
import Col from "../../component/Col"
import Link from 'next/link'
import Paragraph from '../../component/Paragraph'
import Layout from "../../component/Layout";
import {getAllArtistSlugs,getSingleArtistData} from "../../lib/api"



//waterfall
// 1 . get a list of paths to prerender 
export async function getStaticPaths() {
    const paths = await getAllArtistSlugs();

    return {
        paths,
        fallback: false
    }
}
// 2. get the data the belongs to the single song

export async function getStaticProps({params}){
    const artistData = await getSingleArtistData(params.id);
    
    return {
        props: {
            artistData
        }
    }
}

const SingleArtistPage =( {artistData} )=>{
    const { title,featuredImage ,artistInformation} =artistData;
    const {sourceUrl, altText, mediaDetails } = featuredImage.node;
    const {artistsToAlbums} = artistInformation
    return <Layout>
        <Image 
        src = {sourceUrl}
        alt = {altText}
        height = {mediaDetails.height}
        width = {mediaDetails.width}
            />
        <Heading level="1"> {title}</Heading>
        {artistsToAlbums && 
        <section>
            <Heading level="2">
                alumb
            </Heading>
            <Row>
            {artistsToAlbums.map((album)=>{
                const {title ,slug,featuredImage} = album
                const {sourceUrl, altText, mediaDetails } = featuredImage.node;
                    return <Col xs="6" sm="4" md="3">  
                    <Link href={'/albums'}>
                    <a>
                        <Image 
                        
                            src = {sourceUrl}
                            alt = {altText}
                            height = {mediaDetails.height}
                            width = {mediaDetails.width}
                                
                        />  
                    </a>
                    </Link>
                    <Heading level="3">
                        {title}
                    </Heading>
                    </Col>
            })}
            </Row>
        </section>
}
 <Paragraph >
     <Link href={`/artists`}>
     <a>
         back to artists
     </a>
     </Link>
 </Paragraph>
    </Layout>
}
export default SingleArtistPage ;



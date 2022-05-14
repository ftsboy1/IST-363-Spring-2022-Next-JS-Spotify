import Heading from "../../component/Heading";
import Image from 'next/image'
import Row from "../../component/Row"
import Col from "../../component/Col"
import Link from 'next/link'
import Paragraph from '../../component/Paragraph'
import Layout from "../../component/Layout";
import {getAllArtistSlugs,getSingleArtistData} from "../../lib/api"
import Container from "../../component/Container";
import Section from "../../component/Section";



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
    const { title,content,featuredImage ,artistInformation} =artistData;
    const {sourceUrl, altText, mediaDetails } = featuredImage.node;
    const {artistsToAlbums} = artistInformation
    return <Layout>
        <Container>
            <Row>
                <Col xs="12" md="3" >
                <Image 
                    src = {sourceUrl}
                    alt = {altText}
                    height = {mediaDetails.height}
                    width = {mediaDetails.width}
                />
                </Col>
                <Col xs="12" md="9">
                    <Heading level="1"> {title}</Heading>
                    <Paragraph intro>
                        {content}
                    </Paragraph>
                </Col>
            </Row>
        {artistsToAlbums && 
        <Section>
            <Heading level="2">
                Alumb
            </Heading>
            <Row>
            {artistsToAlbums.map((album,index)=>{
                const {title ,slug,featuredImage} = album
                const {sourceUrl, altText, mediaDetails } = featuredImage.node;
                    return <Col key={index} xs="6" sm="4" md="3">  
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
        </Section>
}
 <Paragraph >
     <Link href={`/artists`}>
     <a>
         Back to artists
     </a>
     </Link>
 </Paragraph>
 </Container>
    </Layout>
    
}
export default SingleArtistPage ;



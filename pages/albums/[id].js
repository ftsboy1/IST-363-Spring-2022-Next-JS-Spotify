import Layout from '../../component/Layout';
import Heading from '../../component/Heading';
import Image from "next/image"
import { getAllAlbumSlugs,getSingleAlbumData } from '../../lib/api'
import Row from '../../component/Row';
import Link from 'next/link'
import Col from "../../component/Col"
import Container from '../../component/Container';
import Section from '../../component/Section';
import Tracks from "../../component/Tracks"

//waterfall
// get a list of paths to prerender 
export async function getStaticPaths() {
    const paths = await getAllAlbumSlugs();

    return {
        paths,
        fallback: false
    }
}
// 2. get the data the belongs to the single song

export async function getStaticProps({params}){
    const albumData = await getSingleAlbumData(params.id);
    
    return {
        props: {
            albumData
        }
    }
}




const SingleAlumbPage = ({albumData})=>{
    const {title ,featuredImage,albumInformation} = albumData
    const {sourceUrl, altText, mediaDetails } = featuredImage.node;
    const {year ,songsToAlbums,artistsToAlbums} = albumInformation
    
    return <Layout>
        <Container>
            <Row>
                <Col xs="12" md = "3" justifyContent='center'>
                <Image      
                  src = {sourceUrl}
                        alt = {altText}
                        height = {mediaDetails.height}
                        width = {mediaDetails.width}
                            
                    /> 
                </Col>
                <Col xs="12" md = "3">
                    <Heading level="1">{title}</Heading>
                    <Heading level="1">{year}</Heading>
                </Col>
                 
            </Row>
              
      
        {artistsToAlbums && artistsToAlbums.map((artist, index)=>{
            const {title,slug} = artist;
            return <Heading level="2">
               <Link href={`/artists/${slug}`}>
               <a>
               {title}
               </a>
               </Link> 
            </Heading>
        })}
        {songsToAlbums &&
        <Section>
            <Heading level="2"> Songs</Heading>
            <Tracks items={songsToAlbums} />
        </Section>
    }
    </Container>
    </Layout>
}
export default SingleAlumbPage ; 
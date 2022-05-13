import Layout from '../../component/Layout'
import Row from "../../component/Row"
import Heading from "../../component/Heading"
import Link from 'next/link'
import Paragraph from "../../component/Paragraph"
import Col from "../../component/Col"
import {getAlbums} from "../../lib/api"
import Image from "next/image"
import Container from '../../component/Container'

export async function getStaticProps(){
    const albums = await getAlbums();
    return {
        props:{
            albums
        }
    }
}

const AlbumsLandingPage = ({albums})=> {
    return <Layout>
        <Container>
        <Heading level = "1"> Albums</Heading>
            <Row>
       
        {albums.map((albums,index)=>{
            const {featuredImage, title, slug} = albums.node;
            const {sourceUrl, altText, mediaDetails } = featuredImage.node;
            return <Col key={index} xs="6" sm="4">
               <Image 
                        
                        src = {sourceUrl}
                        alt = {altText}
                        height = {mediaDetails.height}
                        width = {mediaDetails.width}
                            
                    />  

              
            <Heading level="3">
                {title}
            </Heading>
            <Paragraph>
                        <Link href={`/albums/${slug}`}>
                        <a>
                            Read more
                        </a>
                        </Link>
                    </Paragraph>
            </Col>
        })}
        </Row>
        </Container>
    </Layout>

    
}
export default AlbumsLandingPage;
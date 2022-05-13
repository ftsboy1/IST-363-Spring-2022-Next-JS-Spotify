import Layout from '../../component/layout'
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

const AlbumsPage = ({albums})=> {
    return <Layout>
        <Container>
        <Heading level = "1"> Alumbs</Heading>
            <Row>
       
        {albums.map((album,index)=>{
            const {featuredImage, title, slug} = album;
            const {SourceUrl, altText, mediaDetails } = featuredImage.node;
            return <Col key={index} xs="6" sm="4">
                <Image
                src={SourceUrl}
                alt={altText}
                width={mediaDetails.width}
                height={mediaDetails.height}
                />

              
            <Heading level="3">
                {title}
            </Heading>
            <Paragraph>
                        <Link href={`/alumbs/${slug}`}>
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
export default AlbumsPage;
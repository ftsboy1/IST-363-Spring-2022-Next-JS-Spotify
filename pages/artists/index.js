
import Layout from "../../component/Layout"
import Heading from "../../component/Heading"
import Row from "../../component/Row"
import Col from "../../component/Col"
import Container from "../../component/Container"
import Link from 'next/link'
import Paragraph from "../../component/Paragraph"
import Image from "next/image"
import {getArtists} from "../../lib/api"



export async function getStaticProps() {
    const artists = await getArtists();
    return {
        props:{
            artists
        }
    }
}



const ArtistslandingPage = ({artists})=>{
    return <Layout>
        <Container>
        <Heading level="1">artists</Heading>
        <Row>
        {artists.map((artists,index)=>{
            const {title, slug,featuredImage} = artists.node;
            const {sourceUrl, altText, mediaDetails} = featuredImage.node;
                return <Col key={index} xs="6" sm="4" marginBottom="2">
                    <Image
                    src={sourceUrl}
                    alt={altText}
                    width={mediaDetails.width}
                    height={mediaDetails.height}
                    />
                    <Heading level="3">
                        {title}
                    </Heading>
                    <Paragraph>
                        <Link href={`/artists/${slug}`}>
                        <a>
                            Read more
                        </a>
                        </Link>
                    </Paragraph>
                </Col>
            })
        }
        </Row>
        </Container>
        </Layout>
}
export default  ArtistslandingPage;

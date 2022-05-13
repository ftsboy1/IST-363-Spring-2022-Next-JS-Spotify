const { default: Layout } = require("../../component/Layout")
import Heading from '../../component/Heading';
import Image from "next/image"
import {getAllAlbumSlugs,getSingleAlbumData } from '../../lib/api'
import Row from '../../component/Row';
import Link from 'next/link'
import Col from "../../component/Col"

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
        <Image 
                        
                  src = {sourceUrl}
                        alt = {altText}
                        height = {mediaDetails.height}
                        width = {mediaDetails.width}
                            
                    />  
        <Heading level="1">{title}</Heading>
        <Heading level="1">{year}</Heading>
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
        <section>
            <Heading level="2"> Songs</Heading>
            <Row>
            { songsToAlbums.map((song, index)=>{ 
                const {title} = song;
                return <Col key={index} xs="12" sm="12">
                    <Heading level="3">{title}</Heading>
                </Col>
            })}
            </Row>
        </section>
    }
    </Layout>
}
export default SingleAlumbPage ; 
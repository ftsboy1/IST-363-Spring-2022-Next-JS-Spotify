import Layout from "../../component/layout" 
import {getAllTrackPaths, getSingleTrackData} from '../../lib/api'

import Link from "next/link"
import Heading from '../../component/heading';
import Col from "../../component/Col";
import Container from "../../component/Container";
import Row from "../../component/Row";



//waterfall
// get a list of paths to prerender 
export async function getStaticPaths() {
    const paths = getAllTrackPaths();

    return {
        paths,
        fallback: false
    }
}
// 2. get the data the belongs to the single song

export async function getStaticProps({params}){
    const singleTrackData = getSingleTrackData(params.id);
    
    return {
        props: {
            singleTrackData
        }
    }
}



const SingleTrackTemplate = ({ singleTrackData }) => {
  
    const {matchingTrack} = singleTrackData;
    const {title, artist} = matchingTrack;
    return  <Layout>
        <Container>
            <Row>
                <Col>
                    <Heading level="3">
                        <Link href="/tracks">
                        <a>
                            Back to all songs
                        </a>
                        </Link>
                    </Heading>
                    <Heading level='1'>{title}</Heading>
                    <Heading level='2'>{artist}</Heading>
                </Col>
            </Row>
        </Container>
        
        
    </Layout>
}
export default SingleTrackTemplate;
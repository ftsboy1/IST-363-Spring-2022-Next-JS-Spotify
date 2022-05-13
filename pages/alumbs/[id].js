const { default: Layout } = require("../../component/layout")
import Heading from '../../component/Heading';
import {getAllAlumbsSlugs,getSingleAlbumData } from '../../lib/api'

//waterfall
// get a list of paths to prerender 
export async function getStaticPaths() {
    const paths = await getAllAlumbsSlugs();

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
    const {title} = albumData;
    return <Layout>
        <Heading level="1">{title}</Heading>
    </Layout>
}
export default SingleAlumbPage ; 
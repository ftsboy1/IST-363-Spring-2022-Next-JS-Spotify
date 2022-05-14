import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Heading from '../component/Heading'
import Paragraph from '../component/Paragraph'
//customer component 
import Button from '../component/Button'
import TracksByGenre from '../component/TracksByGenre'
import Layout from '../component/Layout'
import Container from '../component/Container'
import Row from '../component/Row'
import Col from '../component/Col'
import { getAlbums } from '../lib/api'
import Showcase from '../component/Showcase'
import NewReleases from '../component/Newrelease'


export async function getStaticProps(){ 
  const albums = await getAlbums()
  return {
    props:{
      albums
    }
  }

}

export default function Home({albums}) {
  return (
    <Layout>
      <Head>
        <title>Spotify IST 363</title>
        <link rel="icon" href="/favicon.ico" />
        <mata name= 'description' content="something cool goes here"></mata>
      </Head>

      
      <Showcase/>
      <NewReleases items={albums}/>


      {/*TracksByGenre items={tracks}/> */}



    </Layout>
  )
}

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



export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Spotify IST 363</title>
        <link rel="icon" href="/favicon.ico" />
        <mata name= 'description' content="something cool goes here"></mata>
      </Head>
      <section>
        <Container>
          <Row>
            <Col sm="6" md="4" lg="3">col 1 </Col>
            <Col sm="6" md="4" lg="3">col 2 </Col>
            <Col sm="6" md="4" lg="3">col 3 </Col>
            <Col sm="6" md="4" lg="3">col 4 </Col>
          </Row>
        </Container>
      </section>

        <TracksByGenre/>



    </Layout>
  )
}

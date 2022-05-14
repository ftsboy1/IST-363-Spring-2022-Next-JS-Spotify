import Col from "./Col";
import Container from "./Container";
import Row from "./Row";
import Section from "./Section";
import Image  from "next/image";
import Heading from "./Heading";
import Button from "./Button";
import Paragraph from "./Paragraph";

const Showcase = () =>{
    return <Section>
             <Container>
                <Row>
                 <Col xs="4" md="3">
                    <Image 
                    src={`/images/led-zeppellin-ii.jpeg`}
                    alt="Led zepellin II"
                    width={300}
                    height={300}
                    />
                </Col>
                <Col xs="8" md="9" flexDirection="column" justifyContent="center">
                    <Heading level="1" marginBottom="0">
                        Listening is everything
                    </Heading>
                    <Paragraph marginBottom="1">
                        Millions of songs and podcasts . No credit card needed
                    </Paragraph>
                    <Button 
                        label="Get Spotify Free" 
                        type="primary"
                        path="/download"/>
                    </Col>
            </Row>
        </Container>
    </Section>
}

export default Showcase;
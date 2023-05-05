import { Container, Row, Col } from "react-bootstrap"
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const About = () => {
    
    const whoWeAre = "Nature Awareness & Conservation Club, Inc is the daughter of Conservation for Tomorrow Foundation, Inc and Miriam PEACE of Environment Studies Institute of Miriam College, the grand daughter of Foundation for Philippine Environment and great grand daughter of Philippine Eagle Foundation, Inc"
    const whatWeDo = "We have different social and environment responsibility programs. But mostly, on massive mangrove and upland tree planting, rehabilitation and reforestation in partnership with local peoples organization of fishing community and farmers with formation on Enhanced National Greening Program (ENGP) of Department of Environment and Natural Resources (DENR). The tree planting can be done ALL YEAR ROUND by the requesting organization, companies, and schools."
    const mission = "To pursue effective environmental programs  geared toward the conservation of the eco-system through  outdoor environmental education and conservation actions."
    const vision = "A society where it’s citizen are aware of the value of its diverse natural heritage & working together for the benefit of the environment and the common future. #SDG"
    
    return (
        <Container className="my-5 mw-50">
            <Row className="my-5"></Row>
            <Row className="my-5">
                <h1 className="text-center">About Nature Awareness & Conservation Club, Inc</h1>
            </Row>
            <Row className="my-5">
                <Col lg={1}></Col>
                <Col lg={5}>
                    <h2 className="text-center">Who we are</h2>
                    <p>{whoWeAre}</p>
                </Col>
                <Col lg={5}>
                    <h2 className="text-center">What we do</h2>
                    <p>{whatWeDo}</p>
                </Col>
                <Col lg={1}></Col>
            </Row>
            <Row className="my-5"></Row>
            <Row className="my-5">
                <h1 className="text-center">Profile as of 2021</h1>
            </Row>
            <Row className="my-5">
                <Col lg={1}></Col>
                <Col lg={5}>
                    <h2 className="text-center">Mission</h2>
                    <p>{mission}</p>
                </Col>
                <Col lg={5}>
                    <h2 className="text-center">Vision</h2>
                    <p>{vision}</p>
                </Col>
                <Col lg={1}></Col>
            </Row>
            <Row className="my-5"></Row>
            <Row>
                <Col lg={2}></Col>
                <Col lg={8}>
                    <h1 className="text-center"> NACCI History</h1>
                    <h2 className="mt-5 text-center">1971</h2>
                    <p>A summer conservation camp was organized by Mr. Jesus Alvarez of Parks & Wildlife in Mt. Apo, Davao through the inspiration of Gen. Charles Lindberg, aviation hero turned environmentalist. Encouraged by it’s success, a 2nd camp was held in Mt. Mayon, Bicol. However, due to budgetary constraints, future camps were discontinued.</p>
                </Col>
                <Col lg={2}></Col>
            </Row>
            <Row className="my-5">
                <h2 className="mb-5 text-center">1992</h2>
                <Col lg={1}></Col>
                <Col lg={4}>
                    <p>Two participants from the 1971 conservation camp, Mr. Manuel & Nelson Petines carried on the mission on their drive for continued ecological preservation by started Conserving for Tomorrow Fnd, Inc. (C.F.T.F.I.) It raised its initial funding from Foundation for Philippine Environment thru the support of Miriam PEACE. Since then the foundation continued its mission by way of participation of teachers, student leaders and young professionals</p>
                </Col>
                <Col lg={6}>
                    <Image className="mw-50" fluid src="https://philecotourism.files.wordpress.com/2021/03/image.png?w=1024" alt="" />
                </Col>
                <Col lg={1}></Col>
            </Row>
            <Row className="my-5">
                <Col lg={2}></Col>
                <Col lg={8}>
                    <h2 className="mb-5 text-center">1998</h2>
                    <p>Nature Awareness & Conservation Club, Inc., was organized for the young professionals to carry the same environmental endeavor.S.E.C. and BIR Registration</p>
                </Col>
                <Col lg={2}></Col>
            </Row>
            <Row className="my-5">
                <Col lg={2}></Col>
                <Col lg={8}>
                    <h2 className="mb-5 text-center">2008 </h2>
                    <Image className="mw-50" fluid src="https://philecotourism.files.wordpress.com/2021/03/image-1.png?w=1024" alt="" />
                    <p>From Eco-Camps and Eco-tours with environment education thru structured learning activities, NACCI evolve to Corporate Social Responsibility (CSR) Programs thru massive mangrove tree planting in Batangas.</p>
                </Col>
                <Col lg={2}></Col>
            </Row>
            <Row className="my-5">
                <Col lg={2}></Col>
                <Col lg={8}>
                    <h2 className="mb-5 text-center">2012</h2>
                    <Image className="mw-50" fluid src="https://philecotourism.files.wordpress.com/2021/03/image-2.png?w=1024" alt="" />
                    <p>We extended the CSR tree planting to Upland in Biak na Bato National Park and Laiban, Tanay Rizal, in partnership with Environment Studies Institute of Miriam College.</p>
                </Col>
                <Col lg={2}></Col>
            </Row>
            <Row className="my-5">
                <Col lg={2}></Col>
                <Col lg={8}>
                    <h2 className="mb-5 text-center">2017</h2>
                    <Image className="mw-50" fluid src="https://philecotourism.files.wordpress.com/2021/03/image-3.png?w=1024" alt="" />
                    <p>We branched out the CSR tree planting to Bataan, Pampanga, Bulacan, Quezon Province, La Union and Pangasinan. We also started leveling up of scientific knowledge thru Zoological Society London and Philippine Wetlands International. We started to partner up with mangrove enthusiast in Visayas and Mindanao. </p>
                </Col>
                <Col lg={2}></Col>
            </Row>
            <Row className="my-5">
                <Col lg={2}></Col>
                <Col lg={8}>
                    <h2 className="mb-5 text-center">2018</h2>
                    <Image className="mw-50" fluid src="https://philecotourism.files.wordpress.com/2021/03/image-4.png?w=1024" alt="" />
                    <p>We included the coastal clean up after the tree planting by picking up the rubbish, cutting the plastics trapped around the mangroves and removing the barnacles. We make sure that all tree plantings, will have coastal clean up and have lunch with the community</p>
                </Col>
                <Col lg={2}></Col>
            </Row>
            <Row className="my-5">
                <Col lg={2}></Col>
                <Col lg={8}>
                    <h2 className="mb-5 text-center">2019</h2>
                    <p>We started promoting the “Adopt an ENGP site” of DENR to different volunteer companies and organization for a minimum of 3 hectares in 5 years.</p>
                </Col>
                <Col lg={2}></Col>
            </Row>
            <Row className="my-5">
                <Col lg={2}></Col>
                <Col lg={8}>
                    <h2 className="mb-5 text-center">2020</h2>
                    <p>Pandemic happened and everything stopped, but the tree planting in the local communities continues. The fishing and farming community stayed healthy because of their natural and well ventilated environment. The abundant of oxygen for the trees around them helps them to stay healthy and an encouraging healing habit to all those who needs healing.</p>
                </Col>
                <Col lg={2}></Col>
            </Row>
            <Row className="my-5">
                <Col lg={2}></Col>
                <Col lg={8}>
                    <h2 className="mb-5 text-center">2021</h2>
                    <p>We started Mangrove tree planting in Lemery, Batangas and Noveleta, Cavite. We might start a mangrove river and firefly tour in Noveleta so the marginalized fishing community will have additional extra income. </p>
                    <Image className="mw-50" fluid src="https://philecotourism.files.wordpress.com/2021/03/image-6.png?w=1024" alt="" />
                </Col>
                <Col lg={2}></Col>
            </Row>
            <Row className="my-5">
                <Col lg={2}></Col>
                <Col lg={8} className="my-5">
                    <p>We are also looking forward river rehabilitation by bamboo planting in the future. And expanding the social responsibility towards safety and sustainability of the marginalized fishing communities and upland farmers. </p>
                    <h3 className="my-5 text-center">FISHING COMMUNITY AND UPLAND FARMERS PARTNERS</h3>
                    <Container className="col d-flex justify-content-center">
                        <Card style={{ width: '18rem' }}>
                            <ListGroup variant="flush">
                                <ListGroup.Item className="text-center">Quezon (coastal)</ListGroup.Item>
                                <ListGroup.Item className="text-center">Batangas (coastal and upland)</ListGroup.Item>
                                <ListGroup.Item className="text-center">Cavite (coastal)</ListGroup.Item>
                                <ListGroup.Item className="text-center">Pampanga (coastal)</ListGroup.Item>
                                <ListGroup.Item className="text-center">Bulacan (coastal and upland)</ListGroup.Item>
                                <ListGroup.Item className="text-center">Bataan (coastal, upland and turtles.</ListGroup.Item>
                                <ListGroup.Item className="text-center">Rizal (upland)</ListGroup.Item>
                                <ListGroup.Item className="text-center">La Union (coastal and Upland)</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Container>
                </Col>
                <Col lg={2}></Col>
            </Row>
            <Row className="my-5">
                <Col>
                    <Container className="my-5 col d-flex justify-content-center">
                        <Card>
                            <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    Our right, the Filipino right to water, to life, to agriculture, is not only constitutional. That’s God-given.
                                </p>
                                <footer className="blockquote-footer"> Gina Lopez</footer>
                            </blockquote>
                            </Card.Body>
                        </Card>
                    </Container>
                </Col>
                <Col>
                    <Container className="my-5 col d-flex justify-content-center">
                        <Card>
                            <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    Creation is prior to us and must be received as a gift. At the same time, we are called to protect our humanity, and this means, in the first place, accepting it and respecting it as it was created.”
                                </p>
                                <footer className="blockquote-footer">
                                    Pope Francis <cite title="Source Title">
                                     on Laudato Si
                                    </cite>
                                </footer>
                            </blockquote>
                            </Card.Body>
                        </Card>
                    </Container>
                </Col>
                <Col>
                    <Container className="my-5 col d-flex justify-content-center">
                        <Card>
                            <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    The climate crisis is the greatest challenge humanity has ever faced. From not only the warming of the earth with higher global temperatures, but also from strengthening storms and expanding droughts to melting ice and rising seas, the costs of carbon pollution are already being felt by governments, corporations, taxpayers and families around the world. The climate crisis will affect everything that we love and alter the course of our future. Now, more than ever, we must come together to solve this global crisis. We must act decisively, rise to the occasion and solve this monumental challenge.
                                </p>
                                <footer className="blockquote-footer">
                                    <a href="https://www.inspiringquotes.us/quotes/35KN_WCK7wElq"> Al Gore</a>
                                </footer>
                            </blockquote>
                            </Card.Body>
                        </Card>
                    </Container>
                </Col>
            </Row>
            <Row className="my-5">
            </Row>
        </Container>
    )
}

export default About;
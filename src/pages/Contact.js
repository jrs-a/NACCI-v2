import { Row, Col } from "react-bootstrap"
import Card from 'react-bootstrap/Card';

const Contact = () => {
    return (
        <container className="contact">
            <Row className='py-4'>
                <Col lg={3}></Col>
                <Col md={false} lg={3}>
                    <Card className="my-4 p-3">
                        <Card.Body>
                            <h2>Get in touch today</h2>
                            <p>You may reach us using the following details:</p>
                            <div class="basic">
                                <div class="info">
                                    <div><span class="material-symbols-outlined">mail</span></div>
                                    <div>mother_nature888@nacci888.org</div>
                                </div>
                                <div class="info">
                                    <div><span class="material-symbols-outlined">call</span></div>
                                    <div>09155101600</div>
                                </div>
                                <div class="info">
                                    <div><span class="material-symbols-outlined">place</span></div>
                                    <div>
                                        Nature Awareness and Conservation NGO <br/>
                                        Brgy Talong 5 <br/>
                                        Moonwalk Village, <br/>
                                        Las Pinas City, Metro Manila 1741 <br/>
                                        Philippines
                                    </div>  
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={false} lg={3}>
                    <Card className="my-4 p-3">
                        <Card.Body>
                            <h2>Social Media Accounts</h2>
                            <p>You may reach us with our social media accounts</p>
                            <div class="socials">
                                <div class="info">
                                    Twitter: <a href="https://twitter.com/LigayaParadise">
                                    LigayaParadise</a>
                                </div>
                                <div class="info">
                                    Facebook: <a href="https://www.facebook.com/ResponsibleNatureAdventuresPhilippines">
                                        Responsible Nature Adventure Philippines</a>
                                </div>    
                                <div class="info">
                                    Linkedin: <a href="https://go.skimresources.com/?id=725X1342&isjs=1&jv=15.4.1-stackpath&sref=https%3A%2F%2Fphilecotourism.wordpress.com%2Fcontact%2F&url=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fvioletaimperial%2F&xs=1&xtz=-480&xuuid=1b0c38ff5a30bcbf0d0dd247f664d6eb&xcust=8982&xjsf=other_click__auxclick%20%5B2%5D">
                                        Violeta Imperial </a>
                                </div>
                                <div class="info">
                                    Instagram: <a href="https://www.instagram.com/mothernature7878/">
                                        Mothernature7878 </a>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>

                </Col>
                <Col lg={3}></Col>
            </Row>
        </container>
    )
}

export default Contact;
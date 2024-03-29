import React, { Component } from 'react';
import {
    Layout, Row, Col, Space
} from 'antd';
import 'antd/dist/antd.css';
import AppHeader from '../includes/AppHeader';
import AppFooter from '../includes/AppFooter';
import '../global.css';
import sixthOne from '../images/61.png';
import sixthTwo from '../images/62.png';
import sixthThree from '../images/63.png';
import vector from '../images/Vector.png';

const { Content } = Layout;




class Landing extends Component {



    state = {
        changeClass :false
    }



    listenScrollEvent = e => {
        if (window.scrollY > 100) {
            // console.log('first')

            var h1 = document.querySelector('changeColor');

            // Get it's position in the viewport
            var bounding = h1.getBoundingClientRect();

            // Log the results
            console.log(bounding.top);

            if(bounding.top <= 0 ){
                console.log('okook')
                this.setState({ changeClass: true })
            } else {
                this.setState({ changeClass: false })
            }

            if (
                bounding.top >= 0 &&
                bounding.left >= 0 &&
                bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
                bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            ) {
                console.log('In the viewport!');
            } else {
                console.log('Not in the viewport... whomp whomp');
            }

        } else {
            // console.log('teo')
        }
    }


    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
        // this.isInViewport()
    }



    render() {
                
        return (
            <Layout className="bg">


                <AppHeader />

                {/* ************************
                    First Row
                *************************** */}
                <Content className="">

                    <Row className="banner_section" >

                        <Col xs={0} sm={12} lg={11}></Col>
                        <Col xs={{ span: 23, offset: 1 }} sm={{ span: 9, offset: 0 }} lg={{ span: 9, offset: 0 }} >

                            <p className="">
                                Diseñamos soluciones exclusivas para ti, trabajando todos los campos del producto para desarrollar todo su potencial.
                            </p>
                        </Col>

                    </Row>
                </Content>


                {/* ************************
                    Second and third Row
                *************************** */}
                <Content className="second_third_row" style={{ 'paddingLeft': '36px' }}>
                    <Row>
                        <Col span={24}>
                            <p className="second_row text-center">Quién es esta gente</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24} className="third_row">
                            <p >Poner foto de nosotros</p>
                        </Col>
                    </Row>

                </Content>


                {/* ************************
                    Fourth Row
                *************************** */}
                <changeColor></changeColor>
                <Content
                    // ref={this.myRef} 
                    // ref={(el) => this.yourElement = el}
                    // ref={inputRef}

                    className={ this.state.changeClass ? 'fourth_row change_color' : 'fourth_row ' }   style={{ 'paddingLeft': '36px' }}>

                    <h3 className="fourth_title">Qué hacen</h3>

                    <Row>
                        <Col xs={24} sm={{ span: 10, offset: 0 }} lg={{ span: 10, offset: 0 }}>
                            <h4 className="fourth_left">Publicidad, marketing y comunicación se unen a la experiencia de usuario y desarrollo web</h4>
                        </Col>

                        <Col xs={24} sm={{ span: 11, offset: 1 }} lg={{ span: 10, offset: 1 }}>
                            <Row>
                                <Col xs={{ span: 24, offset: 0 }} sm={{ span: 22, offset: 2 }}>
                                    <p className="strategy_heading">Strategy</p>
                                </Col>
                                <Col xs={{ span: 20, offset: 4 }} sm={{ span: 19, offset: 5 }}>
                                    <p className="strategy_text">Como diría Jack el destripador vamos por partes”. Nos centramos en hacer un buen research para iniciar la estrategia.</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={{ span: 24, offset: 0 }} sm={{ span: 22, offset: 2 }}>
                                    <p className="strategy_heading">Strategy</p>
                                </Col>
                                <Col xs={{ span: 20, offset: 4 }} sm={{ span: 19, offset: 5 }}>
                                    <p className="strategy_text">“Recordarán tu marca como las lentejas de la abuela”. Diseñamos lo que necesites; branding, web, ecommerce o app, siempre desde la experiencia del usuario.</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={{ span: 24, offset: 0 }} sm={{ span: 22, offset: 2 }}>
                                    <p className="strategy_heading">Strategy</p>
                                </Col>
                                <Col xs={{ span: 20, offset: 4 }} sm={{ span: 19, offset: 5 }}>
                                    <p className="strategy_text">#betrendmyfriend Estrategias de social media, comunicación, producción y social paid</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Content>


                {/* ************************
                    Fifth Row
                *************************** */}
                <Content className="fifth_row">
                    <h3 className="fifth_title text-center">Sus proyectos</h3>

                    <Row>
                        <Col xs={24} className="fifth_one fifth_images">
                            <h3>Cris4life woman center</h3>
                            <h2>#wmnpwr</h2>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={24} className="fifth_two fifth_images">
                            <h3>Yellow Bike</h3>
                            <h2>#bikesharing</h2>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={24} className="fifth_three fifth_images">
                            <h3>Bebenube</h3>
                            <h2>#boxbaby</h2>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={24} className="fifth_four fifth_images">
                            <h3>IKPC</h3>
                            <h2>#consulting</h2>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={24} className="fifth_five fifth_images">
                            <h3>Vilagos Rural</h3>
                            <h2>#vualtaalosorígenes</h2>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={24} className="fifth_six fifth_images">
                            <h3>Carnivore</h3>
                            <h2>#premiumeat</h2>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={24} className="fifth_seven fifth_images">
                            <h3>Colchones Blazquez</h3>
                            <h2>#descansa</h2>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={24} className="fifth_seven fifth_images">
                            <h3>iOScoot</h3>
                            <h2>#motosharing</h2>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={24} className="fifth_eight fifth_images">
                            <h3>Cris4life woman center</h3>
                            <h2>#wmnpwr</h2>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={24} className="fifth_nine fifth_images">
                            <h3>Kanguru Jewels</h3>
                            <h2>#jewelry</h2>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={24} className="fifth_ten fifth_images">
                            <h3>SoloPerformance</h3>
                            <h2>#entrenacomolosmejores</h2>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={24} className="fifth_eleven fifth_images">
                            <h3>Wanderlust Restaurantes</h3>
                            <h2>#pasiónporlacerveza</h2>
                        </Col>
                    </Row>



                </Content>


                <Content className="sixth_row">
                    <h3 className="sixth_title">Gente del equipo</h3>

                    <Row gutter={[48, 0]}>
                        {/* <Space> */}
                        <Col xs={24} sm={{ span: 6, offset: 3 }} className="">
                            <img src={sixthOne} />

                            <h3>Mariela Magaña</h3>
                            <Row>
                                <Col xs={22}>
                                    <h4>Head of brand</h4>
                                </Col>
                                <Col xs={2} className="mt-0">
                                    <img src={vector} />
                                </Col>
                            </Row>

                        </Col>

                        <Col xs={24} sm={{ span: 6, offset: 0 }} className="mt-m-40">
                            <img src={sixthTwo} />

                            <h3>Adrián Colinas</h3>
                            <Row>
                                <Col xs={22}>
                                    <h4> Product manager</h4>
                                </Col>
                                <Col xs={2} className="mt-0">
                                    <img src={vector} />
                                </Col>
                            </Row>

                        </Col>

                        <Col xs={24} sm={{ span: 6, offset: 0 }} className="mt-m-40">
                            <img src={sixthThree} />

                            <h3>Luis</h3>
                            <Row>
                                <Col xs={22}>
                                    <h4>Full stack developer</h4>
                                </Col>
                                <Col xs={2} className="mt-0">
                                    <img src={vector} />
                                </Col>
                            </Row>

                        </Col>

                        {/* </Space> */}
                    </Row>
                </Content>


                <AppFooter />

            </Layout>
        );


    }
}

export default Landing;
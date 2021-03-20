import React, { Component } from 'react';
import {
    Layout, Row, Col, Space
} from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import AppHeader from '../includes/AppHeader';
import LandingFirst from './LandingFirst';
import AppFooter from '../includes/AppFooter';
import '../global.css';
import sixthOne from '../images/61.png';
import sixthTwo from '../images/62.png';
import sixthThree from '../images/63.png';
import vector from '../images/Vector.svg';
// import cartoon from '../images/cartoon-landing.svg';
import cartoon from '../images/cartoon-land.svg';
const { Content } = Layout;

class Landing extends Component {
    state = {
        changeClass: false,
        susproyectos: false,
        showFirstLanding:true,
        cookiesPopup:sessionStorage.getItem("isCookies")
    }
    listenScrollEvent = e => {
        if (window.scrollY > 100) {
            // console.log('first')

            var h1 = document.querySelector('changeColor');

            // Get it's position in the viewport
            var bounding = h1.getBoundingClientRect();

            // Log the results
            
            if (bounding.top > -630 && bounding.top <= 280 ) {
                // console.log(bounding.top);
                // console.log('okook')
                this.setState({ changeClass: true })
            } else {
                this.setState({ changeClass: false })
            }


        } else {
            // console.log('teo')
        }

        if (window.scrollY > 150) {

            var aa = document.querySelector('susproyectos');
            var pos = aa.getBoundingClientRect();

            // console.log(pos.top);

            if (pos.top < 280) {
                
                if(this.state.changeClass){
                    this.setState({ 
                        changeClass: false, 
                        // susproyectos: true 
                    })
                }
                
            } else {
                // this.setState({  changeClass: true })
            }

        }
    }
    changePage =()=> {
        this.setState({ 
            showFirstLanding: false, 
        })
    }


    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
        // this.isInViewport()
        setTimeout( () => {
            this.setState({
                showFirstLanding:false
              });
        }, 20000);

        if(sessionStorage.getItem("isCookies") === null){
            this.setState({
                cookiesPopup:"show"
            })
        }
    }
    
    hideCookies =() => {
        console.log("Hide Cookies");
        sessionStorage.setItem("isCookies","hide")
        this.setState({
            cookiesPopup:"hide"
        })
    }



    render() {
        // console.log(this.state.cookiesPopup)
        let cookiesPopupView = null;
        if(this.state.cookiesPopup===null || this.state.cookiesPopup==="show"){
            cookiesPopupView = (<Content className="">
            <Row>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 24 }} className="bg-black">
                <Row>
                    <Col xs={{ span: 8 }} sm={{ span: 10 }} lg={{ span: 9 }}>
                        <img className="landing-cartoon landing-cartoon-desk" src={cartoon} alt="cartoon Cookies" />
                        <img className="landing-cartoon landing-cartoon-mob" src={cartoon} alt="cartoon Cookies" />
                    </Col>
                    <Col xs={{ span: 16 }} sm={{ span: 14 }} lg={{ span: 15 }} className="popup-column-padding">
                        <p className="cookies-popup-p">¿Aceptas nuestras cookies?</p>
                        <Row>
                            <Col xs={{ span: 12 }} sm={{ span: 6 }} lg={{ span: 12 }} className="text-center">
                                <a className="cookies-btn" onClick={this.hideCookies}>Si, acepto</a>
                            </Col>
                            <Col xs={{ span: 9 }} sm={{ span: 4 }} lg={{ span: 12 }} className="" style={{textAlign:"left !important"}}>
                                <Link className="cookies-btn" to="/cookies"> Saber más</Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                    <p className="cookies-popup">
                    
                    </p>
                </Col>

            </Row>
        </Content> );
        
        }
        return (
            <Layout className="bg">
            {/* {this.state.cookiesPopup ?
            
         : ""} */}
         
                <AppHeader />
                {this.state.showFirstLanding? 
                
                // <LandingFirst/>
                <div onClick={this.changePage}>
                     <Layout className="bg first-page">
                        {/* <AppHeader /> */}
                        <Content className="">
                                {/* <br />
                                <br />
                                <br /> */}

                                <Row>
                                    <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 24 }} >
                                        <p className="first-landing-p">
                                        Porque somos muy de enrollarnos a hablar mientras nos tomamamos un café (normalmente en un Starbucks aunque también somos mucho de un sitio que está cerquita que se llama Amasa que por cierto el que no lo conozca hacen un café buenisimo y las tostadas con aguacate están bastante bien la verdad pero el café es top incluso a veces nos lo cogemos para hacerlo en casa aunque nunca es igual hacerlo en casa que que te lo hagan) porque nos encanta lo que hacemos y hablar de ello... Bienvenidos a Bla.
                                        </p>
                                    </Col>

                                </Row>
                            </Content>
                        {/* <AppFooter /> */}
                    </Layout>
                </div>
                :
                <div>

                
                {/* ************************
                    First Row
                *************************** */}
                <Content className="">
                {cookiesPopupView}
                    <br />
                    <br />
                    <br />
                    <br />
                    <Row className="banner_section" >

                        <Col xs={0} sm={0} lg={13}></Col>
                        <Col xs={{ span: 22, offset: 1 }} sm={{ span: 23, offset: 1 }} lg={{ span: 10, offset: 0 }} >

                            <p className="">
                                Diseñamos soluciones exclusivas para ti, apostando por la calidad y la personalización en cada proyecto, trabajando tu idea en el entorno digital de principio a fin para desarrollar todo su potencial.
                            </p>
                        </Col>

                    </Row>
                </Content>


                {/* ************************
                    Second and third Row
                *************************** */}
                <Content className={this.state.changeClass ? 'second_third_row bg_dark' : ' second_third_row '} style={{ 'paddingLeft': '36px' }}>
                    <Row>
                        <Col span={24}>
                            <p className="second_row text-left">Quién es esta gente</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24} className="third_row">
                            <p className="responsite-paragraph">Poner foto de nosotros</p>
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

                    className={this.state.changeClass ? 'fourth_row bg_dark' : ' fourth_row '} style={{ 'paddingLeft': '36px' }}>

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
                                    <p className="strategy_text">Como diría Jack el destripador “vamos por partes”. Nos centramos en hacer un buen research para iniciar la estrategia.</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={{ span: 24, offset: 0 }} sm={{ span: 22, offset: 2 }}>
                                    <p className="strategy_heading">Identity</p>
                                </Col>
                                <Col xs={{ span: 20, offset: 4 }} sm={{ span: 19, offset: 5 }}>
                                    <p className="strategy_text">“Recordarán tu marca como las lentejas de la abuela”. Diseñamos lo que necesites; branding, web, ecommerce o app, siempre desde la experiencia del usuario.</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={{ span: 24, offset: 0 }} sm={{ span: 22, offset: 2 }}>
                                    <p className="strategy_heading">Flow</p>
                                </Col>
                                <Col xs={{ span: 20, offset: 4 }} sm={{ span: 19, offset: 5 }}>
                                    <p className="strategy_text">#betrendmyfriend Estrategias de social media, comunicación, producción y Final point</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Content>


                {/* ************************
                    Fifth Row
                *************************** */}
                <susproyectos></susproyectos>
                <Content className={this.state.changeClass ? 'fifth_row bg_dark' : ' fifth_row '} >
                    <h3 className="fifth_title text-left">Sus proyectos</h3>

                    <Row>
                        <Col xs={24} className="fifth_one fifth_images">
                            <h3>Cris4life Woman Center</h3>
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
                        <Col xs={24} className="fifth_seven1 fifth_images">
                            <h3>IOScoot</h3>
                            <h2>#motosharing</h2>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={24} className="fifth_eight fifth_images">
                            <h3>Kanguru Jewels</h3>
                            <h2>#jewelry</h2>
                        </Col>
                    </Row>

                    {/* <Row>
                        <Col xs={24} className="fifth_nine fifth_images">
                            <h3>Kanguru Jewels</h3>
                            <h2>#jewelry</h2>
                        </Col>
                    </Row> */}

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
                    <h3 className="sixth_title" style={{ fontWeight:"800" }}>Gente del equipo</h3>

                    <Row gutter={[48, 0]} style={{ marginLeft:"0px",marginRight:"0px" }}>
                        {/* <Space> */}
                        <Col xs={24} sm={{ span: 6, offset: 3 }} className="responsive-block">
                            {/* <img src={sixthOne} /> */}
                            <Row type="flex" align="middle">
                                <Col xs={24}>
                                    <div className="yellow_bg" >
                                    Foto <br /> Mariela
                                    </div>
                                </Col>
                            </Row>

                            <h3>Mariela Magaña</h3>
                            <Row>
                                <Col xs={21}>
                                    <h4>Head of brand</h4>
                                </Col>
                                <Col xs={3} className="mt-0 text-right">
                                    <a href="https://www.linkedin.com/in/mariela-maga%C3%B1a-martinez-a7977048/" target="_blank"><img className="linkedInImg" src={vector} width="28" height="28" /></a>
                                </Col>
                            </Row>

                        </Col>

                        <Col xs={24} sm={{ span: 6, offset: 0 }} className="mt-m-40 responsive-block">
                            {/* <img src={sixthTwo} /> */}
                            <Row type="flex" align="middle">
                                <Col xs={24}>
                                    <div className="yellow_bg" >
                                    Foto <br /> Adri
                                    </div>
                                </Col>
                            </Row>

                            <h3>Adrián Colinas</h3>
                            <Row>
                                <Col xs={21}>
                                    <h4> Product manager</h4>
                                </Col>
                                <Col xs={3} className="mt-0 text-right">
                                    <a href="https://www.linkedin.com/in/adrian-colinas/" target="_blank"><img className="linkedInImg" src={vector} width="28" height="28" /></a>
                                </Col>
                            </Row>

                        </Col>

                        <Col xs={24} sm={{ span: 6, offset: 0 }} className="mt-m-40 responsive-block">
                            {/* <img src={sixthThree} /> */}
                            <Row type="flex" align="middle">
                                <Col xs={24}>
                                    <div className="yellow_bg" >
                                    Foto <br /> Luis
                                    </div>
                                </Col>
                            </Row>

                            <h3>Luis</h3>
                            <Row>
                                <Col xs={21}>
                                    <h4>Full stack developer</h4>
                                </Col>
                                <Col xs={3} className="mt-0">
                                    <a href="https://www.linkedin.com/in/luis-alberto-pena-penas/" target="_blank"><img className="linkedInImg" src={vector} width="28" height="28" /></a>
                                </Col>
                            </Row>

                        </Col>

                        {/* </Space> */}
                    </Row>
                </Content>

                <AppFooter />
                </div>
                }

            </Layout>
        );


    }
}

export default Landing;
import React, { Component } from 'react';
import {
    Layout, Row, Col, Space
} from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import AppHeader from '../includes/AppHeader';
import AppFooter from '../includes/AppFooter';
import '../global.css';
import cartoon from '../images/cartoon-land.svg';
// import cartoon from '../images/cartoon-cookies.svg';

const { Content } = Layout;

class Cookies extends Component{
    render() {
        return (
        <Layout className="bg cookies-page">
            <AppHeader />
            <Content className="">
                    <br />
                    <br />
                    <br />

                    <Row>
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 24 }} >
                            <h1 className="main-heading">Lo de las cookies</h1>
                        </Col>
                        <Col xs={{ span: 24, offset:0 }} sm={{ span: 24, offset:0 }} lg={{ span: 20, offset:2 }} >
                            <p className="cookies-paragraph">
                            Somos muy de enrollarnos a hablar mientras nos tomamamos un café normalmente en un Starbucks aún que también somos mucho de un sitio que está cerquita que se llama Amasa que por cierto el que no lo conzoca hacen un café buenisimo y las tostadas con aguacate están bastente bien la verdad pero el café es top incluso a veces nos lo cogemos para hacerlo en casa


                            Las cookies son pequeñas cantidades de información que se almacenan en el navegador utilizado por cada usuario para que el servidor recuerde cierta información que posteriormente pueda utilizar.
                            </p>
                            <h4 className="cookies-text-heading">TIPOS DE COOKIES QUE UTILIZAMOS</h4>
                            <p className="cookies-paragraph">
                            Esta página web utiliza cookies de terceros que son aquellas que se envían a tu ordenador o terminal desde un dominio o una página web que no es gestionada por nosotros, sino por otra entidad que trata los datos obtenidos a través de las cookies.
                            En este caso las Cookies son utilizadas con fines estadísticos relacionados con las visitas que recibe y las páginas que se consultan, quedando aceptado su uso al navegar por ella.
                            </p>
                            {/* <br/> */}
                            <p className="cookies-paragraph">
                            Facebook
                            <br/>
                            Publicidad, estadísticas y mediciones
                            <br/>
                            Coloca Cookies en el ordenador o dispositivo y recibe la información almacenada en ellas cuando utilizas o visitas servicios prestados por otras empresas que utilizan los servicios de Facebook.
                            </p>
                            <p className="cookies-paragraph">
                            _ga (Google) <br/>
                            Duración: 2 años<br/>
                            Se usa para distinguir a los usuarios.
                            </p>
                            <p className="cookies-paragraph">
                            _gid (Google)<br/>
                            Duración: 24 horas<br/>
                            Se usa para distinguir a los usuarios.
                            </p>
                            <p className="cookies-paragraph">

                            _gat (Google)<br/>
                            Duración: 1 minuto<br/>
                            Se usa para limitar el porcentaje de solicitudes. Si has implementado Google Analytics mediante Google Tag Manager, esta cookie se llamará <br/>
                            _dc_gtm_{"<property-id>"}.
                            </p>
                            <p className="cookies-paragraph">
                            _gali (Google) <br/>
                            Duración: 30s <br/>
                            Atribución de enlace mejorada.
                            </p>
                            <p className="cookies-paragraph cookies-bottom">
                            Si desea más información más sobre los tipos de cookies de seguimiento y análisis de datos de Google haga clic aquí.

                            </p>
                            <img className="cookies-image" src={cartoon} alt="cartoon"/>
                        </Col>

                    </Row>
                </Content>
            <AppFooter />
        </Layout>
        );
    }
}

export default Cookies;
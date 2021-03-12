import React, { Component } from 'react';
import {
    Layout, Row, Col, Space
} from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import AppHeader from '../includes/AppHeader';
import AppFooter from '../includes/AppFooter';
import '../global.css';
import sixthOne from '../images/61.png';
import sixthTwo from '../images/62.png';
import sixthThree from '../images/63.png';
import vector from '../images/Vector.svg';

const { Content } = Layout;

class LandingFirst extends Component{
    render() {
        return (
        <Layout className="bg first-page">
            {/* <AppHeader /> */}
            <Content className="">
                    <br />
                    <br />
                    <br />

                    <Row>
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 24 }} >
                            <p className="first-landing-p">
                            Somos muy de enrollarnos a hablar mientras nos tomamamos un café normalmente en un Starbucks aún que también somos mucho de un sitio que está cerquita que se llama Amasa que por cierto el que no lo conzoca hacen un café buenisimo y las tostadas con aguacate están bastente bien la verdad pero el café es top incluso a veces nos lo cogemos para hacerlo en casa
                            </p>
                        </Col>

                    </Row>
                </Content>
            {/* <AppFooter /> */}
        </Layout>
        );
    }
}

export default LandingFirst;
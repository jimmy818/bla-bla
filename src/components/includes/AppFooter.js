import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import './HeaderFooter.css';

const { Footer } = Layout;

class AppFooter extends Component {
    state = {}
    render() {
        return (

            <Footer className="footer_bg">
                <p className="footer_text">Tenemos que hablar</p>

                <Row className="footer_second_row">
                    <Col xs={24} sm={12} lg={12} >
                        <p className="footer_mail">
                            <a href="mailto:sos@blaagency.com">sos@blaagency.com</a>
                        </p>

                    </Col>
                    <Col xs={24} sm={12} lg={12} >
                        <p className="footer_made_with">Made with 🍪 & ☕️ by Bla.</p>
                    </Col>
                </Row>
            </Footer>

        );
    }
}

export default AppFooter;
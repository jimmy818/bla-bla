import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'
// import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import './HeaderFooter.css';
import '../global.css';
import Bla from '../images/Bla..svg';

class AppHeader extends Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };

    // showSettings(event) {
    //     event.preventDefault();

    // }



    render() {
        // const { current } = this.state;

        return (
            <React.Fragment>
            <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top bla_nav">
                <Link className="navbar-brand" to="/">
                    <img src={Bla} />    
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mr-5">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item mr-5">
                            <a className="nav-link" href="#">Proyectos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <br />
            <br />
            
            </React.Fragment>
            // <Menu right >
            //     <a id="home" className="menu-item" href="/">Home</a>
            //     <a id="about" className="menu-item" href="/about">About</a>
            //     <a id="contact" className="menu-item" href="/contact">Contact</a>
            //     <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
            // </Menu>

            // <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" >
            //     <Menu.Item key="bla">
            //         <h2 className="logo_text">BLA</h2>
            //     </Menu.Item>

            //     <Menu.Item key="Contacto" className="float-right menu_font">
            //         Contacto
            //         </Menu.Item>

            //     <Menu.Item key="Proyectos" className="float-right menu_font">
            //         Proyectos
            //         </Menu.Item>

            //     <Menu.Item key="About" className="float-right menu_font">
            //         About
            //         </Menu.Item>
            // </Menu>

        );
    }
}

export default AppHeader;
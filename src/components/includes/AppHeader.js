import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'
// import { Menu } from 'antd';
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
            <nav class="navbar navbar-expand-md navbar-light bg-light fixed-top bla_nav">
                <a class="navbar-brand" href="#">
                    <img src={Bla} />    
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item mr-5">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item mr-5">
                            <a class="nav-link" href="#">Proyectos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <br />
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
import './Nav.css'
import React from 'react'
import Nav_item from './Nav_item'

export default props =>
    <aside className="menu-area">
        <nav className="menu">    
            {/* <a href="#/">
                <i className="fa fa-home"></i> Início
            </a>
            <a href="#/">
                <i className="fa fa-home"></i> Usuários
            </a> */}    
            <Nav_item href="#/" icon="home" title="Início"/>
            <Nav_item href="#/users" icon="home" title="Usuários"/>
        </nav>
    </aside>
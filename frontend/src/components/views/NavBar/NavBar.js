import React from 'react';

import './Sections/NavBar.css'
import MenCategory from './Sections/MenCategory';
import WomenCategory from './Sections/WomenCategory';

function NavBar(props) {
    return (
        <>
        <header id="header">
            <div className="container">
                <div className="row">
                    <div className="header-title"><a href="/">DEarborn</a></div>
                    <div className="row-log">
                        <div className="logged-out pull-right"><a href="/login">로그인</a></div>
                        <div className="register pull-right"><a href="/register">회원가입</a></div>
                    </div>
                </div>
            </div>
        </header>
        <nav>
            <div className="menu-container">
                <div className="menu">Men
                    <MenCategory />
                </div>
                <div className="menu">Women
                    <WomenCategory />
                </div>
            </div>
        </nav>
        </>
    );
}

export default NavBar;
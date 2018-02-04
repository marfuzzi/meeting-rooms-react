import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <header className="header">
                <div className="header__sideLeft"><a className="logo" href="/"></a></div>
                {this.props.buttonCreate &&
                    <div className="header__sideRight">
                        <a href="/create">
                            <button className="button buttonCreate">Создать встречу</button>
                        </a>
                    </div>
                }
            </header>
        )
    }
}

export default Header;

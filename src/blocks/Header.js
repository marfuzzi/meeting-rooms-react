import React, { Component } from 'react';

class Header extends Component {

    _renderButtonCreate() {
        const { buttonCreate } = this.props;
        if (buttonCreate) {
            return (
                <div className="header__sideRight"><a href="/create">
                    <button className="button buttonCreate">Создать встречу</button></a></div>
            );
        }
    }

    render() {
        return (
            <header className="header">
                <div className="header__sideLeft"><a className="logo" href="/"></a></div>
                {this._renderButtonCreate()}
            </header>
        )
    }
}

export default Header;

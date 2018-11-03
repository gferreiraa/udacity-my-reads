import React from 'react'

const NavBar = () => {
    return(
        <div>
            <nav className="navbar navbar--customize">
                <div className="navbar-brand">
                    <div className="navbar-item">
                        <img src={require('../assets/myreadsBrand.png')} alt="my Reads Brand"/>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default NavBar;
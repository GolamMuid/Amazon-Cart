import React from 'react';
import "./Header.css";
function Header(props) {
    const title = props.title;
    return (
        <div className="App-header">
            <h1 className="h1-style">{title}</h1>
        </div>
    )
}

export default Header;

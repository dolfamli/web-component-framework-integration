import React from "react";

const SideNav = ({ setSelectedContent }) => {
    return (
        <nav className="side-nav">
            <ul>
                <li onClick={() => setSelectedContent('button')}>Button</li>
                <li onClick={() => setSelectedContent('alert')}>Alert</li>
                <li onClick={() => setSelectedContent('dropdown')}>Dropdown</li>
                <li onClick={() => setSelectedContent('tooltip')}>TootlTip</li>
            </ul>
        </nav>
    );
};

export default SideNav;
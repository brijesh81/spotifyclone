import React from 'react';
import './SideBarOptions.css';

function SideBarOptions( {title, Icon}) {
    return (
        <div className="sidebaroptions">
            { Icon && <Icon className="sidebaroptions__Icon"/>}
            { Icon ? <h4>{title}</h4> : <p>{title}</p> }
        </div>
    )
}

export default SideBarOptions

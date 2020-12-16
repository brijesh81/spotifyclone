import React from 'react';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';
import './Player.css';

function Player({ spotify }) {
    return (
        <div className="player">
            <div className="player__body">
                <SideBar/>
                <Body spotify={spotify}/>
            </div>
            {/* Footer */}
            <Footer/>
        </div>
    )
}

export default Player

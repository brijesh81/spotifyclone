import React from 'react';
import SideBarOptions from '../SideBarOptions/SideBarOptions';
import './SideBar.css';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from '../../utils/DataLayer';

function SideBar() {

    const [{playlists}, dispatch] = useDataLayerValue();

    return (
        <div className="sidebar">
            <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>
            <SideBarOptions title="Home"  Icon={ HomeIcon }/>
            <SideBarOptions title="Search" Icon={ SearchIcon }/>
            <SideBarOptions title="Library" Icon={ LibraryMusicIcon }/>

            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />

            {playlists?.items?.map(playlist => (
                <SideBarOptions title={playlist.name}/>
            ))}
        </div>
    )
}

export default SideBar

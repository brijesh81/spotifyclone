import React from 'react';
import './Footer.css';
import RepeatIcon from '@material-ui/icons/Repeat';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <img className="footer__albumlogo   " src="" alt=""/>
                <div className="footer__songInfo">
                    <h4>Yeah</h4>
                    <p>Ussher</p>
                </div>
            </div>
            <div className="footer__center">
                <ShuffleIcon className="footer__shuffle"/>
                <SkipPreviousIcon className="footer__skip"/>
                <PlayCircleOutlineIcon fontSize="large" className="footer__play"/>
                <SkipNextIcon className="footer__skip"/>
                <RepeatIcon className="footer__repeat"/>
            </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon/>
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon/>
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby="continious-slide"/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer

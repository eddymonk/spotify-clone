import React from 'react';
import '../css/Footer.css';
import { useDataLayerValue } from './DataLayer';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import {Grid, Slider} from '@material-ui/core';


function Footer() {


 return (
  <div className="footer">

   <div className="footer__left">
     <img className="footer__albumLogo" src="" alt=""/>
     <div className="footer__songInfo">
      <h4> Song Name </h4>
      <p>artist</p>
     </div>
   </div>

   <div className="footer__centre">
   <ShuffleIcon className="footer__green"/>
   <SkipPreviousIcon className="footer__icon" />
   <PlayCircleOutlineIcon className="footer__icon" fontSize="large" />
   <SkipNextIcon className="footer__icon"  />
   <RepeatIcon className="footer__green" />
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
      <Slider />
     </Grid>
   </Grid>
   </div>
  </div>
 );
}

export default Footer;

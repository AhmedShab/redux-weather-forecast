import React from 'react';
import {GoogleMapLoader, GoogleMap } from "react-google-maps";


export default (props) =>{
  return (
    <GoogleMapLoader containerElement= {<div style={{hieght: '100%'}} />} />
  );
}

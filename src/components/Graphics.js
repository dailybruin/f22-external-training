import React from "react";
import styled from "styled-components";
import LeftDivider from "../images/Leftdivider.svg";
import RightDivider from "../images/Rightdivider.svg";


export default function Graphics(props) {
    return (
        <div>
            <div style={{'display':'flex', 'justifyContent':'space-between'}} >
                <img style={{ 'float': 'left', 'width': '20%' }} src={LeftDivider}/>
                
                <h1 style={{ 'font-family': 'Spectral serif', 'font-size': '3.5em',
                'font-weight': '900', 'color': '#706A61'}}>{props.text}</h1>
                <img style={{ 'float': 'right', 'width': '20%' }} src={RightDivider} />
            </div>

            <div>
                <img style={{ "width": "80%", "margin-top": "5em", "margin-bottom": "5em", 'border':'5px dashed #706A61'}} src={props.graphic}/>
            </div>

        </div>

  );
}

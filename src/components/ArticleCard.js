import React from 'react';
import styled from 'styled-components';

import TopLeft from '../images/topLeft.svg';
import TopRight from '../images/topRight.svg';
import bottomLeft from '../images/bottomLeft.svg';
import bottomRight from '../images/bottomRight.svg';
import testCartoon from '../images/testcartoon.jpg';

const Frame1 = styled.img`
    position: absolute;
    z-index: 30;
    top: 0;
    left: 0;
    margin-left: -10px;
    margin-top: -10px;
`
const Frame2 = styled.img`
    position: absolute;
    z-index: 30;
    top: 0;
    right: 0;
    margin-right: -10px;
    margin-top: -10px;
`
const Frame3 = styled.img`
    position: absolute;
    z-index: 30;
    bottom: 0;
    left: 0;
    margin-left: -10px;
    margin-bottom: -10px;
`
const Frame4 = styled.img`
    position: absolute;
    z-index: 30;
    bottom: 0;
    right: 0;
    margin-right: -10px;
    margin-bottom: -10px;
`


const Image = styled.img`
    display: block;
    width: 303px;
    max-width: 100%;
    height: 290px;
    margin: auto;
    box-sizing: content-box;
    object-fit: cover;
    z-index: 10;
`

const Title = styled.a`
    display: block;
    padding-top: 1em;
    font-size: 20px;
    font-weight: 600;
    text-align: center;   
    text-decoration: none;
    color: inherit;
`

const ByLine = styled.p`
    display: block;
    font-size: 18px;
    font-weight: 600;
    padding-bottom: 1em;
    text-align: center;
    font-style: italic;
    color: inherit;
`

export default function ArticleCard(info)
{
    
    const Container = styled.div`
        position: relative;
        /* max-width: 325px; */
        margin: auto;
        box-sizing: content-box;
        background-color: #C88080;
        /* height: fit-content; */
        padding: 1em;
        overflow: visible;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        
    `

    const ArticleInfo = styled.div`
        display: block;
        margin: auto;
        /* width: 303px; */
        /* height: fit-content; */
        background-color: E9BDBA;
        color: #706A61;
        font-family: 'Spectral', serif;
        line-height: 1em;
        
       
    `

    return (
        <Container>
            <Frame1 src={TopLeft}/>
            <Frame2 src={TopRight}/>
            <Frame3 src={bottomLeft}/>
            <Frame4 src={bottomRight}/>
            <a href={"https://dailybruin.com/"}><Image src={testCartoon}/></a>
            <ArticleInfo>
                <Title href={info.article_url}>{info.article_title}</Title>
                <ByLine> Written by {info.article_byline}</ByLine>
            </ArticleInfo>
        </Container>
    )
}


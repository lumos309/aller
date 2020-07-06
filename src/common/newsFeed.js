import styled from 'styled-components';
import React from 'react';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
import IconButton from '@material-ui/core/IconButton';
import logo from '../assets/images/logo.png'
import Paper from '@material-ui/core';
const NewsFeedContainer = styled.div`
    padding-top: 50px;
    background: #F9F8FF;
    height: 100%;
    width: 150px;
    position: absolute;
    display: grid;
    grid-template-rows: repeat(4, 100px);
`
const Logo = styled.img`
    height: 70px;
    margin: 0px auto;
`
const NewsContainer = styled.div`
    padding: 10px;
`

const NewsFeed = () => {
    return (
        <NewsFeedContainer>
            <Paper>
                <NewsContainer>
                    <h1> test</h1>
                </NewsContainer>
            </Paper>
        </NewsFeedContainer>
    )
}


export default NewsFeed;
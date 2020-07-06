import styled from 'styled-components';
import React from 'react';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import IconButton from '@material-ui/core/IconButton';
import logo from '../assets/images/logo.png'
import {Link} from 'react-router-dom';
const MenuContainer = styled.div`
    z-index: 999;
    padding-top: 50px;
    background: #F9F8FF;
    height: 100%;
    width: 150px;
    position: absolute;
    display: grid;
    grid-template-rows: repeat(4, 100px);
    && > a {
        margin: 0px 14%;
        & > span > svg {
            z-index: 50;
            font-size: 50px;
            margin: 0 auto;
        }
    }
`
const Logo = styled.img`
    height: 70px;
    margin: 0px auto;
`

const SideMenu = () => {
    return (
        <MenuContainer>
            <Logo src={logo}></Logo>
            <IconButton to="/dashboard" component={Link}>
                <HomeIcon/>
            </IconButton>
            <IconButton to="/itinerary" component={Link}>
                <AccessTimeOutlinedIcon/>
            </IconButton>
            <IconButton to="/" component={Link}>
                <ExitToAppOutlinedIcon/>
            </IconButton>
        </MenuContainer>
    )
}


export default SideMenu;
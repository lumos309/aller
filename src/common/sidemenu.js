import styled from 'styled-components';
import React from 'react';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
import IconButton from '@material-ui/core/IconButton';
import logo from '../assets/images/logo.png'
const MenuContainer = styled.div`
    padding-top: 50px;
    background: #F9F8FF;
    height: 100%;
    width: 150px;
    position: absolute;
    display: grid;
    grid-template-rows: repeat(4, 100px);
    && > button {
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
            <IconButton>
                <HomeIcon/>
            </IconButton>
            <IconButton>
                <SearchIcon/>
            </IconButton>
            <IconButton>
                <ReportProblemOutlinedIcon/>
            </IconButton>
        </MenuContainer>
    )
}


export default SideMenu;
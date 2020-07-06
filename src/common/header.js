import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import React from 'react';
import coverPhoto from '../assets/images/brooklyn.jpeg';

import AddIcon from '@material-ui/icons/Add';

const HeaderTextContainer = styled.div`
position: absolute;
left: 13%;
top: 15%;
`
const StyledH2 = styled.h2`
color: #fff;
`
const StyledH3 = styled.h3`
color: #fff;
`
const HeaderActions = styled.div`
position absolute;
top: 80%;
display: grid;
left:78%;
`

const AddButton = styled(Button)`
border-color: white !important;
color: white !important;
`


const HeaderContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    padding: 40px 0;
    position: relative;
`
const LocationHero = styled.img`
    width: 80%;
    border-radius: 15px;
    margin: auto 0;
    filter: brightness(0.7);
`
const StyledH1 = styled.h1`
    color: #fff;
    font-size: 45px;
`

const Header = () => {
    return (
    <HeaderContainer>
    <LocationHero src={coverPhoto}></LocationHero>
    <HeaderTextContainer>
        <StyledH1>Brooklyn Baby</StyledH1>
        <StyledH2>Jul 5 - Jul 7, 2020</StyledH2>
        <StyledH3>New York City, USA</StyledH3>
    </HeaderTextContainer>
    <HeaderActions>
        <AddButton variant="outlined">Add Itinerary <AddIcon/></AddButton>
    </HeaderActions>
</HeaderContainer>
)
}


export default Header;
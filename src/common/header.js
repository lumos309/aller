import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import React from 'react';
import {Link} from 'react-router-dom';

import ProgressRing from "../lib/progressRing";

import AddIcon from '@material-ui/icons/Add';
import BrooklynImage from '../assets/images/brooklyn.jpeg';

const HeaderTextContainer = styled.div`
position: absolute;
left: 13%;
top: 15%;
`

const HeaderStatsContainer = styled.div`
position: absolute;
right: 13%;
top: 15%;
`

const HeaderStatsContainerRow = styled.div`
height: 90px;
display: grid;
grid-template-columns: 50% 50%;
align-items: center;
color: white;
`


const StyledH2 = styled.h2`
color: #fff;
`
const StyledH3 = styled.h3`
color: #fff;
`
const HeaderActionsContainer = styled.div`
    position absolute;
    width: 80vw;
    top: 70%;
`
const HeaderActions = styled.div`
    display: grid;
    grid-template-columns: 300px 300px;
    justify-content: space-between;
    margin: 0 30px;
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
    
    image-fit: cover;
`
const StyledH1 = styled.h1`
    color: #fff;
    font-size: 45px;
`

const Score = styled.div`
    position: relative;
    top: -70px;
    right: -22px;
    font-size: 40px;
    color: white;
`

const Header = props => {
    const { handleToggleActiveTab, coverPhoto, isLocation, isCountryTab } = props; 
    return (
    <HeaderContainer>
        <LocationHero src={coverPhoto ?? BrooklynImage }></LocationHero>
        <HeaderTextContainer>
            {isLocation ? (
                <>
                <StyledH1>{props.locationName ?? "Hard Rock Hotel"}</StyledH1>
                <StyledH2>{props.locationVenue ?? "New York City, USA"}</StyledH2>
                </>
            ) : (
                <>
                {(isCountryTab || window.location.pathname === '/itinerary') && 
                <div>
                    <StyledH1>🌭 Brooklyn Baby 🇺🇲 </StyledH1>
                    <StyledH2>Jul 5 - Jul 7, 2020</StyledH2>
                    <StyledH3>New York City, USA</StyledH3>
                </div>}
                {!isCountryTab &&  window.location.pathname === '/dashboard'  &&
                <div>
                    <StyledH1> The 🌍 is your Oyster </StyledH1>
                    <StyledH2> Start exploring these countries now!</StyledH2>
                </div>}
                </>
            )}
            
        </HeaderTextContainer>
        {isCountryTab || window.location.pathname === '/itinerary' ? (
            <HeaderStatsContainer>
            <HeaderStatsContainerRow>
                <div><ProgressRing progress={props.safetyScore ?? 65} stroke={4} radius={45} /><Score>{props.safetyScore ?? 65}</Score></div>
                <div style={{height: "90px"}}>SAFETY RATING</div>
            </HeaderStatsContainerRow>
            <HeaderStatsContainerRow>
                <div><ProgressRing progress={props.priceScore ?? 88} stroke={4} radius={45} /><Score>{props.priceScore ?? 88}</Score></div>
                <div style={{height: "90px"}}>PRICE RATING</div>
            </HeaderStatsContainerRow>
        </HeaderStatsContainer>
        ) : null}
        {window.location.pathname === '/dashboard' && <HeaderActionsContainer>
            <HeaderActions>
                <AddButton variant="outlined" onClick={handleToggleActiveTab}>
                View World/Country
                </AddButton>     
                <AddButton component={Link} to="/itinerary" variant="outlined">Add Itinerary <AddIcon/></AddButton>
            </HeaderActions>
        </HeaderActionsContainer>
        }

    </HeaderContainer>
) 
}


export default Header;
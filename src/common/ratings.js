import styled from 'styled-components';
import React from 'react';
import Divider from '@material-ui/core/Divider';

import ProgressRing from "../lib/progressRing";

const CommunityFeedContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(4, auto);
    grid-row-gap: 30px; 
`

const RatingsContainer = styled.div`
    padding: 10px;
`

const Title = styled.div`
    font-weight: 600;
    margin-bottom: 5px;
`
const Content = styled.div`
    font-weight: 400;
    font-size: 16px;
    margin: 20px 0;
    color: #706765;
`

const Score = styled.div`
    position: relative;
    top: -85px;
    right: -37px;
    font-size: 40px;
    color: white;
`

const ContentContainer = styled.div`
    display: grid;
    grid-template-columns: auto minmax(auto, 130px);
    grid-column-gap: 20px;
`
const Ratings = (props) => {
    const {ratings} = props;
    if (!ratings) return "Loading...";
    return (
        <CommunityFeedContainer>
            {ratings.map(rating => {
                return (
                            <RatingsContainer>
                                <Title>{rating.title}</Title>
                                <Divider/>
                                <ContentContainer>
                                    <p><ProgressRing progress={rating.score} stroke={4} radius={60} /><Score>{rating.score}</Score></p>
                                    <Content>{rating.description}</Content>
                                </ContentContainer>

                                <Divider/>
                            </RatingsContainer>
                       );
            })}

        </CommunityFeedContainer>
    )
}


export default Ratings;
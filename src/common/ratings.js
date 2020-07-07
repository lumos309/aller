import styled from 'styled-components';
import React from 'react';
import Divider from '@material-ui/core/Divider';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles, withStyles } from '@material-ui/core/styles';

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
    margin: 10px 0px -25px 0px;
`

const SubContentContainer = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-row-gap: 5px;
`

const StyledLinearProgress = withStyles(() => ({
    root: {
        height: 6,
        borderRadius: 3,
      },
    colorPrimary: {
    backgroundColor: '#DDD',
    },
    bar: {
      borderRadius: 3,
      backgroundColor: '#ff9800',
    },
  }))(LinearProgress);

function LinearProgressWithLabel(props) {
    return (
        <>
        <Box display="flex" alignItems="space-between">
            <Box width="100%" minWidth={35}>
            <Typography variant="body1" >{props.title}</Typography>
            </Box>
            <Box minWidth={35}>
            <Typography variant="body1" >{`${Math.round(
                props.value,
            )}`}</Typography>
            </Box>
        </Box>
        
        <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
            <StyledLinearProgress variant="determinate" {...props} />
            </Box>
        </Box>
      </>
    );
  }

const Ratings = (props) => {
    const {ratings} = props;
    if (!ratings) return "Loading...";
    return (
        <CommunityFeedContainer>
            {ratings.map(rating => {
                return (
                            <RatingsContainer>
                                
                                {/*
                                <Title>{rating.title}</Title> 
                                
                                <ContentContainer>
                                    //Can't get material-ui's CircularProgress to work
                                    <div><ProgressRing progress={rating.score} stroke={4} radius={60} /><Score>{rating.score}</Score></div>
                                    <Content>{rating.description}</Content>
                                </ContentContainer>

                                <Divider/>
                                */}
                                <SubContentContainer>
                                    {!rating.subcategories ? null : rating.subcategories.map(subcategory => {
                                        return (
                                        <div>
                                        <LinearProgressWithLabel variant="determinate" value={subcategory.score} title={subcategory.title} />
                                            <Typography variant="body2" color="textSecondary">{subcategory.description}</Typography>
                                        </div>
                                        )
                                    })}
                                </SubContentContainer>
                                
                            </RatingsContainer>
                       );
            })}

        </CommunityFeedContainer>
    )
}


export default Ratings;
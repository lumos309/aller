import styled from 'styled-components';
import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';

import OpenInNewIcon from "../assets/images/open_in_new.png";

const CommunityFeedContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(4, auto);
    grid-row-gap: 30px; 
`

const RatingsContainer = styled.div`
    padding: 10px;
`

const SubContentContainer = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-row-gap: 5px;
`

const Source = styled.span`
    background: #ff8a65;
    font-size: 11px;
    padding: 2px 4px;
    border-radius: 3px;
    width: auto;
    color: white;
    position: relative;
`

const Icon = styled.img`
    position: relative;
    width: 12px;
    margin-left: 3px;
    text-align: center;
    top: 2px;
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
                                            <>
                                        <div style={{marginBottom: "5px"}}>
                                        <LinearProgressWithLabel variant="determinate" value={subcategory.score} title={subcategory.title} />
                                            <Typography variant="body2" color="textSecondary">{subcategory.description}</Typography>
                                            
                                                <Source>{subcategory.source}<Icon src={OpenInNewIcon} alt={"Open"}></Icon>
                                                </Source>
                                               
                                        </div>
                                        </>
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
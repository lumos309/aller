import styled from 'styled-components';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

const CommunityFeedContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(4, auto);
    grid-row-gap: 30px; 
`

const ReviewContainer = styled.div`
    padding: 10px;
`
const MetaContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    margin-bottom: 3px;
`

const MetaContainerUser = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
`

const MetaContainerUserDetails = styled.div`
    display: flex;
    flex-direction: column;
    grid-template-rows: auto auto;
    justify-content: center;
`

const MetaContainerDate = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 5px;
`

const MetaTripDuration = styled.div`
    margin: 10px 0px 3px 0px;
`

const Content = styled.div`
    font-weight: 400;
    font-size: 16px;
    margin: 20px 0;
    color: #706765;
`
const Author = styled.div`
    font-style: italic;
    margin: 0px 5px;
`

const Username = styled.div`
    font-style: italic;
    color: #888;
    margin: 0px 5px;
`
const Image = styled.img`
    width: 50px;
    margin: auto 0;
    border-radius: 50%;
`
const CommunityFeed = (props) => {
    const {reviews} = props;
    if (!reviews) return "Loading...";
    return (
        <CommunityFeedContainer>
            {reviews.map(review => {
                return (<Paper key={review.id}>
                            <ReviewContainer>
                                <MetaContainer>
                                <MetaContainerUser>
                                <Image src={review.imageURL}></Image>
                                <MetaContainerUserDetails>
                                <Author>{review.author}</Author>
                                <Username>{review.username}</Username>
                                </MetaContainerUserDetails>
                                </MetaContainerUser>
                                <MetaContainerDate>{review.date}</MetaContainerDate>
                                </MetaContainer>
                                
                                <Divider/>
                                    <Content>"{review.content}"</Content>
                                <Divider/>
                                
                                    <MetaTripDuration>{'Trip Duration: ' + review.lengthOfStay}</MetaTripDuration>
                        
                               
                            </ReviewContainer>
                        </Paper>);
            })}

        </CommunityFeedContainer>
    )
}


export default CommunityFeed;
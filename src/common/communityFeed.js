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
const Author = styled.div`
    font-style: italic;
    margin: auto 0;
`

const Username = styled.div`
    font-style: italic;
    color: #888;
    margin: auto 0;
`
const Image = styled.img`
    width:100%;
    margin: auto 0;
`
const ContentContainer = styled.div`
    display: grid;
    grid-template-columns: auto minmax(auto, 130px);
    grid-column-gap: 20px;
`
const CommunityFeed = (props) => {
    const {reviews} = props;
    if (!reviews) return "Loading...";
    return (
        <CommunityFeedContainer>
            {reviews.map(review => {
                return (<Paper>
                            <ReviewContainer>
                                <MetaContainer>
                                <Author>{review.author}</Author>
                                <Username>{review.username}</Username>
                                </MetaContainer>
                                
                                <Divider/>
                                <ContentContainer>
                                    <Content>{review.content}</Content>
                                    <Image src={review.imageURL}></Image>
                                </ContentContainer>

                                <Divider/>
                                <MetaContainer>
                                    <p>{'Trip Duration: ' + review.lengthOfStay}</p>
                                    <p>{review.date}</p>
                                </MetaContainer>
                            </ReviewContainer>
                        </Paper>);
            })}

        </CommunityFeedContainer>
    )
}


export default CommunityFeed;
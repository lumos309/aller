import styled from 'styled-components';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

import StarFilled from "../assets/images/star_filled.png";
import StarUnfilled from "../assets/images/star_unfilled.png";

const CommunityFeedContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(4, auto);
    grid-row-gap: 30px; 
`

const ReviewContainer = styled.div`
    padding: 10px 10px 0px 10px;
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
    font-style: italic;
    font-size: 12px;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 5px;
    color: #888;

`

const Content = styled.div`
    font-weight: 400;
    font-size: 16px;
    margin: 20px 0;
    color: #706765;
`
const Author = styled.div`

    font-size: 12px;
    margin: 0px 5px;
`

const Username = styled.div`
    font-style: italic;
    font-size: 12px;
    color: #888;
    margin: 0px 5px;
`
const Image = styled.img`
    width: 50px;
    margin: auto 0;
    border-radius: 50%;
`

const Star = styled.img`
    object-fit: cover;
    width: 12px;
`

const StarsContainer = styled.div`
    display: flex;
    margin: 0px 5px;
`

const Stars = props => {
    const stars = [];
    for (let i = 1; i <= props.n; i++) {
        stars.push(<Star src={StarFilled} alt={"X"} />);
    }
    for (let i = props.n; i < 5; i++) {
        stars.push(<Star src={StarUnfilled} alt={"X"} />);
    }
    return stars;
}

const Reviews = (props) => {
    const {reviews} = props;
    if (!reviews) return "Loading...";
    return (
        <CommunityFeedContainer>
            {reviews.map(review => {
                return (<Paper>
                            <ReviewContainer>
                                <MetaContainer>
                                <MetaContainerUser>
                                <Image src={review.imageURL}></Image>
                                <MetaContainerUserDetails>
                                <Author>{review.author}</Author>
                                <Username>{review.username}</Username>
                                <StarsContainer><Stars n={review.rating} /></StarsContainer>
                                </MetaContainerUserDetails>
                                </MetaContainerUser>
                                <MetaContainerDate>{review.date}</MetaContainerDate>
                                </MetaContainer>
                                
                                <Divider/>
                                    <Content>"{review.content}"</Content>
                               
                            </ReviewContainer>
                        </Paper>);
            })}

        </CommunityFeedContainer>
    )
}


export default Reviews;
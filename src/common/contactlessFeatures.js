import styled from 'styled-components';
import React from 'react';
import Divider from '@material-ui/core/Divider';

const NewsFeedContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(4, auto);
    grid-row-gap: 30px; 
`

const FeatureContainer = styled.div`
    padding: 0px 10px;
`
const Title = styled.div`
    font-weight: 600;
    margin-bottom: 5px;
`
const Description = styled.div`
    font-weight: 400;
    font-size: 16px;
    margin: 20px 0;
    color: #706765;
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
const ContactlessFeatures = (props) => {
    const {features} = props;
    if (!features) return "Loading...";
    return (
        <NewsFeedContainer>
            {features.map(feature => {
                return (
                            <FeatureContainer>
                                <Title>{feature.name}</Title>
                                <Divider/>
                                <ContentContainer>
                                    <Description>{feature.description}</Description>
                                    <Image src={feature.imageURL}></Image>
                                </ContentContainer>
                            </FeatureContainer>
                        );
            })}

        </NewsFeedContainer>
    )
}


export default ContactlessFeatures;
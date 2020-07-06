import styled from 'styled-components';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';



const NewsFeedContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(4, auto);
    grid-row-gap: 30px; 
`

const NewsContainer = styled.div`
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
const Description = styled.div`
    font-weight: 400;
    font-size: 16px;
    margin: 20px 0;
    color: #706765;
`
const Author = styled.div`
    font-style: italic;
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
const NewsFeed = (props) => {
    const {news} = props;
    return (
        <NewsFeedContainer>
            {news.map(item => {
                return (<Paper>
                            <NewsContainer>
                                <Title>{item.title}</Title>
                                <Divider/>
                                <ContentContainer>
                                    <Description>{item.description}</Description>
                                    <Image src={item.imageURL}></Image>
                                </ContentContainer>

                                <Divider/>
                                <MetaContainer>
                                    <Author>{item.author}</Author>
                                    <p>{item.date}</p>
                                </MetaContainer>
                            </NewsContainer>
                        </Paper>);
            })}

        </NewsFeedContainer>
    )
}


export default NewsFeed;
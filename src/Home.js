import React from 'react'
import styled from 'styled-components'
import Product from './Product'
function Home() {
    return (
        <Container>
            <Banner></Banner>
            <Content>
                <Product/>
                <Product/>
            </Content>
        </Container>
    )
}

export default Home


const Container = styled.div`

`
const Banner = styled.div`
    background-image: url('https://imgur.com/SYHeuYM.jpg');
    min-height: 600px;
    background-size: cover;
    background-position: center;
    mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
    z-index: 1;
`
const Content = styled.div`
    padding: 0 10px;
    margin-top: -350px;
    display: flex;
    z-index: 100;
`
import React from 'react'
import styled from 'styled-components'

function Product() {
    return (
        <Container>
            <Title>Ipad Pro 2021</Title>
            <Price> $1,200</Price>
            <Rating>⭐ ⭐ ⭐ ⭐  &#11088;</Rating>
            
            <Image src="https://media.wired.com/photos/5ce715745577983ec691af6c/master/w_1600%2Cc_limit/iPad-Pro-12-9-(Apple).jpg"/>
            
            <ActionSection>
                <AddToCartButton>Add to cart</AddToCartButton>
            </ActionSection>
        </Container>
    )
}

export default Product


const Container = styled.div`
    background: #ffffff;
    flex: 1;
    z-index: 100;
    padding: 20px;
    margin: 20px;
    max-height: 400px;
    display: flex;
    flex-direction: column;
`
const Title = styled.span`
    font-weight: Bold;
    font-size: 17px;
    
`
const Price = styled.span`
    margin: 10px 0;
`
const Rating = styled.p`

`
const Image = styled.img`
    max-height: 200px;
    object-fit: contain;
`

const AddToCartButton = styled.button`
    width: 100px;
    height: 30px;
    background: #f0c14b;
    border: 2px solid #a88734;
    border-radius: 3px;

`
const ActionSection = styled.div`
    display: grid;
    place-items: center;
`
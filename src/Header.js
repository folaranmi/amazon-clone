import React from 'react'
import styled  from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Container>
            <HeaderLogo>
                <Link to="/">
                    <img src={'https://i.imgur.com/7I9Was5.png'}/>  
                </Link>
            </HeaderLogo>
            <HeaderOptionAddress>
                <LocationOnIcon/>
                <HeaderOption>
                    <OptionLineOne className='Header-optionLineOne'>Hello,</OptionLineOne>
                    <OptionLineTwo className='Header-optionLineTwo'>Select your address</OptionLineTwo>
                </HeaderOption>
            </HeaderOptionAddress>

            <HeaderSearch>
                <HeaderSearchInput type='text' />
                <HeaderSearchIconContainer>
                    <SearchIcon/>
                </HeaderSearchIconContainer>
            </HeaderSearch>

            <HeaderNavItems>
                <HeaderOption>
                    <OptionLineOne>Hello Folaranmi,</OptionLineOne>
                    <OptionLineTwo>Account & Lists</OptionLineTwo>
                </HeaderOption>

                <HeaderOption>
                    <OptionLineOne>Returns</OptionLineOne>
                    <OptionLineTwo>& Orders</OptionLineTwo>
                </HeaderOption>

                <HeaderOptionCart>
                    <Link to="/cart">
                        <ShoppingBasketIcon/>
                        <CartCount>4</CartCount>
                    </Link>
                </HeaderOptionCart>

            </HeaderNavItems>
        </Container>
    )
}

export default Header

const Container = styled.div`
    height: 60px;
    background-color: #0F1111;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #ffffff;
`

const HeaderLogo = styled.div`
    img{
        width: 100px;
        margin-left: 11px;
    }
`

const HeaderOptionAddress = styled.div`
    padding: 0 0 0 9px;
    display: flex;
    align-items: center;
`
const OptionLineOne = styled.div`

`
const OptionLineTwo = styled.div`
    font-weight: bold;
`
const HeaderSearch = styled.div`
    display: flex;
    flex-grow: 1;
    height: 40px;
    border-radius: 4px;
    overflow: hidden;
    margin-left: 4px;
    background-color: #fff;

    :focus-within{
        box-shadow: 0 0 3px #F90;
    }
`
const HeaderSearchInput = styled.input`
    flex-grow: 1;
    border: 0;
    :focus{
        outline: none;
    }
`
const HeaderSearchIconContainer = styled.div`
    background-color: #febd69;
    width: 45px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`
const HeaderNavItems = styled.div`
    display: flex;
`
const HeaderOption = styled.div`
    padding: 10px 9px;
`
const HeaderOptionCart = styled.div`
    display: flex;
    a{
        display: flex;
        align-items: center;
        padding: 0 9px 0 0;
        color: #ffffff;
        text-decoration: none;
    }
`
const CartCount = styled.div`
    padding: 0 0 0 6px;
`
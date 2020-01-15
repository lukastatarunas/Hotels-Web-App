import styled from 'styled-components';

export const IndexContainer = styled.div`
    text-align: center;
`
export const Nav = styled.nav`
    background-color: #4267B2;
    height: 50px;
    margin: -10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 20px;
`
export const Anchor = styled.a`
    text-decoration: none;
    color: #FFFFFF;
    font-family: verdana;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
`
export const H1 = styled.h1`
    font-family: verdana;
    margin-top: 200px;
`
export const Button = styled.button`
    background-color: #FFFFFF; 
    color: #000000; 
    border: 3px solid #4267B2;
    border-radius: 10px;
    padding: 10px;
    outline: none;
    font-family: verdana;
    font-weight: bold;
    &:hover {
        cursor: pointer;
        background-color: #4267B2;
        color: white;
    }
`
export const HotelMapContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
export const HotelContainer = styled.div`
    text-align: center;
    margin: 20px;
    &:hover {
        cursor: pointer;
    }
`
export const H2 = styled.h2`
`
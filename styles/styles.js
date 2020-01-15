import styled from 'styled-components';

export const Nav = styled.nav`
    background-color: #4267B2;
    height: 50px;
    margin: -10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 20px;
`;

export const Anchor = styled.a`
    text-decoration: none;
    color: #FFFFFF;
    font-family: verdana;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
`;

export const HotelMapContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const HotelContainer = styled.div`
    text-align: center;
    margin: 20px;
    &:hover {
        cursor: pointer;
    }
`;

export const PhotoGalleryContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
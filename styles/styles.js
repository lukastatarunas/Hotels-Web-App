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
    background-color: rgba(255, 255, 255, 0.7);
    transition: all 0.2s;
    &:hover {
        cursor: pointer;
        background-color: rgba(220, 220, 220, 0.7);
        transform: scale(1.06);
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

export const Input = styled.input`
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    outline: none;
    box-shadow: none;
    border-width: 0px;
    border: none;
`;

export const Button = styled.button`
    padding: 10px;
    margin: 10px;
    outline: none;
    box-shadow: none;
    cursor: pointer;
    background-color: #FFFFFF; 
    color: #000000; 
    border: 3px solid #4267B2;
    border-radius: 10px;
    font-family: verdana;
    font-weight: bold;
    &:hover {
        cursor: pointer;
        background-color: #4267B2;
        color: white;
    }
`;

export const HotelDescription = styled.h2`
    text-align: center;
`;

export const HotelDescriptionText = styled.h3`
    text-align: center;
    margin-bottom: 30px;
`;

export const Reviews = styled.h2`
    text-align: center;
`;

export const ReviewsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0px 10px;
`;

export const Review = styled.h3`
    margin: 10px;
`;
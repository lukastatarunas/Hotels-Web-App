import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { Nav, Anchor, HotelMapContainer, HotelContainer, H2 } from '../styles/styles';
import GradeIcon from '@material-ui/icons/Grade';

const Hotels = ({ hotels }) => {
    return (
        <div>
            <Nav>
                <Link href='/'>
                    <Anchor>Home</Anchor>
                </Link>
                <Link href='/hotels'>
                    <Anchor>Hotels</Anchor>
                </Link>
            </Nav>
            <HotelMapContainer>
                {hotels.map(hotel => (
                    <Link key={hotel.id} href={`/hotels/${hotel.id}`}>
                        <HotelContainer>
                            <img src={`${hotel.photo}`} alt='hotel' height="300" width="400" />
                            <div>
                                <H2>{hotel.name}</H2>
                                <p>€{hotel.price}/night</p>
                                <p>{hotel.starRating}</p>
                                <GradeIcon />
                                <p>User average rating: {hotel.userRating}</p>
                            </div>
                        </HotelContainer>
                    </Link>
                ))}
            </HotelMapContainer>
        </div>
    );
}

Hotels.getInitialProps = async function() {
    const response = await fetch('http://localhost:5000/hotelsList');
    const data = await response.json();
    return {
        hotels: data
    }
}

export default Hotels;
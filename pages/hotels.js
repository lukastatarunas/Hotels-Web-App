import Link from 'next/link';
import Navigation from '../components/Navigation';
import fetch from 'isomorphic-unfetch';
import { HotelMapContainer, HotelContainer } from '../styles/styles';
import GradeIcon from '@material-ui/icons/Grade';

const Hotels = ({ hotels }) => {
    return (
        <div>
            <Navigation />
            <HotelMapContainer>
                {hotels.map(hotel => (
                    <Link key={hotel.id} href='/hotels/[id]' as={`/hotels/${hotel.id}`}>
                        <HotelContainer>
                            <img src={`${hotel.photo}`} alt='hotel' height='300' width='400' />
                            <div>
                                <h2>{hotel.name}</h2>
                                <p>€{hotel.price}/night</p>
                                {hotel.starRating.map((star, starIndex) => <GradeIcon key={starIndex} />)}
                                <p>User average rating: {hotel.userRating}</p>
                            </div>
                        </HotelContainer>
                    </Link>
                ))}
            </HotelMapContainer>
        </div>
    );
}

Hotels.getInitialProps = async () => {
    const response = await fetch('http://localhost:5000/hotelsList');
    const data = await response.json();
    return {
        hotels: data
    }
}

export default Hotels;
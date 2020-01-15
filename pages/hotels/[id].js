import { useRouter } from 'next/router';
import Navigation from '../../components/Navigation';
import ContactForm from '../../components/ContactForm';
import fetch from 'isomorphic-unfetch';
import { HotelDescription, HotelDescriptionText, PhotoGalleryContainer, Reviews, ReviewsContainer, Review } from '../../styles/styles';

const HotelDetails = ({ hotelDetails }) => {
    const router = useRouter();

    return (
        <div>
            <Navigation />
            <HotelDescription>Hotel description</HotelDescription>
            <HotelDescriptionText>{hotelDetails[router.query.id - 1].description}</HotelDescriptionText>
            <PhotoGalleryContainer>
                {hotelDetails[router.query.id - 1].photoGallery.map((photo, photoIndex) => (
                    <img key={photoIndex} src={photo} alt='hotel' height='300' width='400' />
                ))}
            </PhotoGalleryContainer>
            <Reviews>Reviews</Reviews>
            <ReviewsContainer>
                {hotelDetails[router.query.id - 1].reviews.map((review, reviewIndex) => (
                    <Review key={reviewIndex}>{review}</Review>
                ))}
            </ReviewsContainer>
            <ContactForm />
        </div>
    );
}

HotelDetails.getInitialProps = async () => {
    const response = await fetch('http://localhost:5000/hotelDetails');
    const data = await response.json();
    return {
        hotelDetails: data
    }
}

export default HotelDetails;
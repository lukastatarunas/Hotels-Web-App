import { useRouter } from 'next/router';
import Navigation from '../../components/Navigation';
import ContactForm from '../../components/ContactForm';
import fetch from 'isomorphic-unfetch';
import { PhotoGalleryContainer } from '../../styles/styles';

const HotelDetails = ({ hotelDetails }) => {
    const router = useRouter();

    console.log(router.query.id)

    return (
        <div>
            <Navigation />
            <h3>Hotel description: {hotelDetails[router.query.id - 1].description}</h3>
            {hotelDetails[router.query.id - 1].photoGallery.map((photo, photoIndex) => (
                <PhotoGalleryContainer key={photoIndex}>
                    <img src={photo} alt='hotel' height='300' width='400' />
                </PhotoGalleryContainer>
            ))}
            <div>
                {router.query.id}
            </div>
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
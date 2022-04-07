import BookingBanner from '../Components/Booking-Banners/BookingBanner'
import Commitments from '../Components/Commitments/Commitments'
import Experience from '../Components/Experience/Experience'
import Faqs from '../Components/Faqs/Faqs'
import Header from '../Components/Header/Header'
import HWorks from '../Components/HowItWorks/HWorks'
import NavBar from '../Components/NavBar/NavBar'
import Services from '../Components/OurServices/Services'

function Homepage() {
    return (
        <div>
            <NavBar />
            <Header />
            <Services />
            <BookingBanner />
            <Experience />
            <HWorks />
            <Commitments />
            <Faqs />
        </div>
    )
}

export default Homepage
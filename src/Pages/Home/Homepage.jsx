import BookingBanner from '../../Components/Banners/Booking/BookingBanner'
import ContactBanner from '../../Components/Banners/ContactB/ContactBanner'
import Commitments from '../../Components/Commitments/Commitments'
import Experience from '../../Components/Experience/Experience'
import Faqs from '../../Components/Faqs/Faqs'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import HWorks from '../../Components/HowItWorks/HWorks'
import NavBar from '../../Components/NavBar/NavBar'
import Services from '../../Components/OurServices/Services'

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
            <ContactBanner />
            <Faqs />

            <Footer />
        </div>
    )
}

export default Homepage
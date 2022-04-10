import './BookingBanner.scss';

function BookingBanner() {
    return (
        <div className='booking-banner'>
            <div className="wrapper">
                <div className="banner">
                    <div className="main-title">
                        Would you like to taste homemade food?
                    </div>
                    <div className="sub-title">
                        click here to view our menú
                    </div>
                </div>
                <div className="booking-btn">
                    <span>
                        Menu
                    </span>
                </div>
            </div>
        </div>
    )
}

export default BookingBanner
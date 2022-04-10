import './ContactBanner.scss';

function ContactBanner() {
    return (
        <div className='contact-banner'>
            <div className="wrapper">
                <div className="banner">
                    <div className="main-title">
                        Can't find what you are looking for?
                    </div>
                    <div className="sub-title">
                        Click on the button below to get in touch with
                    </div>
                </div>
                <div className="booking-btn">
                    <span>
                        Contact
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ContactBanner
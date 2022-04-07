import BookNow from '../BookNow/BookNow'
import './HWorks.scss'

function HWorks() {
    return (
        <div className='How-It-Works'>
            <div className="wrapper">
                <div className="title">
                    <h2>
                        Here's How it works
                    </h2>
                    <span>
                        Follow three simple steps and we will provide you with the services of a private chef.
                    </span>
                </div>
                <div className="content">
                    <ul className="content-ul">
                        <li className="item">
                            <div className="top">1</div>
                            <div className="item-title">
                                Get in touch
                            </div>
                            <div className="bottom">
                                <p className="content">
                                    Send us an email, call us or send us a WhatsApp message.

                                    We will get back to you as soon as possible
                                </p>
                            </div>
                        </li>
                        <li className="item">
                            <div className="top">2</div>
                            <div className="item-title">
                                Choose your menu
                            </div>
                            <div className="bottom">
                                <p className="content">
                                    Select your menu with the dishes you like the most, schedule your service and confirm it.
                                </p>
                            </div>
                        </li>
                        <li className="item">
                            <div className="top">3</div>
                            <div className="item-title">
                                Pricing and payment
                            </div>
                            <div className="bottom">
                                <p className="content">
                                    Check the price of your service, choose your payment method and pay for your service.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="booking">
                    <BookNow />
                </div>
            </div>
        </div>
    )
}

export default HWorks
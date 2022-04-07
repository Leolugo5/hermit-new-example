import './Services.scss'
import service1 from './media/service1.jpg'
import service2 from './media/service2.jpg'
import service3 from './media/service3.jpg'


function Services() {
    return (
        <div className='our-services'>
            <div className="wrapper">
                <div className="title">
                    <h2 className="h2-title">
                        Our Services
                    </h2>
                </div>
                <div className="content">
                    <div className="content-wrapper">
                        <div className="services">
                            <div className="item">
                                <div className="top">
                                    <img src={service1} alt="" className="img" />
                                </div>
                                <div className="bottom">
                                    <div className="sub-title">
                                        <h3 className="title">
                                            Short-Term Service
                                        </h3>
                                    </div>
                                    <div className="description">
                                        Cooking serivice per day with traditional Mexican dishes
                                    </div>
                                    <button className="more">
                                        Learn more

                                        <div className="hidden-description-card" >
                                            <div className="card-top">
                                                <div className="duration">
                                                    1 - 4 days
                                                </div>
                                                <div className="plan-price-description-title">
                                                    <h3 className="card-title">
                                                        Short-Term Service
                                                    </h3>
                                                    <span className="card-subtitle">
                                                        Consists of:
                                                    </span>
                                                </div>
                                                <div className="close-btn">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                                                        <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="card-content">
                                                <ul className="list-of-content">
                                                    <li className="card-item">
                                                        Short-term service is cooking service private that covers the cost of food, preparations and cleaning.
                                                    </li>
                                                    <li className="card-item">
                                                        Cooking service per day includes a two times: breakfast, lunch or dinner.
                                                    </li>
                                                    <li className="card-item">
                                                        If you want a third time the cost is $35 extra.
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bottom">
                                                <div className="times">
                                                    <div className="icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                                                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                                                        </svg>
                                                    </div>
                                                    <div className="card-description">
                                                        2 times
                                                    </div>
                                                </div>
                                                <div className="price">
                                                    <div className="icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tag" viewBox="0 0 16 16">
                                                            <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z" />
                                                            <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586 7 7L13.586 9l-7-7H2v4.586z" />
                                                        </svg>
                                                    </div>
                                                    <div className="adult">
                                                        $50 USD ADULT
                                                    </div>
                                                    <div className="children">
                                                        $35 USD CHILD
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className="item">
                                <div className="top">
                                    <img src={service2} alt="" className="img" />
                                </div>
                                <div className="bottom">
                                    <div className="sub-title">
                                        <h3 className="title">
                                            Meal Plan Service
                                        </h3>
                                    </div>
                                    <div className="description">
                                        Weekly cooking service with traditional Mexican dishes                                </div>
                                    <button className="more">
                                        Learn more
                                    </button>
                                </div>
                            </div>
                            <div className="item">
                                <div className="top">
                                    <img src={service3} alt="" className="img" />
                                </div>
                                <div className="bottom">
                                    <div className="sub-title">
                                        <h3 className="title">
                                            The king's chef Service
                                        </h3>
                                    </div>
                                    <div className="description">
                                        Luxury cook service with gourmet dishes
                                    </div>
                                    <div className="comming-soon more">
                                        Comming Soon!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default Services
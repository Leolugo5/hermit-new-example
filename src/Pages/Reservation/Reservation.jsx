import Footer from '../../Components/Footer/Footer'
import NavBar from '../../Components/NavBar/NavBar'
import './Reservation.scss'


function Reservation() {
    return (
        <div className='reservation-page'>
            <NavBar />
            <div className="reservation-wrapper">
                <div className="reservation-content">
                    <div className="reservation-form">
                        <div className="top-content">
                            <h1 className='main-title'>
                                Reservation
                            </h1>
                            <h3 className="subtitle">
                                We would love to cook for you!
                            </h3>
                        </div>
                        <form action="" className='form-wrapper'>
                            <div className="top-section">
                                <div className="name-section">
                                    <div className="section">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" name="name" id="name" />
                                    </div>
                                    <div className="section">
                                        <label htmlFor="last_name">Last Name</label>
                                        <input type="text" name="last_name" id="last_ame" />

                                    </div>
                                </div>

                                <div className="ema-section">
                                    <div className="section">
                                        <label htmlFor="email">Email</label>
                                        <input className='left' type="email" name="email" id="email" />

                                    </div>
                                    <div className="section">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input type="tel" name="phone" id="phone" />

                                    </div>
                                </div>

                                <div className="dates-section">
                                    <div className="section">
                                        <label htmlFor="arrival">Service starts on</label>
                                        <input type="date" name="arrival" id="arrival" />

                                    </div>
                                    <div className="section">

                                        <label htmlFor="finish">Finish on</label>
                                        <input type="date" name="finish" id="finish" />
                                    </div>
                                </div>

                                <div className="type-service">
                                    <div className="section">

                                        <label htmlFor="service_selected">What service would you like</label>
                                        <select name="service_selected" id="service_selected">
                                            <option value="short-service">Short-Term Service </option>
                                            <option value="meal_plan">Meal Plan Service </option>
                                            <option value="own_menu">I want to build my own </option>
                                        </select>
                                    </div>

                                    <div className="amount-of-people">
                                        <div className="section">

                                            <label htmlFor="Adults">How Many Adults?</label>
                                            <select name="adults" id="adults">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">13</option>
                                                <option value="13">13</option>
                                                <option value="14">14</option>
                                                <option value="15">15</option>
                                                <option value="16">16</option>
                                                <option value="17">17</option>
                                                <option value="18">18</option>
                                                <option value="19">19</option>
                                                <option value="20">20</option>
                                                <option value="more_than_20">More Than 20</option>
                                            </select>
                                        </div>

                                        <div className="section">

                                            <label htmlFor="Kids">How Many Kids?</label>
                                            <select name="kids" id="kids">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">13</option>
                                                <option value="13">13</option>
                                                <option value="14">14</option>
                                                <option value="15">15</option>
                                                <option value="16">16</option>
                                                <option value="17">17</option>
                                                <option value="18">18</option>
                                                <option value="19">19</option>
                                                <option value="20">20</option>
                                                <option value="more_than_20">More Than 20</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bottom-section">
                                <div className="section">
                                    <label htmlFor="allergies">Is any on your party has allergies? which ones?</label>
                                    <input type="text" name="allergies" id="allergies" />

                                </div>
                                <div className="section text-area">

                                    <label htmlFor="special_request">Special requests</label>
                                    <textarea name="requests" id="requests" cols="30" rows="10">Special requests</textarea>
                                </div>
                            </div>

                            <div className="btn-submit">
                                <button type="submit">Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Reservation
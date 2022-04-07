import './Experience.scss'
import drinks1 from './media/drinks1.jpg'
import breakfast1 from './media/breakfast1.jpg'
import dinner1 from './media/dinner1.jpg'
import feedback1 from './media/feedback1.jpg'


function Experience() {
  return (
    <div className='Hermit-Experince'>
        <div className="wrapper">
            <div className="title">
                <h2>
                    Live the hermit experience
                </h2>
            </div>
            <div className="content">
                <div className="whats-included">
                    <span className="sub-title">
                        Our services include
                    </span>
                </div>
                <ul className="ul-wrapper">
                    <li className="item">
                        <div className="top">
                            <img src={drinks1} alt="Drinks" className="img" />
                        </div>
                        <div className="bottom">
                            <span>
                                Welcome with drinks and snacks
                            </span>
                        </div>
                    </li>
                    <li className="item">
                        <div className="top">
                            <img src={breakfast1} alt="breakfast" className="img" />
                        </div>
                        <div className="bottom">
                            Breackfast coffe or natural juice
                        </div>
                    </li>
                    <li className="item">
                        <div className="top">
                            <img src={dinner1} alt="Dinner" className="img" />
                        </div>
                        <div className="bottom">
                            Lunch or Dinner (Served with soup or salad, side dishes and dessert)
                        </div>
                    </li>
                    <li className="item">
                        <div className="top">
                            <img src={feedback1} alt="Feedback" className="img" />
                        </div>
                        <div className="bottom">
                            Completion of service: Rate us, Give us feedback and recommend us 
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Experience
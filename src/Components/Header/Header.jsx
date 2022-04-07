import BookNow from '../BookNow/BookNow'
import './Header.scss'


export default function Header() {
    return (
        <div className='main-header'>
            <div className="wrapper">
                <div className="container">
                    <div className="card-content">
                        <h1 className="h1-title">
                            "Hermit cooking for us " will provide traditional home cooked meals in the privacy of your Cozumel vacation rentals
                        </h1>
                        <span className="span-content">
                            We specialize in placing experienced culinary talent in private residences
                        </span>
                        <BookNow />
                    </div>
                </div>
            </div>
        </div>
    )
}

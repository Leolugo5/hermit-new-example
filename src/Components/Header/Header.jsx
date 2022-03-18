import BookNow from '../BookNow/BookNow'
import './Header.css'
import foto1 from'../../media/foto1.jpeg'


export default function Header() {
    return (
        <div className='main-header'>
            <div className="wrapper">
                <div className="container">
                    <div className="img">
                        <img src={foto1} alt="" className="IMG-Bg" />
                    </div>
                    <div className="card-content">
                        <h1 className="h1-title">
                            "Heermit cooking for us" Will provide traditional homecooked meals in the privacy of your vacation rentals in Cozumel
                        </h1>
                        <span className="span-content">
                            We specialize in placing experienced culinary talent in private residences.
                        </span>
                        <BookNow/>
                    </div>
                </div>
            </div>
        </div>
    )
}

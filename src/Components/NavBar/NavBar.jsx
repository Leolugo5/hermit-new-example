import './nav.css'


export default function NavBar() {
    return (
        <div className='nav'>
            <div className="wrapper">
                <ul className="ul-container">
                    <li className="li-item">
                        <span className="item">
                            Home
                        </span>
                    </li>
                    <li className="li-item">
                        <span className="item">
                            Menu
                        </span>
                    </li>
                    <li className="li-item">
                        <span className="item">
                            Pricing
                        </span>
                    </li>
                    <li className="li-item">
                        <span className="item">
                            <img src="#" alt="HT Logo" className="img-logo" />
                        </span>
                    </li>
                    <li className="li-item">
                        <span className="item">
                            Gallery
                        </span>
                    </li>
                    <li className="li-item">
                        <span className="item">
                            About
                        </span>
                    </li>
                    <li className="li-item">
                        <span className="item">
                            Support
                        </span>
                    </li>
                    <li className="li-item">
                        <span className="item">
                            EN 
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

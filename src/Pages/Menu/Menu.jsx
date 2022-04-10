import './Menu.scss';
import { link } from 'react-router-dom';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
import { Menu_breakfast, Menu_lunch, Menu_dinner, Menu_vegetarian, Menu_salads, Menu_soups, Menu_kids, Menu_dessert } from '../../DB/Menus.js'
import Show from './Show/Show';
import { useState } from 'react';


function Menu() {
    const [menu, setMenu] = useState(Menu_breakfast)
    return (
        <div className='menu'>
            <NavBar />
            <div className="menu-main-container">
                <div className='sidebar'>
                    <div className="wrapper">
                        <div className="side-selector">
                            <ul className="food-selector">
                                <li className="food-item" onClick={() => setMenu(Menu_breakfast)}>
                                    Breakfast
                                </li>
                                <li className="food-item" onClick={() => setMenu(Menu_lunch)}>
                                    Lunch
                                </li>
                                <li className="food-item" onClick={() => setMenu(Menu_dinner)}>
                                    Dinner
                                </li>
                                <li className="food-item" onClick={() => setMenu(Menu_vegetarian)}>
                                    Vegetarian dish
                                </li>
                                <li className="food-item" onClick={() => setMenu(Menu_salads)}>
                                    Salads
                                </li>
                                <li className="food-item" onClick={() => setMenu(Menu_soups)}>
                                    Soups and chowders
                                </li>
                                <li className="food-item" onClick={() => setMenu(Menu_kids)}>
                                    Kids food
                                </li>
                                <li className="food-item" onClick={() => setMenu(Menu_dessert)}>
                                    Dessert
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="food-list">
                        <div className="wrapper">
                            {menu.map((dish, i) => {
                                return <Show dish={dish} index={i} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-section">
                <Footer />
            </div>
        </div>
    )
}

export default Menu
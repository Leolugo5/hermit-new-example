import './Show.scss'




function Show({dish, index}) {
  return (
    <div className='dish-wrapper' key={index}>
        <div className="dish-container">
            <div className="dish-content">
                <div className="img">
                    <img src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?cs=srgb&dl=pexels-lisa-fotios-1279330.jpg&fm=jpg" alt="Foto de prueba" className="dish-pic" />
                </div>
                <div className="middle-content">
                    <div className="title-container">
                        <h4 className="title">
                            {dish.name}
                        </h4>
                    </div>
                    <div className="content">
                        <p className='p-description'>
                            {dish.description}
                        </p>
                    </div>
                    <div className="ingredients">
                        <span className="ing-list">
                            {dish.main_ingredients}
                        </span>
                    </div>
                </div>
                <div className="more-component">
                    <button className='more-btn'>View More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Show
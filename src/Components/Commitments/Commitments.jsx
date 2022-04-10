import './commitments.scss';

function Commitments() {
  return (
    <div className='commitments'>
      <div className="wrapper">
        <div className="com-title">
          <h2 className="com-h2-title">
            Our commitment to you
          </h2>
        </div>
        <div className="com-content">
          <div className="com-ul">
            <li className="item">
              <div className="item-top">
                <h3>
                  Exclusive
                </h3>
              </div>
              <div className="item-content">
                We are dedicated in providing exclusive cooking services in private residences. Hermit cooking for us matches the chef with the client.
              </div>
            </li>
            <li className="item">
              <div className="item-top">
                <h3>
                  Confidentiality
                </h3>
              </div>
              <div className="item-content">
                We are committed to building trust for our clients, we make sure to respect their privacy and maintain discretion in the service process.
              </div>
            </li>
            <li className="item">
              <div className="item-top">
                <h3>
                  Efficiency
                </h3>
              </div>
              <div className="item-content">
                We strive to provide the best cooking service offered while maintaining the flavors and quality you deserve.
              </div>
            </li>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Commitments
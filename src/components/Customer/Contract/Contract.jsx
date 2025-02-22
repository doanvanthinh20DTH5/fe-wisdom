import './Contract.css';
function Contract() {
    return (
        <>
            <div className="main-container">
                <div id="menuContainer" />
                <div className="container">
                    <input
                        type="text"
                        placeholder="You can search by contact name"
                        className="search-bar"
                    />
                    <div className="card">
                        <div className="icon">
                            <img src="../../../images/car-sensor.png" alt="Car sensor package" />
                        </div>
                        <div className="details">
                            <p>Car sensor package</p>
                            <button onClick="navigateToDetail()">Review the contact</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src="../../../images/Fire Alarm.png" alt="IoT sensor package" />
                        </div>
                        <div className="details">
                            <p>IoT sensor package</p>
                            <button onClick="navigateToDetail()">Review the contact</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contract;
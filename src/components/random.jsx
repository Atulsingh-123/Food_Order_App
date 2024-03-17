import React, { useState } from 'react';

function PopupMessage() {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div>
            <button onClick={togglePopup}>Submit</button>
            {showPopup && (
                <div className="popup" style={{ padding: "10px" }}>
                    <p>You successfully submitted!</p>
                </div>
            )}
        </div>
    );
}

export default PopupMessage;
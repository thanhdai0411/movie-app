import React from 'react';
import './Body.scss';

function BodyLogin() {
    return (
        <div className="body-login">
            <div className="group-icon">
                <img src="/images/cta-logo-one.svg" alt="" />
                <button>GET ALL THERE</button>
                <p>
                    Get Premier Access to Raya and the Last Dragon for an additional fee
                    with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
                    The Disney Bundle will increase by $1
                </p>
                <img src="/images/cta-logo-two.png" alt="" className="logo-two" />
            </div>
        </div>
    );
}

export default BodyLogin;

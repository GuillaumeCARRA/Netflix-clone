import React from 'react';
import './PlansScreen.css'

function PlansScreen() {


    return (
        <div className="plansScreen">
            <div className="plansScreen___plan">
                <div className="plansScreen__info">
                    <h5>Premium</h5>
                    <h6>4K + HDR</h6>
                    <button 
                    className="button__right"
                    >
                        Subscribe
                    </button>
                   
                    <h5>Basic</h5>
                    <h6>1080p</h6>
                    <button 
                    className="button__right"
                    >
                        Subscribe
                    </button>
                   
                    <h5>Standard</h5>
                    <h6>720p</h6>
                    <button 
                     className="button__right"
                     >
                        Subscribe
                    </button>
                </div>

                {/* <button>Subscribe</button>
                <button>Subscribe</button>
                <button>Subscribe</button> */}

            </div>
        </div>
    )
}

export default PlansScreen;

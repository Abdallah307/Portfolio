import React from 'react';
import './Quotes.css';

const Quotes = (props) => {
    return(
        <div id="famous-quotes">
            <h3 className="title">What Others Our Sayings</h3>
            
            <article className="authors">
                <section className="auth-section">
                    <div className="author-img-1 author-img"></div>

                    <div className="auth-txt">
                        <p>
                        “You can never plan the future by the past.”
                        </p>
                        <p className="auth-name">&mdash; Walter White</p>
                    </div>
                </section>

                <section className="auth-section">
                    <div className="author-img-2 author-img"></div>
                    <div className="auth-txt">
                        <p>
                        “He who has a why to live can bear almost any how.” 
                        </p>
                        <p className="auth-name">&mdash; Ann Marie</p>
                    </div>
                </section>

                <section className="auth-section">
                    <div className="author-img-3 author-img"></div>
                    <div className="auth-txt">
                        <p >
                           “Take into account that great love and great achievements involve great risk.”
                        </p>
                        <p className="auth-name">&mdash; Dani Gomez</p>

                    </div>
                </section>
            </article>
            <hr/>
        </div>
    )
}

export default Quotes;
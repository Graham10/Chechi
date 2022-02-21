import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css'


const footer = () => {
    return (
        <div className="footer">
            <div className="footer_col">
                <div className='footercol'>
                    <h3>Company</h3>
                    <nav>
                        <Link to='/about'>About</Link>
                        <Link to='/services'>Services</Link>
                        <Link to='/teams'>Teams</Link>
                    </nav>
                </div>
                <div className='footercol'>
                    <h3>Help</h3>
                    <nav>
                        <Link to='/faqs'>FAQs</Link>
                        <Link to='/enquiries'>Enquiries</Link>
                        <Link to='/suggestions'>Suggestions</Link>
                    </nav>
                </div>
                <div class="footercol">
                    <h3>Follow Us</h3>
                    <div class="social_links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                </div>
            </div>
            );

};

            export default footer;

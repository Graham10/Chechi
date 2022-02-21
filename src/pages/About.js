import React from 'react';
import { useNavigate } from "react-router-dom";

const About = () => {
    let navigate = useNavigate();
    return (
        <div>
            <h1> About us </h1>
            <p>Our Company Chechi Limited is one of the upcoming and fast growing companies. We deal with airtime loading either by using our well developed mobile app, using our ussd code or even through our website.
                We have a good relationship with our top telecommunications network i.e Safaricom, Telkom, and Airtel. We also deal with short messages subscriptions: Tthese include daily news, sports news, betting predictions,
                love messages, motivational quotes and so many much more. We have over 800,000 gross subscribers whereas 300, 000 are active. Our services have received good feedback from the current users and we aim to use these
                messages to improve our user base. Through continues team effort and support from our investors, our company aims at hitting the big markets soon and bringing forth a flurry of profits and many market users.
                <br></br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut consequat justo, sit amet mollis turpis. Cras congue sed mi luctus ullamcorper. Donec a pretium nulla. Nunc facilisis, metus at gravida commodo, nulla 
                sapien pulvinar justo, nec pretium est lacus et mi. In et orci malesuada, iaculis dolor nec, bibendum leo. Duis vel justo convallis, scelerisque risus et, sodales est. Phasellus pulvinar diam a metus semper molestie. 
                Nunc felis massa, mollis ut ex a, vulputate gravida sapien. Pellentesque dapibus feugiat ullamcorper. In ex massa, gravida nec libero ac, dapibus congue mi.
                Vivamus imperdiet nunc ut sollicitudin rhoncus. Nullam id mauris vestibulum, volutpat orci in, hendrerit dui. Duis consequat ante purus. Duis varius sagittis augue, ut tincidunt lacus commodo et. In purus justo, imperdiet
                 at diam vel, dictum egestas lacus. Etiam ultricies augue mollis, tristique mi facilisis, sodales eros. Integer vulputate ac neque id posuere. Sed diam urna, dictum et placerat pretium, pulvinar a leo.
                Mauris quis orci vehicula, tempus leo non, rhoncus erat. Nulla sollicitudin blandit fermentum. Ut rhoncus finibus erat, nec convallis eros vulputate pretium. Donec ut felis in sapien lacinia maximus. Aliquam ligula quam,
                 ultricies non risus nec, finibus congue nibh. Maecenas porttitor dui aliquet nisi viverra, non lacinia ipsum mattis. Aenean ultricies non orci sed tristique. Nulla luctus fermentum odio, in condimentum erat fermentum non. Vivamus blandit quis lorem eget accumsan. Donec tincidunt euismod molestie. Nulla tempus vestibulum aliquet. Integer vel elit felis. Etiam ligula nulla, imperdiet vitae tincidunt id, gravida eu libero.
                Praesent sit amet neque vel magna venenatis laoreet. 
            </p>
            <button
                onClick={() => {
                    navigate("/contacts");
                }}
            >
                Contact us
            </button>
        </div>
    );
};

export default About;

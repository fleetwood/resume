import React from 'react';
import Section from './Section';

const item = (title, content) => (
    <div className="m-1 p-3 col-sm-5 col-md-3 border rounded interest-item">
        <h5>{title}</h5>
        <p>{content}</p>
    </div>
);

const Interests = {
        title: 'Interests',
        content: 
            <div className="w-100 d-flex align-items-start align-content-stretch flex-wrap">
                {item('Coding','For work and for fun.')}
                {item('Writing','My lady and I are writing a romance novel.')}
                {item('Tattooing','We tattoo, too.')}
                {item('Music','I fake guitar pretty well.')}
                {item('Illustration','Been published a few times.')}
                {item('Philosophy','Ethical quandaries and Gestaltzerfalls.')}
            </div>
}

export default (<Section title={Interests.title} titleClass='interests' content={Interests.content} />);

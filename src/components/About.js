import React from 'react';
import { Section, config } from './Section';

const About = {
    title: <span>{config.About.title}<hr /></span>,
    sub: <span>
        <p className="about-content">{config.About.sub}</p>
        <div className="social-icons">
            <a href="https://www.linkedin.com/in/jfleetwood/">
                <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://gitlab.com/Fleetwood/">
                <i className="fab fa-github"></i>
            </a>
        </div>
    </span>,
    content: 
        <p className="about-content">{config.About.content}</p>
}

export default (<Section title={About.title} titleClass='about' sub={About.sub} content={About.content} />);

import React from 'react';
import { Section, config, parse } from './Section';

<<<<<<< HEAD
export default (
    <Section title={parse(config.About.title)} titleClass='about'>
=======
const About = {
    title: <span>{parse(config.About.title)}<hr /></span>,
    sub: <span>
>>>>>>> master
        <p className="about-content">{parse(config.About.sub)}</p>
        <div className="social-icons">
            <a href="https://www.linkedin.com/in/jfleetwood/">
                <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://gitlab.com/Fleetwood/">
                <i className="fab fa-github"></i>
            </a>
        </div>
<<<<<<< HEAD
        <p className="about-content">{parse(config.About.content)}</p>
    </Section>
);
=======
    </span>,
    content: 
        <p className="about-content">{parse(config.About.content)}</p>
}

export default (<Section title={About.title} titleClass='about' sub={About.sub} content={About.content} />);
>>>>>>> master

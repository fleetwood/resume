import React from 'react';
import { Section, config, parse } from './Section';
//TODO: Break this out into a section directory
export default (
    <Section title={parse(config.About.title)} titleClass='about'>
        <p className="about-content">{parse(config.About.sub)}</p>
        <div className="social-icons">
            <a href="https://www.linkedin.com/in/jfleetwood/">
                <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://gitlab.com/Fleetwood/">
                <i className="fab fa-github"></i>
            </a>
        </div>
        <p className="about-content">{parse(config.About.content)}</p>
    </Section>
);

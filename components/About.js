import React from 'react';
import Section from './Section';

const About = {
    title: <span>John<span className="text-primary">Fleetwood</span><hr /></span>,
    sub: <span>
        1520 Concord Dr · Downers Grove, IL 60516 · (331) 233-8935 · <a href="mailto:wizening@gmail.com">wizening@gmail.com</a>
        <div className="social-icons">
            <a href="https://www.linkedin.com/in/jfleetwood/">
                <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://gitlab.com/Fleetwood/">
                <i className="fab fa-github"></i>
            </a>
        </div>
    </span>,
    content: <span>
        <p>Write some stuff</p>
    </span>
}
export default (<Section title={About.title} titleClass='about' sub={About.sub} content={About.content} />);

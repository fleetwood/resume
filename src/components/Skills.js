import React from 'react';
import Section from './Section';
import SkillList from './SkillList';
import {utils} from './helpers/utils';

const skills = [
    'html5',
    'css3',
    'js',
    'angular',
    'react',
    'node',
    'sass',
    'less',
    'wp',
    'gulp',
    'grunt',
    'npm',
    'python'
];
const Skills = {
        title: 'Skills',
        sub: 'Programming Languages & Tools',
        content: <span>
            <SkillList skills={skills} />

            <div className="subheading mb-3">Workflow</div>
            <ul className="fa-ul mb-0">
                <li>
                <i className="fa-li fa fa-check"></i>
                Mobile-First, Responsive Design</li>
                <li>
                <i className="fa-li fa fa-check"></i>
                Cross Browser Testing &amp; Debugging</li>
                <li>
                <i className="fa-li fa fa-check"></i>
                Cross Functional Teams</li>
                <li>
                <i className="fa-li fa fa-check"></i>
                Agile Development &amp; Scrum</li>
            </ul>
        
        </span>
}
export default (<Section title={Skills.title} sub={Skills.sub} content={Skills.content} />);

import React from 'react';
import Section from './Section';
import SkillList from './Skill.List';
import SkillGroup from './Skill.Group';
import {utils} from './helpers/utils';

const randomGuid = () => utils.guid('99999');

const skillList = [
    'angular',
    'atlassian',
    'aws',
    'bootstrap',
    'confluence',
    'docker',
    'css3',
    'git',
    'github',
    'gitlab',
    'gulp',
    'grunt',
    'html5',
    'jira',
    'jquery',
    'js',
    'less',
    'node',
    'npm',
    'php',
    'react',
    'sass',
    'slack',
    'wp',
    'python'
];

const skillGroups = [
    {
        title: 'Workflow',
        skills: [
            'Mobile-First, Responsive Design',
            'Cross Browser Testing & Debugging',
            'Cross Functional Teams',
            'Agile Development & Scrum'
        ]
    },
    {
        title: 'Agile',
        skills: [
            'Mobile-First, Responsive Design',
            'Cross Browser Testing & Debugging',
            'Cross Functional Teams',
            'Agile Development & Scrum'
        ]
    }
]

const Skills = {
        title: 'Skills',
        sub: 'Programming Languages & Tools',
        content: <span>
            <SkillList skills={skillList} />
            {skillGroups.map(g => <SkillGroup key={randomGuid()} groups={g} />)}
        </span>
}
export default (<Section title={Skills.title} sub={Skills.sub} content={Skills.content} />);

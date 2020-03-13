import React from 'react';
import SkillList from './Skill.List';
import RecursiveList from './RecursiveList';

const tenure = (prop) => {
    if (prop) {
        return (
            <div>
                <span className="text-primary col-sm">{prop}</span>
            </div>
        )
    } else {
        return (<div></div>)
    }
}

const experience = (history) => {
    if (history.history) {
        return (
            <span>
                <h3 className="mb-0 resume-title">{history.title}</h3>
                <div className="mb-5 pt-3">
                    {history.history.map(item => experience(item))}
                </div>
            </span>
        )
    }
    else {
        return (
            <span>
                <h3 className="mb-0">{history.title}</h3>
                <div className="row">
                    <div className="subheading col-lg">{history.company}</div>
                    {tenure(history.tenure)}
                </div>
            </span>
        )
    }
}

const ExperienceItem = (props) => {
    const history = props.history || {}
        , anchor = history.anchor ? history.anchor : ''
        , tech = history.tech ? history.tech : []
        , skills = history.skills ? history.skills : [];
    return (
        <div className="resume-item d-flex flex-column flex-md-row justify-content-between" id={anchor}>
            <div className="flex-column container resume-content">
                {experience(history)}
                <SkillList skills={tech} size='sm' />
                <RecursiveList items={skills} css="skill-list" />
            </div>
        </div>
    )
}

ExperienceItem.defaultProps = {
    props: []
}

export default ExperienceItem;

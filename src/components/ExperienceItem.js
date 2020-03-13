import React from 'react';
import SkillList from './Skill.List';
import RecursiveList from './RecursiveList';

const ExperienceItem = (props) => {
    const anchor = props.history && props.history.anchor ? props.history.anchor : ''
        , tech = props.history && props.history.tech ? props.history.tech : []
        , skills = props.history && props.history.skills ? props.history.skills : [];
    return (
        <div className="resume-item d-flex flex-column flex-md-row justify-content-between" id={anchor}>
            <div className="flex-column container resume-content">
                <h3 className="mb-0 resume-title">{props.history.title}</h3>
                <div className="row">
                    <div className="subheading col-lg">{props.history.company}</div>
                    <div>
                        <span className="text-primary col-sm">{props.history.tenure}</span>
                    </div>
                </div>
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

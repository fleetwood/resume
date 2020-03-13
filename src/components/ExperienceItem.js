import React from 'react';
import ReactHtmlParser from 'react-html-parser';
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

const company = (prop) => ( <div className="subheading col-lg">{prop || ''}</div> )

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
                    {company(history.company)}
                    {tenure(history.tenure)}
                </div>
                {history.description}
            </span>
        )
    }
}

const ExperienceItem = (props) => {
    const history = props.history || {};
    return (
        <div className="resume-item d-flex flex-column flex-md-row justify-content-between" id={history.anchor || ''}>
            <div className="flex-column container resume-content">
                {experience(history)}
                <SkillList skills={history.tech || []} size='sm' />
                <RecursiveList items={history.skills || []} css="skill-list" />
            </div>
        </div>
    )
}

ExperienceItem.defaultProps = {
    props: []
}

export default ExperienceItem;

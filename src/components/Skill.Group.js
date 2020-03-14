import React from 'react';
import {utils} from './helpers/utils';
import SkillGroupItem from './Skill.GroupItem';

const SkillGroup = (props) => {
    return (
        <span>
            <div className="subheading mb-3">{props.groups.title}</div>
            <div>Todo: Nested array</div>
            <ul className="fa-ul mb-0">
                {props.groups.skills.map(s => <SkillGroupItem key={utils.guid('99999')} skill={s} />)}
            </ul>
        </span>
    )
}

SkillGroup.defaultProps = {
    title: '',
    skills: []
}

export default SkillGroup;

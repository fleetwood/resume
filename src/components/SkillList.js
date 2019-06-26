import React from 'react';
import {utils} from './helpers/utils';
import SkillItem from './SkillItem';

const SkillList = (props) => {
    return (
        <ul className="list-inline dev-icons">
            {props.skills.map(s => <SkillItem key={utils.guid('99999')} skill={s} />)}
        </ul>
    )
}
SkillList.defaultProps = {
    skills: []
}

export default SkillList;

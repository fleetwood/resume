import React from 'react';
import {utils} from './helpers/utils';

const SkillItem = (props) => (<li key={props.guid} className="list-inline-item">{utils.skillIcon(props.skill, props.size)}</li>);

SkillItem.defaultProps = {
    guid: utils.numGuid(),
    size: 's'
}

export default SkillItem;

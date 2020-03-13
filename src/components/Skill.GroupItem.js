import React from 'react';
import {utils} from './helpers/utils';

const SkillGroupItem = (item) => (
    <li key={item.skill.guid}><i className="fa-li fa fa-check"></i>{item.skill}</li>
);

export default SkillGroupItem;

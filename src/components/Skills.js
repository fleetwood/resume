import React from 'react';
import { Section, config, ReactHtmlParser } from './Section';
import SkillList from './Skill.List';
import SkillGroup from './Skill.Group';
import {utils} from './helpers/utils';

export default (
    <Section title={config.Skills.title} sub={config.Skills.sub}>
        <SkillList skills={config.Skills.skillList} />
        {config.Skills.skillGroups.map(g => <SkillGroup key={utils.numGuid()} groups={g} />)}
    </Section>
);
